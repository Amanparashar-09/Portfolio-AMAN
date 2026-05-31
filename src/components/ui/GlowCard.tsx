import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  glowColor?: "gold" | "sky" | "violet" | "slate";
}

const glowMap: Record<NonNullable<Props["glowColor"]>, string> = {
  gold: "hover:border-gold/40 hover:shadow-[0_20px_60px_-20px_rgba(240,180,41,0.25)]",
  sky: "hover:border-sky/40 hover:shadow-[0_20px_60px_-20px_rgba(56,189,248,0.25)]",
  violet: "hover:border-violet/40 hover:shadow-[0_20px_60px_-20px_rgba(196,181,253,0.25)]",
  slate: "hover:border-slate/40 hover:shadow-[0_20px_60px_-20px_rgba(148,163,184,0.2)]",
};

export function GlowCard({ children, className = "", glowColor = "gold" }: Props) {
  return (
    <div
      className={`bg-surface border border-wire rounded-xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 ${glowMap[glowColor]} ${className}`}
    >
      {children}
    </div>
  );
}
