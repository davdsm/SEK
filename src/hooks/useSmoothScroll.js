import { useEffect } from 'react';
import Lenis from 'lenis';

/** Port of js/smooth-scroll.js — Lenis-powered inertia scrolling for the inner pages. */
export default function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      document.documentElement.style.scrollBehavior = 'smooth';
      return undefined;
    }

    const lenis = new Lenis({
      lerp: 0.085,
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    document.documentElement.classList.add('lenis', 'lenis-smooth');
    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
      if (window.lenis === lenis) delete window.lenis;
    };
  }, []);
}
