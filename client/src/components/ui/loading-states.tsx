import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-10 w-10",
  };

  return (
    <Loader2
      className={cn(
        "animate-spin text-primary",
        sizeClasses[size],
        className
      )}
      data-testid="loading-spinner"
    />
  );
}

interface FullPageLoaderProps {
  message?: string;
}

export function FullPageLoader({ message = "Loading..." }: FullPageLoaderProps) {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background"
      data-testid="full-page-loader"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
        <Loader2 className="relative h-12 w-12 animate-spin text-primary" />
      </div>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
