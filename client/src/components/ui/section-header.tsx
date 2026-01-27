import { GradientText } from "./gradient-text";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
}

export const SectionHeader = ({
  badge,
  title,
  highlightedWord,
  description,
}: SectionHeaderProps) => (
  <div className="text-center mb-16">
    {badge && (
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
        <span className="text-red-400 text-sm font-medium">{badge}</span>
      </div>
    )}
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      {highlightedWord ? (
        <>
          {title.split(highlightedWord)[0]}
          <GradientText>{highlightedWord}</GradientText>
          {title.split(highlightedWord)[1]}
        </>
      ) : (
        title
      )}
    </h2>
    {description && (
      <p className="text-xl text-slate-400 max-w-3xl mx-auto">{description}</p>
    )}
  </div>
);
