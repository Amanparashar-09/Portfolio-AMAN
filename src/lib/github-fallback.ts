export interface FallbackRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
}

export const FALLBACK_REPOS: FallbackRepo[] = [
  {
    id: 1,
    name: "collaborative-coding-platform",
    description:
      "Real-time multiplayer coding environment with WebSocket sync, shared cursors, and live execution for 50+ concurrent users.",
    html_url: "https://github.com/AmanParashar09",
    homepage: null,
    language: "JavaScript",
    stargazers_count: 0,
    topics: ["websockets", "react", "node", "redis", "real-time"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "PrepPro-Assessment-Engine",
    description:
      "AI-driven placement preparation platform with adaptive IRT scoring, Gemini-generated questions, and 5K+ student records.",
    html_url: "https://github.com/AmanParashar09",
    homepage: null,
    language: "JavaScript",
    stargazers_count: 0,
    topics: ["gemini", "irt", "assessment", "next-js", "firebase"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "blockchain-voting-dapp",
    description:
      "Decentralized voting application built on Ethereum with Solidity smart contracts and a Web3.js front-end.",
    html_url: "https://github.com/AmanParashar09",
    homepage: null,
    language: "Solidity",
    stargazers_count: 0,
    topics: ["solidity", "ethereum", "web3", "dapp"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    name: "ml-classifier-pipeline",
    description:
      "Production ML pipeline using TensorFlow and Scikit-learn — improved classification accuracy from 72% → 85% on 10K records.",
    html_url: "https://github.com/AmanParashar09",
    homepage: null,
    language: "Python",
    stargazers_count: 0,
    topics: ["tensorflow", "scikit-learn", "ml", "data-science"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 5,
    name: "express-rest-toolkit",
    description:
      "Opinionated Express + MVC starter with 12 ready-to-use REST endpoints, JWT auth, and MongoDB models.",
    html_url: "https://github.com/AmanParashar09",
    homepage: null,
    language: "JavaScript",
    stargazers_count: 0,
    topics: ["express", "node", "rest-api", "mongodb", "jwt"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 6,
    name: "smart-contract-audit-notes",
    description:
      "Annotated audit walkthroughs of common Solidity vulnerabilities — reentrancy, integer overflow, oracle manipulation.",
    html_url: "https://github.com/AmanParashar09",
    homepage: null,
    language: "Solidity",
    stargazers_count: 0,
    topics: ["solidity", "security", "audit", "ethereum"],
    updated_at: new Date().toISOString(),
  },
];
