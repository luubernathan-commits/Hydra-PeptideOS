import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({
  children,
  className = "",
}: GradientTextProps) => (
  <span
    className={`bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);
