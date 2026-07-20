import { useEffect } from 'react';

/** Port of js/section-reveal.js — staggered fade/rise-in for [data-section-reveal] blocks. */
export default function useSectionReveal(deps = []) {
  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-section-reveal]')];
    if (!sections.length) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const BASE_DELAY_S = 0;
    const STAGGER_S = 0.1;
    const VISIBILITY_THRESHOLD = 0.3;

    function revealSection(section) {
      if (section.classList.contains('is-inview')) return;
      section.classList.add('is-inview');
    }

    const observers = [];

    sections.forEach((section) => {
      const items = [...section.querySelectorAll('.section-reveal')];

      items.forEach((el, index) => {
        el.style.setProperty('--reveal-delay', `${BASE_DELAY_S + index * STAGGER_S}s`);
      });

      if (reducedMotion) {
        revealSection(section);
        return;
      }

      // A section taller than ~1/threshold of the viewport can never
      // reach VISIBILITY_THRESHOLD of *its own* height on screen at
      // once — cap the target ratio to whatever's actually reachable
      // so long sections (e.g. a tall project grid) still reveal.
      const reachable = (window.innerHeight * 0.95) / section.offsetHeight;
      const effectiveThreshold = Math.min(VISIBILITY_THRESHOLD, reachable);

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries.find((item) => item.target === section);
          if (entry && entry.isIntersecting && entry.intersectionRatio >= effectiveThreshold) {
            revealSection(section);
            observer.disconnect();
          }
        },
        { threshold: effectiveThreshold }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
