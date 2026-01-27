import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const parseResult = insertWaitlistSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({
          message: parseResult.error.errors[0]?.message || "Invalid email address",
        });
      }

      const { email } = parseResult.data;

      const existing = await storage.getWaitlistByEmail(email);
      if (existing) {
        return res.status(409).json({
          message: "This email is already on the waitlist",
        });
      }

      const entry = await storage.addToWaitlist({ email });
      
      return res.status(201).json({
        message: "Successfully added to waitlist",
        entry,
      });
    } catch (error) {
      console.error("Waitlist error:", error);
      return res.status(500).json({
        message: "Something went wrong. Please try again later.",
      });
    }
  });

  app.get("/api/waitlist/count", async (_req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      return res.json({ count });
    } catch (error) {
      console.error("Waitlist count error:", error);
      return res.status(500).json({ message: "Failed to get waitlist count" });
    }
  });

  return httpServer;
}
