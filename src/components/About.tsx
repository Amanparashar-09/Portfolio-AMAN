import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { AnimatedText } from "./ui/AnimatedText";
import { CountUp } from "./ui/CountUp";
import { scrollReveal } from "@/hooks/useScrollReveal";
import portrait from "@/assets/aman-portrait.jpg";

const STATS = [
  { value: 50, suffix: "+", label: "Concurrent users" },
  { value: 5000, suffix: "+", label: "Records processed" },
  { value: 12, suffix: "", label: "REST APIs shipped" },
  { value: 30, suffix: "%", label: "Faster load times" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(17,29,54,0.4) 20%, rgba(17,29,54,0.4) 80%, transparent 100%)",
      }}
    >
      {/* Left vertical gradient accent */}
      <div
        aria-hidden
        className="absolute left-0 pointer-events-none"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          width: 3,
          height: "60%",
          opacity: 0.3,
          background:
            "linear-gradient(180deg, transparent 0%, #f0b429 30%, #38bdf8 70%, transparent 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[40%_60%] gap-12 lg:gap-20">

        <div className="lg:sticky lg:top-24 self-start">
          <SectionLabel>about.me</SectionLabel>
          <h2
            className="mt-4 text-frost text-4xl md:text-5xl font-extrabold leading-[1.1]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <AnimatedText text="I engineer systems, not just websites." />
          </h2>

          {/* Portrait frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8 animate-float"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-sky/20 blur-2xl" />

            {/* Dashed offset frame */}
            <div
              aria-hidden
              className="pointer-events-none absolute rounded-[14px]"
              style={{
                inset: -8,
                border: "1px dashed rgba(56,189,248,0.2)",
              }}
            />

            <div
              className="relative rounded-2xl overflow-hidden border border-gold/30 bg-surface"
              style={{
                boxShadow:
                  "0 0 0 4px rgba(240,180,41,0.05), 0 0 40px rgba(240,180,41,0.08), 0 25px 50px -12px rgba(0,0,0,0.4)",
              }}
            >

              <img
                src={portrait}
                alt="Aman Parashar"
                loading="lazy"
                className="w-full h-auto object-cover grayscale-[15%] contrast-105"
              />
              {/* Bottom void gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-void/0 to-void/0" />
              {/* Corner ticks */}
              <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/70" />
              <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/70" />
              <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/70" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/70" />

              {/* Location chip */}
              <div className="absolute bottom-4 left-4 inline-flex items-center font-mono text-[10px] tracking-[0.25em] text-gold border border-gold/40 bg-void/60 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                ⬡ AGRA · IN
              </div>
            </div>
          </motion.div>

          <p className="mt-6 font-mono text-sm text-dim">📍 Agra, India</p>
        </div>

        <motion.div {...scrollReveal} className="space-y-10">
          <p className="font-mono text-base md:text-lg text-slate leading-8">
            Full-Stack Developer from Agra, India. I build real-time collaborative
            platforms, AI-powered assessment tools, and explore the architectural
            edges of blockchain systems. Currently pursuing B.E. in Computer
            Engineering with a Blockchain specialization at{" "}
            <span className="text-frost">GLA University, Mathura</span>.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="bg-surface border border-wire rounded-xl p-6 hover:border-gold/40 transition-colors"
              >
                <div
                  className="text-3xl md:text-4xl font-extrabold text-gold"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 font-mono text-xs text-dim uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
