interface Props {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = "" }: Props) {
  return (
    <span
      className={`font-mono text-xs tracking-[0.25em] uppercase text-gold ${className}`}
    >
      // {children}
    </span>
  );
}
