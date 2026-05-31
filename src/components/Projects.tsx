import { motion } from "framer-motion";
import { Star, ArrowUpRight, ExternalLink, GitFork } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { scrollReveal } from "@/hooks/useScrollReveal";

type Domain = "Web3" | "AI" | "Frontend" | "Full-Stack";
type Status = "LIVE" | "SHIPPED";

interface Project {
  name: string;
  github: string;
  homepage?: string;
  status: Status;
  domain: Domain;
  tagline: string;
  description: string;
  stack: string[];
  impact?: string[];
  stars?: number;
  forks?: number;
  Cover: React.FC;
}

const DOMAIN_STYLE: Record<Domain, { symbol: string; classes: string; accent: string; rgb: string }> = {
  Web3:        { symbol: "⬡", classes: "bg-gold/10 text-gold border-gold/30",          accent: "#f0b429", rgb: "240,180,41" },
  AI:          { symbol: "◆", classes: "bg-violet/10 text-violet border-violet/30",    accent: "#c4b5fd", rgb: "196,181,253" },
  Frontend:    { symbol: "◈", classes: "bg-sky/10 text-sky border-sky/30",             accent: "#38bdf8", rgb: "56,189,248" },
  "Full-Stack":{ symbol: "◈", classes: "bg-sky/10 text-sky border-sky/30",             accent: "#38bdf8", rgb: "56,189,248" },
};

/* ============================== COVERS ============================== */

const CoverPredictX: React.FC = () => (
  <svg viewBox="0 0 320 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="200" fill="#0d1424" />
    <defs>
      <pattern id="hex-grid" width="30" height="26" patternUnits="userSpaceOnUse">
        <path d="M15 0 L30 8 L30 22 L15 30 L0 22 L0 8 Z" fill="none" stroke="rgba(240,180,41,0.15)" strokeWidth="0.5" />
      </pattern>
      <radialGradient id="hex-glow">
        <stop offset="0%" stopColor="#f0b429" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#f0b429" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="320" height="200" fill="url(#hex-grid)" />
    <circle cx="160" cy="100" r="60" fill="url(#hex-glow)" style={{ animation: "pulseGlow 3s ease-in-out infinite", transformOrigin: "160px 100px" }} />
    <path d="M160 60 L195 80 L195 120 L160 140 L125 120 L125 80 Z" fill="none" stroke="#f0b429" strokeWidth="1.5" />
    <text x="40" y="40" fill="#22c55e" fontFamily="IBM Plex Mono" fontSize="10">+12%</text>
    <text x="250" y="55" fill="#ef4444" fontFamily="IBM Plex Mono" fontSize="10">-3%</text>
    <text x="60" y="170" fill="#22c55e" fontFamily="IBM Plex Mono" fontSize="10">+7%</text>
    <text x="240" y="170" fill="#22c55e" fontFamily="IBM Plex Mono" fontSize="10">+18%</text>
    {/* nodes top-right */}
    <g stroke="rgba(56,189,248,0.4)" strokeWidth="0.5" fill="#38bdf8">
      <line x1="280" y1="20" x2="300" y2="30" />
      <line x1="300" y1="30" x2="290" y2="50" />
      <circle cx="280" cy="20" r="2" />
      <circle cx="300" cy="30" r="2" />
      <circle cx="290" cy="50" r="2" />
    </g>
  </svg>
);

