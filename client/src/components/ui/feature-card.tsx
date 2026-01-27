import { Card } from "@/components/ui/card";
import type { FeatureItem } from "@/types/features";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  feature: FeatureItem;
  index?: number;
  className?: string;
}

export function FeatureCard({ feature, index = 0, className }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <Card
      className={cn(
        "group relative overflow-visible bg-card border-card-border p-6 transition-all duration-300",
        "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(220,20,60,0.15)]",
        className
      )}
      data-testid={`card-feature-${index}`}
    >
      <div className="flex items-start gap-4">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(220,20,60,0.3)]">
          <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-accent" />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {feature.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
