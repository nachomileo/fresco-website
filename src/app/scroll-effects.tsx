"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;
    const updateHero = () => {
      frame = 0;
      if (!hero) return;

      const start = Math.min(300, window.innerHeight * 0.42);
      const distance = Math.max(500, window.innerHeight * 0.9);
      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      root.style.setProperty("--hero-progress", progress.toFixed(3));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHero);
    };

    updateHero();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
      root.style.removeProperty("--hero-progress");
    };
  }, []);

  return null;
}
