"use client";

import { MotionConfig } from "motion/react";
import { useEffect } from "react";

/**
 * Motion respects "Reduce motion".
 * Lenis smooth scroll only runs on mouse/trackpad devices (phones already scroll smoothly),
 * and only after the page has loaded, so its frame loop never delays the first paint.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let destroy: (() => void) | undefined;
    let cancelled = false;

    const start = async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true, autoRaf: true });
      destroy = () => lenis.destroy();
    };

    // Safari has no requestIdleCallback; fall back to a short timeout.
    const idle = (cb: () => void) =>
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(cb, { timeout: 3000 })
        : setTimeout(cb, 1500);

    const onLoad = () => idle(start);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      destroy?.();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
