import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 h-[2px] pointer-events-none"
      style={{
        zIndex: 1000,
        width: `${progress}%`,
        background:
          "linear-gradient(90deg, #f0b429 0%, #38bdf8 50%, #c4b5fd 100%)",
        transition: "width 0.1s linear",
        willChange: "width",
      }}
    />
  );
}
