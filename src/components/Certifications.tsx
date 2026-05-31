import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { scrollReveal } from "@/hooks/useScrollReveal";

const CERTS = [
  { symbol: "⬡", title: "Introduction to Blockchain", issuer: "Coursera", tone: "gold" as const },
  { symbol: "◇", title: "Full-Stack Web Dev Bootcamp", issuer: "Udemy", tone: "sky" as const },
  { symbol: "◆", title: "Python for Data Science", issuer: "KVCH", tone: "violet" as const },
];

const ACHIEVEMENTS = [
  { icon: "🏆", title: "Finalist — University Hackathon 2025", highlight: true },
  { icon: "⚙", title: "Active GitHub contributor, production repos", highlight: false },
  { icon: "🌐", title: "National AI & Blockchain hackathons", highlight: false },
  { icon: "👥", title: "Peer coding mentorship sessions", highlight: false },
];

const toneBorder = {
  gold: "hover:border-gold/50 text-gold",
  sky: "hover:border-sky/50 text-sky",
  violet: "hover:border-violet/50 text-violet",
};

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div {...scrollReveal} className="max-w-2xl">
          <SectionLabel>credentials</SectionLabel>
          <h2
            className="mt-4 text-frost text-4xl md:text-5xl font-extrabold leading-[1.1]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Certifications & wins.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-12 grid md:grid-cols-3 gap-5"
        >
          {CERTS.map((c) => (
            <motion.div
              key={c.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`bg-surface border border-wire rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] ${toneBorder[c.tone]}`}
            >
              <div className="text-2xl">{c.symbol}</div>
              <h3
                className="mt-3 text-base font-bold text-frost"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {c.title}
              </h3>
              <div className="mt-1 font-mono text-xs text-dim">{c.issuer}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-10 grid sm:grid-cols-2 gap-4"
        >
          {ACHIEVEMENTS.map((a) => (
            <motion.div
              key={a.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className={`flex items-center gap-4 bg-surface border rounded-xl p-5 transition-colors ${
                a.highlight
                  ? "border-gold/50 shadow-[0_0_20px_rgba(240,180,41,0.1)]"
                  : "border-wire hover:border-elevated"
              }`}
            >
              <span className="text-2xl shrink-0">{a.icon}</span>
              <span
                className={`font-mono text-sm leading-6 ${a.highlight ? "text-frost" : "text-slate"}`}
              >
                {a.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
