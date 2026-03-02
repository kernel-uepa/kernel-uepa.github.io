import { useEffect, useState } from "react";

export function useCountUp(target: string, duration = 1500, start = false) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!start) return;

    // Extract numeric part and suffix (e.g. "120+" → 120, "+")
    const match = target.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const end = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, start]);

  return display;
}
