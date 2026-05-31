import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 60], ["rgba(8,12,20,0)", "rgba(8,12,20,0.85)"]);
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg }}
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl backdrop-saturate-150"
      >
        <motion.div
          style={{ opacity: borderOpacity }}
          className="absolute inset-x-0 bottom-0 h-px bg-wire pointer-events-none"
        />
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="text-gold text-xl font-extrabold tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
            aria-label="Aman Parashar — home"
          >
            AP
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  data-active={active === l.id}
                  className={`nav-link font-mono text-[13px] tracking-wide transition-colors ${
                    active === l.id ? "text-sky" : "text-dim hover:text-frost"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-frost p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl md:hidden flex items-center justify-center"
          >
            <ul className="flex flex-col gap-8 text-center">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="font-mono text-2xl text-frost hover:text-gold transition-colors"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
