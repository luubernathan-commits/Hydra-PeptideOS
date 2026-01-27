import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";

interface WaitlistFormProps {
  testIdSuffix?: string;
}

export function WaitlistForm({ testIdSuffix = "" }: WaitlistFormProps) {
  const { toast } = useToast();
  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: InsertWaitlist) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Hydra PeptideOS launches.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlist) => {
    waitlistMutation.mutate(data);
  };

  const suffix = testIdSuffix ? `-${testIdSuffix}` : "";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        data-testid={`form-waitlist${suffix}`}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="bg-card border-card-border text-foreground placeholder:text-muted-foreground"
                  data-testid={`input-email${suffix}`}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-left" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="gradient-samurai border-0 font-semibold text-white"
          disabled={waitlistMutation.isPending}
          data-testid={`button-join-waitlist${suffix}`}
        >
          {waitlistMutation.isPending ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Joining...
            </span>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </form>
    </Form>
  );
}
