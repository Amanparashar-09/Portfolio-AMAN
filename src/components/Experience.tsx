import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { BinaryStream } from "./decor/BinaryStream";


interface Entry {
  side: "left" | "right";
  tone: "sky" | "violet";
  role: string;
  company: string;
  period: string;
  bullets: string[];
  chips: string[];
}

const ENTRIES: Entry[] = [
  {
    side: "left",
    tone: "sky",
    role: "Frontend Developer Intern",
    company: "Console.success",
    period: "Jan 2026 – Feb 2026",
    bullets: [
      "Rebuilt 6 production modules in React, cutting initial load from 3.2s to 2.1s.",
      "Integrated 12 REST APIs with optimistic UI patterns and request deduplication.",
      "Reduced needless re-renders by 30% via memoization and selector restructuring.",
    ],
    chips: ["3.2s → 2.1s load", "-30% re-renders", "12 APIs", "6 modules"],
  },
  {
    side: "right",
    tone: "violet",
    role: "Industrial Trainee",
    company: "KVCH, Noida",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Trained ML classification models on 10K+ records using TensorFlow and Scikit-learn.",
      "Improved baseline accuracy from 72% → 85% through feature engineering and tuning.",
      "Authored data-cleaning pipelines and reproducible Jupyter notebooks.",
    ],
    chips: ["72% → 85% accuracy", "10K+ records", "TensorFlow", "Scikit-learn"],
  },
];

const toneRing: Record<Entry["tone"], string> = {
  sky: "bg-sky ring-sky/30",
  violet: "bg-violet ring-violet/30",
};
const toneChip: Record<Entry["tone"], string> = {
  sky: "bg-sky/10 text-sky border-sky/25",
  violet: "bg-violet/10 text-violet border-violet/25",
};
const toneText: Record<Entry["tone"], string> = {
  sky: "text-sky",
  violet: "text-violet",
};

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(56,189,248,0.03) 0%, transparent 70%)",
      }}
    >
      <BinaryStream />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <SectionLabel>experience.log</SectionLabel>
          <h2
            className="mt-4 text-frost text-4xl md:text-5xl font-extrabold leading-[1.1]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Where I've been building.
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* center line */}
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wire -translate-x-1/2"
          />
          {/* left line on mobile */}
          <span className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-wire" />

          <div className="space-y-16">
            {ENTRIES.map((e, idx) => {
              const isLeft = e.side === "left";
              return (
                <div
                  key={e.company}
                  className="relative grid md:grid-cols-2 gap-6 md:gap-10"
                >
                  {/* Node */}
                  <span
                    className={`absolute md:left-1/2 left-4 top-4 -translate-x-1/2 z-10 flex items-center justify-center`}
                  >
                    <span className={`relative w-3 h-3 rounded-full ${toneRing[e.tone]}`}>
                      <span
                        className={`absolute inset-0 rounded-full ring-2 ${toneRing[e.tone]} animate-ping opacity-40`}
                      />
                    </span>
                  </span>

                  {/* Spacer / card placement */}
                  {isLeft ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                        className="ml-10 md:ml-0 md:pr-10"
                      >
                        <EntryCard entry={e} toneChip={toneChip[e.tone]} toneText={toneText[e.tone]} />
                      </motion.div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                        className="ml-10 md:ml-0 md:pl-10"
                      >
                        <EntryCard entry={e} toneChip={toneChip[e.tone]} toneText={toneText[e.tone]} />
                      </motion.div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EntryCard({
  entry,
  toneChip,
  toneText,
}: {
  entry: Entry;
  toneChip: string;
  toneText: string;
}) {
  return (
    <div className="bg-surface border border-wire rounded-xl p-6">
      <div className={`font-mono text-xs tracking-wider ${toneText}`}>{entry.period}</div>
      <h3
        className="mt-2 text-xl font-bold text-frost"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        {entry.role}
      </h3>
      <div className="font-mono text-sm text-dim">@ {entry.company}</div>
      <ul className="mt-4 space-y-2">
        {entry.bullets.map((b) => (
          <li key={b} className="font-mono text-sm text-slate leading-7 pl-4 relative">
            <span className={`absolute left-0 top-3 w-2 h-px ${toneText}`} style={{ backgroundColor: "currentColor" }} />
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {entry.chips.map((c) => (
          <span
            key={c}
            className={`font-mono text-[10px] px-2.5 py-1 rounded-sm border ${toneChip}`}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
