import { useEffect } from 'react';

/** Staggered fade/rise-in for [data-section-reveal] blocks.
 *  Reveals as soon as any pixel of the section intersects the viewport
 *  so tall galleries (dozens of images) can never stay stuck at opacity 0.
 */
export default function useSectionReveal(deps = []) {
  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-section-reveal]')];
    if (!sections.length) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const BASE_DELAY_S = 0;
    const STAGGER_S = 0.08;
    const MAX_STAGGER_S = 0.45;

    function revealSection(section) {
      if (section.classList.contains('is-inview')) return;
      section.classList.add('is-inview');
    }

    const observers = [];

    sections.forEach((section) => {
      const items = [...section.querySelectorAll('.section-reveal')];

      items.forEach((el, index) => {
        const delay = Math.min(BASE_DELAY_S + index * STAGGER_S, MAX_STAGGER_S);
        el.style.setProperty('--reveal-delay', `${delay}s`);
      });

      if (reducedMotion) {
        revealSection(section);
        return;
      }

      // threshold: 0 → any intersection is enough. Tall masonry sections
      // can never reach a high ratio of their own height on screen.
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            revealSection(entry.target);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0, rootMargin: '0px 0px -8% 0px' }
      );

      observer.observe(section);
      observers.push(observer);

      // Failsafe: if the section is already on screen when we mount
      // (or IO misses a multi-column layout quirk), force-reveal.
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      if (rect.top < vh * 0.92 && rect.bottom > vh * 0.08) {
        revealSection(section);
        observer.unobserve(section);
      }
    });

    // Absolute failsafe — never leave content invisible for clients.
    const failsafe = window.setTimeout(() => {
      sections.forEach(revealSection);
    }, 2500);

    return () => {
      window.clearTimeout(failsafe);
      observers.forEach((o) => o.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
