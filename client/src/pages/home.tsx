import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/waitlist-form";
import { FeaturesSection } from "@/components/ui/features-section";
import { GradientText } from "@/components/ui/gradient-text";
import {
  Check,
  Sparkles,
  Lock,
  BookOpen,
  FlaskConical,
  Users,
  Sword,
} from "lucide-react";

const trustBadges = [
  { icon: Lock, label: "HIPAA Compliant" },
  { icon: BookOpen, label: "PubMed-Verified" },
  { icon: FlaskConical, label: "Science-Backed" },
];

export default function Home() {
  const { data: countData } = useQuery<{ count: number }>({
    queryKey: ["/api/waitlist/count"],
  });

  const waitlistCount = countData?.count ?? 0;

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-samurai">
              <Sword className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight" data-testid="text-logo">
              Hydra<span className="text-primary">PeptideOS</span>
            </span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              data-testid="link-features"
            >
              Features
            </a>
            <a
              href="#science"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              data-testid="link-science"
            >
              Science
            </a>
          </nav>
          <Badge className="gradient-samurai border-0 text-white" data-testid="badge-beta">
            <Sparkles className="mr-1 h-3 w-3" />
            Private Beta
          </Badge>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
            <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[80px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge
                variant="secondary"
                className="mb-6 border-primary/20 bg-primary/10 text-primary"
                data-testid="badge-private-beta"
              >
                <Sparkles className="mr-1 h-3 w-3" />
                Now in private beta
              </Badge>

              <h1
                className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                data-testid="text-hero-title"
              >
                Optimize Your Peptide Protocols with{" "}
                <GradientText>AI-Powered Biomarker Intelligence</GradientText>
              </h1>

              <p
                className="mb-10 text-lg text-muted-foreground sm:text-xl"
                data-testid="text-hero-subtitle"
              >
                Transform how you track peptide interventions. Get personalized protocols backed by
                PubMed research and real-time biomarker analysis.
              </p>

              <div className="mb-6">
                <WaitlistForm testIdSuffix="hero" />
              </div>

              <div className="mb-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span data-testid="text-social-proof">
                  {waitlistCount > 0 ? (
                    <>
                      Join <span className="font-semibold text-foreground">{waitlistCount.toLocaleString()}</span> peptide
                      optimizers on the waitlist
                    </>
                  ) : (
                    "Be the first to join the waitlist"
                  )}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                {trustBadges.map((badge, index) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    data-testid={`badge-trust-${index}`}
                  >
                    <badge.icon className="h-4 w-4 text-primary" />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />

        <section id="science" className="border-t border-border py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge
                variant="secondary"
                className="mb-6 border-primary/20 bg-primary/10 text-primary"
              >
                <BookOpen className="mr-1 h-3 w-3" />
                Science-First Approach
              </Badge>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Built on <GradientText>peer-reviewed research</GradientText>
              </h2>
              <p className="mb-10 text-lg text-muted-foreground">
                Every protocol recommendation is backed by published studies from PubMed. Our AI
                cross-references thousands of papers to ensure your interventions are evidence-based.
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                <Card className="bg-card border-card-border p-6 text-center">
                  <div className="mb-2 text-3xl font-bold">
                    <GradientText>12,000+</GradientText>
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid="stat-papers">Research papers analyzed</p>
                </Card>
                <Card className="bg-card border-card-border p-6 text-center">
                  <div className="mb-2 text-3xl font-bold">
                    <GradientText>40+</GradientText>
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid="stat-biomarkers">Biomarkers tracked</p>
                </Card>
                <Card className="bg-card border-card-border p-6 text-center">
                  <div className="mb-2 text-3xl font-bold">
                    <GradientText>97%</GradientText>
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid="stat-accuracy">Protocol accuracy rate</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to transform your <GradientText>peptide journey</GradientText>?
              </h2>
              <p className="mb-10 text-lg text-muted-foreground">
                Join the waitlist and be the first to experience AI-powered peptide optimization.
              </p>

              <WaitlistForm testIdSuffix="bottom" />

              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>No spam. Unsubscribe anytime.</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-samurai">
                <Sword className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold">
                Hydra<span className="text-primary">PeptideOS</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-1">
                  <badge.icon className="h-3 w-3 text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 HydraPeptideOS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
