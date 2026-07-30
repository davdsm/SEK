import { useEffect } from 'react';

/**
 * Header enter animation. On the homepage only: hide on scroll down,
 * show on scroll up. On all other pages the header stays visible.
 */
export default function useSiteHeader(headerRef, { isHome } = {}) {
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let visible = false;
    let ready = false;
    let lastY = 0;
    let ticking = false;
    let lenisAttached = null;
    let enterTimer = 0;

    function getScrollY() {
      return window.lenis?.scroll ?? window.scrollY ?? 0;
    }

    function setVisible(next) {
      if (visible === next) return;
      visible = next;
      header.classList.toggle('is-visible', next);
      document.body.classList.toggle('is-header-visible', next);
    }

    function enter() {
      if (ready) return;
      if (isHome && document.body.classList.contains('is-loading')) return;
      ready = true;
      lastY = getScrollY();

      if (reduceMotion) {
        setVisible(true);
        return;
      }

      enterTimer = window.setTimeout(() => setVisible(true), 60);
    }

    // Inner pages: always on after enter — no scroll hide/show.
    if (!isHome) {
      enter();
      return () => {
        window.clearTimeout(enterTimer);
        header.classList.remove('is-visible');
        document.body.classList.remove('is-header-visible');
      };
    }

    function onScroll() {
      if (!ready || ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        const y = getScrollY();
        const delta = y - lastY;

        if (y <= 32) {
          setVisible(true);
          lastY = y;
          return;
        }

        if (delta > 6) setVisible(false);
        else if (delta < -6) setVisible(true);

        lastY = y;
      });
    }

    function attachLenis() {
      const lenis = window.lenis;
      if (!lenis || lenis === lenisAttached) return;
      if (lenisAttached?.off) lenisAttached.off('scroll', onScroll);
      lenis.on('scroll', onScroll);
      lenisAttached = lenis;
    }

    const loadingObserver = new MutationObserver(() => {
      if (!document.body.classList.contains('is-loading')) enter();
    });
    loadingObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    if (!document.body.classList.contains('is-loading')) {
      enter();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    attachLenis();
    const lenisPoll = window.setInterval(attachLenis, 400);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearInterval(lenisPoll);
      loadingObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (lenisAttached?.off) lenisAttached.off('scroll', onScroll);
      header.classList.remove('is-visible');
      document.body.classList.remove('is-header-visible');
    };
  }, [headerRef, isHome]);
}
