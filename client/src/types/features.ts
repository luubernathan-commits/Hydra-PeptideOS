import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Brain,
  Calendar,
  TrendingUp,
  Shield,
  FileText,
} from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: FeatureItem[] = [
  {
    icon: Activity,
    title: "Inside-Out Biomarker Tracking",
    description: "Combines Bloody Good labs + eVOLT360 body composition with 40+ metrics to validate peptide efficacy within 14 days.",
  },
  {
    icon: Brain,
    title: "AI-Powered Peptide Protocols",
    description: "MedGemma-27B analyzes IGF-1, hs-CRP, visceral fat to recommend evidence-based stacks like Ipamorelin, BPC-157, Tesamorelin.",
  },
  {
    icon: Calendar,
    title: "12-Week Cyclic Protocol Management",
    description: "Structured Loading, Optimization, and Consolidation phases with checkpoint reminders for optimal peptide cycling.",
  },
  {
    icon: TrendingUp,
    title: "Longitudinal Trend Analysis",
    description: "Biomarker Velocity calculations track rate of change. See IGF-1 vs Visceral Fat trends on dual Y-axis charts.",
  },
  {
    icon: Shield,
    title: "Safety Guardrails",
    description: "HOMA-IR for insulin resistance, ECW/TBW ratio for edema detection with practitioner review workflow.",
  },
  {
    icon: FileText,
    title: "Clinical PDF Reports",
    description: "Longevity Scorecard, Protocol Maps, and Scientific Citation Index with verified PMID references.",
  },
];
