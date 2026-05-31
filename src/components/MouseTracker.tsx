import { useEffect } from "react";

/**
 * Updates --mouse-x / --mouse-y on <body> so body::after radial gradient follows the cursor.
 * Disabled on touch devices.
 */
export function MouseTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!supportsHover) return;

    let raf = 0;
    let pendingX = 50;
    let pendingY = 50;

    const apply = () => {
      document.body.style.setProperty("--mouse-x", pendingX.toFixed(1) + "%");
      document.body.style.setProperty("--mouse-y", pendingY.toFixed(1) + "%");
      raf = 0;
    };

    const onMove = (e: MouseEvent) => {
      pendingX = (e.clientX / window.innerWidth) * 100;
      pendingY = (e.clientY / window.innerHeight) * 100;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
