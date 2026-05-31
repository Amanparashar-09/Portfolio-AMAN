import { useEffect, useState } from "react";

interface Bit {
  id: number;
  char: "0" | "1";
  duration: number;
  delay: number;
}

let nextId = 0;

export function BinaryStream() {
  const [bits, setBits] = useState<Bit[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const spawn = () => {
      setBits((prev) => {
        const next: Bit = {
          id: nextId++,
          char: Math.random() > 0.5 ? "1" : "0",
          duration: 6 + Math.random() * 4,
          delay: 0,
        };
        return [...prev.slice(-14), next];
      });
    };

    spawn();
    const id = setInterval(spawn, 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden
      className="hidden md:block absolute top-0 bottom-0 overflow-hidden pointer-events-none"
      style={{ right: 40, width: 20, zIndex: 0 }}
    >
      {bits.map((b) => (
        <span
          key={b.id}
          className="absolute left-0 right-0 text-center"
          style={{
            top: "-20px",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            color: "rgba(56,189,248,0.08)",
            animation: `binaryFall ${b.duration}s linear forwards`,
            willChange: "transform",
          }}
          onAnimationEnd={() =>
            setBits((prev) => prev.filter((x) => x.id !== b.id))
          }
        >
          {b.char}
        </span>
      ))}
    </div>
  );
}
