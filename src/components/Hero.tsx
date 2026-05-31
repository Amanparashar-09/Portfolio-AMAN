import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { ParticleField } from "./ui/ParticleField";
import { HeroMesh, HeroCircuit } from "./decor/HeroMesh";
import { useTypewriter } from "@/hooks/useTypewriter";


const NAME_LINES = ["AMAN", "PARASHAR"];
const ROLES = [
  "Full-Stack Developer_",
  "Blockchain Engineer_",
  "AI Platform Builder_",
  "Real-Time Systems Dev_",
];

const CODE_LINES: Array<{ text: React.ReactNode }> = [
  { text: <><span className="text-dim">const</span> <span className="text-sky">aman</span> <span className="text-frost">= {"{"}</span></> },
  { text: <>  role: <span className="text-gold">"Full-Stack Dev"</span>,</> },
  { text: <>  stack: <span className="text-sky">["React", "Node.js"]</span>,</> },
  { text: <>  blockchain: <span className="text-gold">["Solidity", "Web3.js"]</span>,</> },
  { text: <>  ai: <span className="text-violet">["Gemini", "TensorFlow"]</span>,</> },
  { text: <>  status: <span className="text-emerald-400">"open to work"</span></> },
  { text: <><span className="text-frost">{"}"}</span></> },
];

export function Hero() {
  const { displayText } = useTypewriter(ROLES, { speed: 65, pauseMs: 2000 });
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 220);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 right-[-4rem] w-96 h-96 rounded-full bg-gold/10 blur-[120px] drift-a" />
        <div className="absolute bottom-[-6rem] left-[-4rem] w-96 h-96 rounded-full bg-sky/10 blur-[120px] drift-b" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-violet/10 blur-[160px] drift-c" />
      </div>

      {/* Particle field behind name */}
      <ParticleField className="-z-10 opacity-80" />

      {/* Decorative section-specific elements */}
      <HeroMesh />
      <HeroCircuit />



      <div className="hero-grid">
        {/* LEFT */}
        <div className="hero-left">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center font-mono text-xs tracking-[0.2em] text-gold border border-gold/30 px-4 py-1.5 rounded-sm"
          >
            ⬡ Blockchain · React · Node.js · AI
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.04, delayChildren: 0.2 }}
            className={`mt-6 font-extrabold leading-[0.95] ${glitch ? "glitch-active" : ""}`}
            style={{
              fontFamily: "Syne, sans-serif",
            }}
            aria-label={NAME_LINES.join(" ")}
          >
            {NAME_LINES.map((line, lineIdx) => (
              <span
                key={line}
                className="hero-name-line"
                style={{ letterSpacing: 0 }}
              >

                {line.split("").map((char, i) => (
                  <motion.span
                    key={`${line}-${char}-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className={`inline-block ${lineIdx === 1 ? "text-gold" : "text-frost"}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>



          {/* Descriptor */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="mt-6 font-mono text-[13px] text-dim"
            style={{ letterSpacing: "0.15em" }}
          >
            [ Building the decentralized, real-time web ]
          </motion.p>

          {/* Terminal-style role typewriter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.4 }}
            className="mt-4 font-mono text-lg md:text-xl h-7"
          >
            <span className="text-gold">~/aman&nbsp;»&nbsp;</span>
            <span className="text-sky">{displayText}</span>
            <span className="text-gold animate-blink">▍</span>
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15, delayChildren: 2.1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group inline-flex items-center gap-2 bg-gold text-void font-semibold px-6 py-3 rounded-sm hover:scale-105 hover:shadow-[0_0_24px_rgba(240,180,41,0.4)] transition-all duration-300"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 border border-sky text-sky font-medium px-6 py-3 rounded-sm hover:bg-sky/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.4 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="https://github.com/AmanParashar09"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-dim hover:text-gold hover:scale-125 transition-all duration-200"
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-dim hover:text-gold hover:scale-125 transition-all duration-200"
            >
              <LinkedinIcon width={20} height={20} />
            </a>
            <a
              href="mailto:amanparashar0911@gmail.com"
              aria-label="Email"
              className="text-dim hover:text-gold hover:scale-125 transition-all duration-200"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — code block */}
        <div className="hero-right hidden lg:block">


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="animate-float"
          >
            <div className="bg-surface/80 backdrop-blur-sm border border-wire rounded-xl p-6 font-mono text-sm shadow-2xl shadow-black/30">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-wire">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-3 text-dim text-xs">aman.config.ts</span>
              </div>
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.08, delayChildren: 0.6 }}
                className="space-y-1.5"
              >
                {CODE_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="whitespace-pre"
                  >
                    {line.text}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
