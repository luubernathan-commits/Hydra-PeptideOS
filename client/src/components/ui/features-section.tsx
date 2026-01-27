import { SectionHeader } from "./section-header";
import { FeatureCard } from "./feature-card";
import { FEATURES } from "@/types/features";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Everything you need to optimize peptide protocols"
          highlightedWord="optimize peptide protocols"
          description="Powered by advanced AI and backed by peer-reviewed research"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
            >
              <FeatureCard feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
