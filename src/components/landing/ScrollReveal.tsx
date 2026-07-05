"use client";

import { useEffect } from "react";

const revealSelector =
  "#inhalt section:not(#hero), #inhalt article, #inhalt details";

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    ).filter((element) => !element.closest("#hero"));

    elements.forEach((element, index) => {
      element.classList.add("jmk-reveal");

      const siblingIndex = Array.from(
        element.parentElement?.children ?? [],
      ).indexOf(element);
      const delay = Math.min(Math.max(siblingIndex, index % 4), 4) * 35;

      element.style.setProperty("--jmk-reveal-delay", `${delay}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