const CoverCredora: React.FC = () => (
  <svg viewBox="0 0 320 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="200" fill="#0d1424" />
    <g opacity="0.1" stroke="#f0b429" strokeWidth="1" fill="none">
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 60}, ${i % 2 ? 40 : 0})`}>
          <ellipse cx="20" cy="20" rx="10" ry="6" />
          <ellipse cx="35" cy="20" rx="10" ry="6" />
        </g>
      ))}
    </g>
    {/* left wallet */}
    <g transform="translate(50,80)">
      <rect width="50" height="36" rx="4" fill="none" stroke="#f0b429" strokeWidth="1.5" />
      <rect x="32" y="14" width="14" height="10" rx="2" fill="#f0b429" opacity="0.3" />
    </g>
    {/* right wallet */}
    <g transform="translate(220,80)">
      <rect width="50" height="36" rx="4" fill="none" stroke="#f0b429" strokeWidth="1.5" />
      <rect x="4" y="14" width="14" height="10" rx="2" fill="#f0b429" opacity="0.3" />
    </g>
    {/* flowing arc */}
    <path d="M105 95 Q160 40 215 95" fill="none" stroke="#f0b429" strokeWidth="1.5" strokeDasharray="6 4" style={{ animation: "dashFlow 1.5s linear infinite" }} />
    {/* floating coins */}
    <text x="140" y="60" fill="#f0b429" fontFamily="IBM Plex Mono" fontSize="14" style={{ animation: "coverBobA 3s ease-in-out infinite" }}>◎</text>
    <text x="170" y="50" fill="#f0b429" fontFamily="IBM Plex Mono" fontSize="12" style={{ animation: "coverBobB 4s ease-in-out infinite" }}>◎</text>
    <text x="155" y="135" fill="#f0b429" fontFamily="IBM Plex Mono" fontSize="10" style={{ animation: "coverBobA 3.5s ease-in-out infinite" }}>◎</text>
    <text x="160" y="185" textAnchor="middle" fill="#64748b" fontFamily="IBM Plex Mono" fontSize="9">Smart Contract Powered</text>
  </svg>
);

const CoverCodeTrack: React.FC = () => {
  const pts = "20,140 70,110 120,120 170,70 220,80 280,40";
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="200" fill="#111d36" />
      {/* grid */}
      <g stroke="rgba(56,189,248,0.05)">
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="20" y1={y} x2="300" y2={y} />
        ))}
      </g>
      {/* y labels */}
      {[
        ["0", 160],
        ["25", 130],
        ["50", 100],
        ["75", 70],
        ["100", 40],
      ].map(([t, y]) => (
        <text key={t} x="4" y={y as number} fill="#64748b" fontFamily="IBM Plex Mono" fontSize="8">
          {t}
        </text>
      ))}
      {/* area */}
      <polygon points={`20,170 ${pts} 280,170`} fill="rgba(56,189,248,0.08)" />
      {/* line */}
      <polyline points={pts} fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* pulse dot */}
      <circle cx="280" cy="40" r="4" fill="#38bdf8" style={{ animation: "pulseGlow 1.6s ease-in-out infinite", transformOrigin: "280px 40px" }} />
      {/* streak badge */}
      <g transform="translate(195,12)">
        <rect width="110" height="20" rx="10" fill="rgba(240,180,41,0.12)" stroke="rgba(240,180,41,0.3)" />
        <text x="55" y="14" textAnchor="middle" fill="#f0b429" fontFamily="IBM Plex Mono" fontSize="9">🔥 47 day streak</text>
      </g>
    </svg>
  );
};

const CoverAavek: React.FC = () => (
  <svg viewBox="0 0 320 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="200" fill="#0f0d1a" />
    {/* neural net */}
    <g stroke="rgba(196,181,253,0.15)" strokeWidth="0.6" fill="rgba(196,181,253,0.4)">
      {[
        [40, 40], [40, 100], [40, 160],
        [120, 60], [120, 140],
        [200, 80], [200, 120],
        [280, 100],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" />
      ))}
      <line x1="40" y1="40" x2="120" y2="60" />
      <line x1="40" y1="40" x2="120" y2="140" />
      <line x1="40" y1="100" x2="120" y2="60" />
      <line x1="40" y1="100" x2="120" y2="140" />
      <line x1="40" y1="160" x2="120" y2="140" />
      <line x1="120" y1="60" x2="200" y2="80" />
      <line x1="120" y1="60" x2="200" y2="120" />
      <line x1="120" y1="140" x2="200" y2="80" />
      <line x1="120" y1="140" x2="200" y2="120" />
      <line x1="200" y1="80" x2="280" y2="100" />
      <line x1="200" y1="120" x2="280" y2="100" />
    </g>
    {/* circuit leaf */}
    <g transform="translate(160,100)" stroke="#c4b5fd" strokeWidth="1.5" fill="none" style={{ filter: "drop-shadow(0 0 6px rgba(196,181,253,0.6))" }}>
      <path d="M0 -30 L20 -10 L30 10 L20 30 L0 25 L-20 30 L-30 10 L-20 -10 Z" />
      <line x1="0" y1="-30" x2="0" y2="25" />
      <line x1="-20" y1="-10" x2="20" y2="10" />
      <line x1="-20" y1="30" x2="20" y2="-10" />
    </g>
    {/* weather */}
    <text x="40" y="25" fill="#64748b" fontSize="12">☁</text>
    <text x="260" y="30" fill="#64748b" fontSize="12">☀</text>
    <text x="280" y="175" fill="#64748b" fontSize="12">🌧</text>
  </svg>
);

const CoverWhiteboard: React.FC = () => (
  <svg viewBox="0 0 320 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="200" fill="#0a1220" />
    {/* file tree (left 40%) */}
    <g fontFamily="IBM Plex Mono" fontSize="8" fill="#64748b">
      <rect x="14" y="40" width="110" height="14" rx="2" fill="rgba(56,189,248,0.12)" />
      <text x="20" y="30">📁 src</text>
      <text x="20" y="50" fill="#38bdf8">  📄 editor.js</text>
      <text x="20" y="64">  📄 socket.js</text>
      <text x="20" y="78">  📄 session.js</text>
      <text x="20" y="98">📁 redis</text>
      <text x="20" y="112">  📄 sync.js</text>
    </g>
    {/* divider */}
    <line x1="128" y1="14" x2="128" y2="160" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
    {/* code (right 60%) */}
    <g fontFamily="IBM Plex Mono" fontSize="9">
      <text x="138" y="30"><tspan fill="#c4b5fd">const</tspan><tspan fill="#f1f5f9"> socket</tspan><tspan fill="#64748b"> = </tspan><tspan fill="#38bdf8">io.connect();</tspan></text>
      <text x="138" y="48"><tspan fill="#38bdf8">socket</tspan><tspan fill="#64748b">.on(</tspan><tspan fill="#f0b429">'sync'</tspan><tspan fill="#64748b">, () =&gt; {"{"}</tspan></text>
      <text x="138" y="66"><tspan fill="#c4b5fd">  redis</tspan><tspan fill="#64748b">.set(</tspan><tspan fill="#f0b429">session</tspan><tspan fill="#64748b">);</tspan></text>
      <text x="138" y="84" fill="#64748b">{"});"}</text>
      <rect x="166" y="74" width="2" height="14" fill="#f0b429" style={{ animation: "blink 1s step-end infinite" }} />
    </g>
    {/* user avatars top-right */}
    <g transform="translate(240,14)">
      {[
        ["#f0b429", "U1", 0],
        ["#38bdf8", "U2", 20],
        ["#c4b5fd", "U3", 40],
      ].map(([c, l, x]) => (
        <g key={l as string} transform={`translate(${x as number}, 0)`}>
          <circle cx="10" cy="10" r="10" fill={c as string} opacity="0.85" />
          <text x="10" y="13" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="8" fill="#080c14">{l}</text>
          <circle cx="17" cy="17" r="2.5" fill="#22c55e" />
        </g>
      ))}
    </g>
    {/* bottom strip */}
    <g>
      <rect x="0" y="170" width="320" height="30" fill="rgba(56,189,248,0.05)" />
      <line x1="0" y1="170" x2="320" y2="170" stroke="rgba(56,189,248,0.1)" />
      <text x="12" y="188" fontFamily="IBM Plex Mono" fontSize="9" fill="#64748b">
        ⚡ 3 users connected  •  latency: 248ms  •  session: active
      </text>
    </g>
  </svg>
);

const CoverPrepAI: React.FC = () => (
  <svg viewBox="0 0 320 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="200" fill="#0f0d1a" />
    {/* dot grid */}
    <g fill="rgba(196,181,253,0.04)">
      {Array.from({ length: 80 }).map((_, i) => (
        <circle key={i} cx={(i % 16) * 20 + 10} cy={Math.floor(i / 16) * 20 + 10} r="1" />
      ))}
    </g>
    {/* brain */}
    <g transform="translate(160,90)" stroke="#c4b5fd" strokeWidth="1.5" fill="none">
      <path d="M-25 -10 Q-30 -25 -15 -28 Q-5 -32 5 -28 Q15 -32 25 -25 Q35 -15 28 0 Q35 15 20 22 Q5 28 -10 22 Q-30 18 -28 5 Q-35 -5 -25 -10 Z" />
      <path d="M-15 -10 Q-5 -5 0 -15 M0 0 Q10 -5 15 5 M-10 10 Q0 15 10 8" />
    </g>
    {/* question bubbles */}
    {[
      [50, 40, 14, 3.2],
      [260, 50, 11, 3.8],
      [40, 130, 12, 4.2],
      [270, 130, 14, 3.5],
      [90, 30, 10, 4.5],
      [240, 150, 12, 4],
    ].map(([x, y, sz, dur], i) => (
      <g key={i} style={{ animation: `coverBob${i % 2 ? "B" : "A"} ${dur}s ease-in-out infinite`, transformOrigin: `${x}px ${y}px` }} opacity="0.6">
        <rect x={(x as number) - (sz as number)} y={(y as number) - (sz as number)} width={(sz as number) * 2} height={(sz as number) * 2} rx={sz as number} fill="rgba(196,181,253,0.18)" stroke="#c4b5fd" strokeWidth="0.6" />
        <text x={x as number} y={(y as number) + 4} textAnchor="middle" fill="#c4b5fd" fontFamily="IBM Plex Mono" fontSize={sz as number}>?</text>
      </g>
    ))}
    {/* score bar */}
    <g transform="translate(60,172)">
      <rect width="200" height="12" rx="2" fill="rgba(240,180,41,0.1)" stroke="rgba(240,180,41,0.3)" />
      <rect width="170" height="12" rx="2" fill="#f0b429" opacity="0.6" />
      <text x="100" y="-2" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#f0b429">Score: 847 / 1000</text>
    </g>
  </svg>
);

/* ============================== DATA ============================== */

const PROJECTS: Project[] = [
  {
    name: "PredictX",
    github: "https://github.com/Amanparashar-09/PredictX",
    status: "SHIPPED",
    domain: "Web3",
    tagline: "Bet on the future. Settle on-chain.",
    description:
      "Decentralized prediction market where outcomes are trustless and transparent. Built on blockchain with TypeScript.",
    stack: ["TypeScript", "Solidity", "Web3.js", "Smart Contracts"],
    Cover: CoverPredictX,
  },
  {
    name: "Credora",
    github: "https://github.com/Amanparashar-09/Credora",
    status: "SHIPPED",
    domain: "Web3",
    tagline: "Micro-loans. Zero banks. Pure blockchain.",
    description:
      "Decentralized student micro-loan platform removing traditional financial gatekeeping with smart contract automation.",
    stack: ["TypeScript", "Solidity", "Web3.js", "DeFi"],
    Cover: CoverCredora,
  },
  {
    name: "CodeTrack",
    github: "https://github.com/Amanparashar-09/CodeTrack",
    status: "LIVE",
    domain: "Frontend",
    tagline: "Track every commit. Own your growth.",
    description:
      "Developer progress tracking tool with analytics dashboard for coding activity and milestone visualization.",
    stack: ["JavaScript", "React", "Analytics", "MIT License"],
    forks: 1,
    Cover: CoverCodeTrack,
  },
  {
    name: "Aavek — Real-Time Agriculture Bot",
    github: "https://github.com/Amanparashar-09/Aavek--Real-Time-Agriculture-Bot",
    status: "SHIPPED",
    domain: "AI",
    tagline: "Real-time intelligence for the fields.",
    description:
      "AI-powered agriculture bot delivering real-time crop insights, weather analysis, and farming recommendations.",
    stack: ["TypeScript", "AI", "Real-Time", "Bot"],
    Cover: CoverAavek,
  },
  {
    name: "Multiuser AI Coding Platform",
    github: "https://github.com/Amanparashar-09/collaborative-coding-platform",
    status: "LIVE",
    domain: "Full-Stack",
    tagline: "50 engineers. One editor. Zero lag.",
    description:
      "Real-time collaborative coding platform supporting 50 concurrent users with Redis session sync and WebSocket engine. Latency dropped from 450ms to 250ms.",
    stack: ["React", "Node.js", "WebSockets", "Redis", "REST APIs"],
    impact: ["50 users", "250ms latency", "-44% sync lag"],
    Cover: CoverWhiteboard,
  },
  {
    name: "PrepAI",
    github: "https://github.com/Amanparashar-09/PrepAI",
    status: "SHIPPED",
    domain: "AI",
    tagline: "AI that preps you harder than any recruiter.",
    description:
      "AI-powered placement preparation platform with adaptive assessments, semantic evaluation, and IRT scoring.",
    stack: ["TypeScript", "Gemini API", "MongoDB", "Next.js"],
    Cover: CoverPrepAI,
  },
];

/* ============================== CARD ============================== */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const d = DOMAIN_STYLE[project.domain];
  const isLive = project.status === "LIVE";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -8 }}
      className="group relative bg-surface border border-wire rounded-xl overflow-hidden flex flex-col"
      style={{
        transition: "border-color 320ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 320ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        ['--accent' as string]: d.accent,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `rgba(${d.rgb}, 0.5)`;
        e.currentTarget.style.boxShadow = `0 20px 60px rgba(${d.rgb}, 0.1)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Cover */}
      <div className="relative w-full overflow-hidden h-[160px] md:h-[200px]">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
          <project.Cover />
        </div>
      </div>

      <div className="relative flex flex-col flex-1 p-6">
        {/* badges */}
        <div className="flex items-center justify-between gap-2">
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider px-2 py-1 rounded-sm border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
              LIVE
            </span>
          ) : (
            <span className="inline-flex items-center font-mono text-[10px] font-semibold tracking-wider px-2 py-1 rounded-sm border border-slate-500/20 bg-slate-500/10 text-dim">
              SHIPPED
            </span>
          )}
          <span className={`inline-flex items-center gap-1 font-mono text-[10px] font-semibold tracking-wider px-2 py-1 rounded-sm border ${d.classes}`}>
            <span>{d.symbol}</span> {project.domain}
          </span>
        </div>

        {/* title */}
        <h3 className="mt-4 text-[18px] font-bold text-frost leading-tight" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
          {project.name}
        </h3>

        {/* tagline */}
        <p className="mt-1 font-mono text-[13px] italic text-dim group-hover:text-frost transition-colors">
          "{project.tagline}"
        </p>

        {/* description */}
        <p className="mt-3 font-mono text-sm text-slate leading-6 line-clamp-3">
          {project.description}
        </p>

        {/* impact */}
        {project.impact && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.impact.map((stat) => (
              <div key={stat} className="bg-base/60 border border-wire rounded-md px-2 py-2 text-center">
                <div className="font-mono text-[11px] text-gold font-semibold tracking-wide">{stat}</div>
              </div>
            ))}
          </div>
        )}

        {/* stack pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="bg-elevated text-dim font-mono text-[10px] px-2 py-0.5 rounded-sm">
              {t}
            </span>
          ))}
        </div>

        {/* footer */}
        <div className="mt-auto pt-4 border-t border-wire flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-gold font-mono text-sm">
              <Star size={14} fill="currentColor" />
              {project.stars ?? 0}
            </span>
            {project.forks ? (
              <span className="flex items-center gap-1.5 text-sky font-mono text-sm">
                <GitFork size={14} />
                {project.forks}
              </span>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            <a href={project.github} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs border border-wire text-dim hover:border-sky hover:text-sky px-3 py-1.5 rounded-sm transition-colors">
              GitHub <ArrowUpRight size={12} />
            </a>
            {project.homepage && (
              <a href={project.homepage} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
                Live <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ============================== SECTION ============================== */

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div {...scrollReveal} className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <SectionLabel>recent.work</SectionLabel>
            <h2 className="mt-4 text-frost text-4xl md:text-5xl font-extrabold leading-[1.1]" style={{ fontFamily: "Syne, sans-serif" }}>
              Things I've shipped.
            </h2>
            <p className="mt-2 font-mono text-[13px] text-dim">
              6 projects. Real problems. Shipped solutions.
            </p>
          </div>
          <a href="https://github.com/Amanparashar-09" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-dim hover:text-gold transition-colors">
            All repos <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <div className="mt-12 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
