import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-wire">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div
            className="text-gold text-lg font-extrabold"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Aman Parashar
          </div>
          <div className="mt-1 font-mono text-xs text-dim">
            All Rights Reserved To Owner · © {new Date().getFullYear()}
          </div>
        </div>
        <div className="flex items-center gap-4 text-dim">
          <a
            href="https://github.com/AmanParashar09"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-gold transition-colors"
          >
            <GithubIcon width={18} height={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gold transition-colors">
            <LinkedinIcon width={18} height={18} />
          </a>
          <a
            href="mailto:amanparashar0911@gmail.com"
            aria-label="Email"
            className="hover:text-gold transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
