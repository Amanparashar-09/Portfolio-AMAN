import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "./ui/SectionLabel";
import { scrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

type Tone = "gold" | "sky" | "slate" | "violet" | "dim";

interface Tech {
  name: string;
  // devicon path like "react/react-original" — leave undefined to use simple-icons CDN
  devicon?: string;
  // direct URL override (used for simple-icons colored)
  url?: string;
  // when true, the icon is monochrome/white and should be tinted to domain color
  monochrome?: boolean;
}

interface DomainGroup {
  label: string;
  symbol: string;
  tone: Tone;
  techs: Tech[];
}

const GROUPS: DomainGroup[] = [
  {
    label: "BLOCKCHAIN",
    symbol: "⬡",
    tone: "gold",
    techs: [
      { name: "JavaScript", devicon: "javascript/javascript-original" },
      { name: "Solidity", url: "https://cdn.simpleicons.org/solidity/f0b429" },
      { name: "Web3.js", url: "https://cdn.simpleicons.org/web3dotjs/f0b429" },
      { name: "Node.js", devicon: "nodejs/nodejs-original" },
      { name: "Ethereum", url: "https://cdn.simpleicons.org/ethereum/f0b429" },
    ],
  },
  {
    label: "FRONTEND",
    symbol: "◈",
    tone: "sky",
    techs: [
      { name: "React", devicon: "react/react-original" },
      { name: "Next.js", devicon: "nextjs/nextjs-original", monochrome: true },
      { name: "HTML5", devicon: "html5/html5-original" },
      { name: "CSS3", devicon: "css3/css3-original" },
      { name: "Tailwind", devicon: "tailwindcss/tailwindcss-original" },
    ],
  },
  {
    label: "BACKEND",
    symbol: "▣",
    tone: "slate",
    techs: [
      { name: "Node.js", devicon: "nodejs/nodejs-original" },
      { name: "Express", devicon: "express/express-original", monochrome: true },
      { name: "MongoDB", devicon: "mongodb/mongodb-original" },
      { name: "Redis", devicon: "redis/redis-original" },
      { name: "Firebase", devicon: "firebase/firebase-plain" },
      { name: "Postman", url: "https://cdn.simpleicons.org/postman/ff6c37" },
    ],
  },
  {
    label: "AI / ML",
    symbol: "◆",
    tone: "violet",
    techs: [
      { name: "Python", devicon: "python/python-original" },
      { name: "TensorFlow", devicon: "tensorflow/tensorflow-original" },
      { name: "Scikit-learn", url: "https://cdn.simpleicons.org/scikitlearn/c4b5fd" },
      { name: "Jupyter", devicon: "jupyter/jupyter-original" },
      { name: "Gemini", url: "https://cdn.simpleicons.org/googlegemini/c4b5fd" },
    ],
  },
  {
    label: "TOOLS",
    symbol: "⚙",
    tone: "dim",
    techs: [
      { name: "Git", devicon: "git/git-original" },
      { name: "GitHub", devicon: "github/github-original", monochrome: true },
      { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/ffffff", monochrome: true },
      { name: "Postman", url: "https://cdn.simpleicons.org/postman/ff6c37" },
      { name: "VS Code", devicon: "vscode/vscode-original" },
    ],
  },
];

const TONE_HEADER: Record<Tone, string> = {
  gold: "text-gold",
  sky: "text-sky",
  slate: "text-slate",
  violet: "text-violet",
  dim: "text-dim",
};

const TONE_HOVER_BORDER: Record<Tone, string> = {
  gold: "hover:border-gold/60",
  sky: "hover:border-sky/60",
  slate: "hover:border-slate/60",
  violet: "hover:border-violet/60",
  dim: "hover:border-frost/40",
};

function iconUrl(tech: Tech): string {
  if (tech.url) return tech.url;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.devicon}.svg`;
}

function abbr(name: string) {
  const parts = name.replace(/[^a-zA-Z0-9 ]/g, " ").trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function TechCard({
  tech,
  tone,
  index,
  visible,
}: {
  tech: Tech;
  tone: Tone;
  index: number;
  visible: boolean;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      transition={{
        duration: 0.35,
        delay: index * 0.025,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={`group flex flex-col items-center justify-center gap-2 bg-surface border border-wire rounded-[14px] w-[68px] h-[68px] md:w-[78px] md:h-[78px] lg:w-[88px] lg:h-[88px] px-2 pt-3 pb-2 transition-all duration-200 hover:-translate-y-1 hover:bg-elevated ${TONE_HOVER_BORDER[tone]}`}
      title={tech.name}
    >
      <div className="w-8 h-8 flex items-center justify-center">
        {errored ? (
          <span
            className={`font-mono text-sm font-bold ${TONE_HEADER[tone]}`}
          >
            {abbr(tech.name)}
          </span>
        ) : (
          <img
            src={iconUrl(tech)}
            alt=""
            aria-hidden
            loading="lazy"
            onError={() => setErrored(true)}
            className={`w-8 h-8 object-contain transition-all duration-200 ${
              tech.monochrome
                ? "[filter:brightness(0)_invert(0.65)] group-hover:[filter:brightness(0)_invert(1)]"
                : "opacity-80 group-hover:opacity-100"
            }`}
          />
        )}
      </div>
      <span className="font-mono text-[9px] md:text-[10px] text-dim text-center max-w-[80px] truncate group-hover:text-frost transition-colors">
        {tech.name}
      </span>

    </motion.div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // global index across groups for staggered entrance
  let globalIndex = 0;

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(240,180,41,0.03) 0%, transparent 70%)",
      }}
    >
      {/* Floating hex grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none hex-pattern"
        style={{ zIndex: 0, animation: "hexDrift 30s linear infinite", willChange: "transform" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        <motion.div {...scrollReveal} className="max-w-2xl">
          <SectionLabel>tech.stack</SectionLabel>
          <h2
            className="mt-4 text-frost text-4xl md:text-5xl font-extrabold leading-[1.1]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Four domains. One engineer.
          </h2>
        </motion.div>

        <div
          ref={sectionRef}
          className="mt-14 max-w-[720px] mx-auto"
        >
          {GROUPS.map((group) => (
            <div key={group.label} className="mb-8">
              {/* Domain header with line */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex items-center gap-2 font-mono text-[11px] font-semibold ${TONE_HEADER[group.tone]}`}
                  style={{ letterSpacing: "0.2em" }}
                >
                  <span>{group.symbol}</span>
                  <span>{group.label}</span>
                </div>
                <div className="flex-1 h-px bg-wire" />
              </div>

              {/* Cards */}
              <div className="flex flex-wrap justify-center gap-3">
                {group.techs.map((tech) => {
                  const i = globalIndex++;
                  return (
                    <TechCard
                      key={`${group.label}-${tech.name}`}
                      tech={tech}
                      tone={group.tone}
                      index={i}
                      visible={visible}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
