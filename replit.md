# Hydra PeptideOS

## Overview
Hydra PeptideOS is an AI-powered peptide protocol operating system landing page. It features a dark theme with teal/cyan accents and includes email waitlist functionality for early access signups.

## Current State
The landing page is complete with:
- Hero section with email waitlist signup form
- 6 feature cards with hover dropdown details
- Trust badges (HIPAA Compliant, PubMed-Verified, Science-Backed)
- Science stats section
- Footer with branding

## Project Architecture

### Frontend (client/)
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **Routing**: Wouter
- **State/Data**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation

Key files:
- `client/src/pages/home.tsx` - Main landing page
- `client/src/components/waitlist-form.tsx` - Reusable waitlist form component
- `client/src/index.css` - Theme configuration (dark theme, teal accents)

### Backend (server/)
- **Framework**: Express.js
- **Storage**: In-memory storage (MemStorage)

Key files:
- `server/routes.ts` - API endpoints
- `server/storage.ts` - Storage interface and implementation

### Shared (shared/)
- `shared/schema.ts` - Zod schemas and TypeScript types

## API Endpoints

### POST /api/waitlist
Add email to waitlist
- Request: `{ email: string }`
- Success: 201 `{ message: "Successfully added to waitlist", entry: {...} }`
- Error: 400 (invalid email) or 409 (duplicate email)

### GET /api/waitlist/count
Get current waitlist count
- Response: `{ count: number }`

## Design System
- Background: Dark theme with red undertones (hsl(0 20% 8%))
- Primary: Crimson Red (#DC143C - hsl(348 83% 47%))
- Accent: Fiery Orange (#FF4500 - hsl(16 100% 50%))
- Gradient: Dark red (#8B0000) to orange (#FF6B35) - Samurai armor inspired
- Cards: Elevated dark surfaces with red tones
- Typography: Inter font family
- Theme: Samurai Men-Yoroi (Japanese warrior armor) inspired

## Running the Project
The application runs via `npm run dev` which starts both the Express backend and Vite frontend on port 5000.
