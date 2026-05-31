import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";

interface Line {
  prompt: string;
  command: string;
  response: React.ReactNode;
}

const LINES: Line[] = [
  {
    prompt: "$",
    command: "whoami",
    response: <>Aman Parashar — Full-Stack & Blockchain Developer</>,
  },
  {
    prompt: "$",
    command: "contact --email",
    response: (
      <a
        href="mailto:amanparashar0911@gmail.com"
        className="text-sky hover:text-sky/80 underline-offset-4 hover:underline"
      >
        amanparashar0911@gmail.com
      </a>
    ),
  },
  {
    prompt: "$",
    command: "contact --github",
    response: (
      <a
        href="https://github.com/AmanParashar09"
        target="_blank"
        rel="noreferrer"
        className="text-sky hover:text-sky/80 underline-offset-4 hover:underline"
      >
        github.com/AmanParashar09
      </a>
    ),
  },
  {
    prompt: "$",
    command: "contact --linkedin",
    response: (
      <a
        href="#"
        className="text-sky hover:text-sky/80 underline-offset-4 hover:underline"
      >
        linkedin.com/in/aman-parashar
      </a>
    ),
  },
  {
    prompt: "$",
    command: "contact --phone",
    response: <>+91 83939 09033</>,
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && revealed === 0) {
            // reveal lines sequentially
            LINES.forEach((_, i) => {
              setTimeout(() => setRevealed((v) => Math.max(v, i + 1)), 350 + i * 550);
            });
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-base/40">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionLabel className="inline-block">contact.init()</SectionLabel>
          <h2
            className="mt-4 text-frost text-4xl md:text-6xl font-extrabold leading-[1.05]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Let's build something real.
          </h2>
          <p className="mt-4 font-mono text-sm md:text-base text-dim max-w-xl mx-auto">
            Open to internships, full-time roles, and ambitious side-projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 bg-surface border border-wire rounded-xl overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="bg-elevated px-4 py-2.5 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-3 font-mono text-xs text-dim">~/aman — zsh</span>
          </div>
          <div className="px-5 md:px-8 py-6 md:py-8 space-y-4 font-mono text-sm md:text-base">
            {LINES.slice(0, revealed).map((line, i) => (
              <div key={i} className="space-y-1">
                <div className="text-frost">
                  <span className="text-gold">{line.prompt}</span>{" "}
                  <span className="text-frost">{line.command}</span>
                </div>
                <div className="pl-4 text-slate">→ {line.response}</div>
              </div>
            ))}
            {revealed >= LINES.length && (
              <div>
                <span className="text-gold">$ </span>
                <span className="text-gold animate-blink">█</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
