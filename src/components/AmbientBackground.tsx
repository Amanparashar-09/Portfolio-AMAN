import { useEffect, useRef } from "react";

/**
 * Three fixed ambient orbs that drift slightly with scroll progress.
 * Lives at z-index 0; content sits at z-index 1.
 */
export function AmbientBackground() {
  const orb1 = useRef<HTMLDivElement | null>(null);
  const orb2 = useRef<HTMLDivElement | null>(null);
  const orb3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const apply = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (orb1.current)
        orb1.current.style.transform = `translate(${p * 60}px, ${p * -80}px) scale(1.1)`;
      if (orb2.current)
        orb2.current.style.transform = `translate(${p * -40}px, ${p * 60}px) scale(0.95)`;
      if (orb3.current)
        orb3.current.style.transform = `translate(${p * 30}px, ${p * -30}px) scale(1.05)`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <div
        ref={orb1}
        style={{
          position: "fixed",
          top: "-150px",
          right: "-150px",
          width: 600,
          height: 600,
          borderRadius: "50%",
          willChange: "transform",
          background:
            "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        ref={orb2}
        style={{
          position: "fixed",
          bottom: "30%",
          left: "-200px",
          width: 700,
          height: 700,
          borderRadius: "50%",
          willChange: "transform",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)",
        }}
      />
      <div
        ref={orb3}
        style={{
          position: "fixed",
          top: "60%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          willChange: "transform",
          background:
            "radial-gradient(circle, rgba(196,181,253,0.04) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
