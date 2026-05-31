import { useEffect, useRef, useState } from "react";

interface Options {
  speed?: number;
  pauseMs?: number;
  start?: boolean;
}

export function useTypewriter(
  texts: string[],
  { speed = 65, pauseMs = 2000, start = true }: Options = {},
) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    if (!start || texts.length === 0) return;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = texts[indexRef.current % texts.length];
      if (!deletingRef.current) {
        charRef.current += 1;
        setDisplayText(current.slice(0, charRef.current));
        setIsTyping(true);
        if (charRef.current >= current.length) {
          deletingRef.current = true;
          timer = setTimeout(tick, pauseMs);
          return;
        }
        timer = setTimeout(tick, speed);
      } else {
        charRef.current -= 1;
        setDisplayText(current.slice(0, Math.max(0, charRef.current)));
        setIsTyping(false);
        if (charRef.current <= 0) {
          deletingRef.current = false;
          indexRef.current += 1;
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, Math.max(20, speed / 2));
      }
    };

    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, [texts, speed, pauseMs, start]);

  return { displayText, isTyping };
}
