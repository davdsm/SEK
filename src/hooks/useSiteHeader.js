import { useEffect } from 'react';

/**
 * Port of js/site-header.js — header show/hide on scroll direction,
 * light/dark tone detection under the header, and the FR/EN toggle.
 * Nav active-link state is handled by React Router's NavLink instead.
 */
export default function useSiteHeader(headerRef) {
  useEffect(() => {
    const pageHeader = headerRef.current;
    if (!pageHeader) return undefined;

    function markToneSections() {
      document.querySelectorAll('main section, .footer').forEach((el) => {
        el.dataset.headerTone = 'light';
      });

      ['.hero', '.culture-hero', '.project-banner', '.contact-hero', '.portfolio__carousel'].forEach(
        (selector) => {
          document.querySelectorAll(selector).forEach((el) => {
            el.dataset.headerTone = 'dark';
          });
        }
      );
    }

    function getToneAtPoint(x, y) {
      const originalPointerEvents = pageHeader.style.pointerEvents;
      pageHeader.style.pointerEvents = 'none';

      const el = document.elementFromPoint(x, y);
      const tone = el?.closest('[data-header-tone]')?.dataset.headerTone;

      pageHeader.style.pointerEvents = originalPointerEvents || '';

      return tone || 'light';
    }

    function updateHeaderTone() {
      if (!document.body.classList.contains('is-header-visible')) return;

      const rect = pageHeader.getBoundingClientRect();
      const x = window.innerWidth / 2;
      const y = Math.min(rect.bottom + 6, window.innerHeight - 1);
      const tone = getToneAtPoint(x, y);

      pageHeader.classList.toggle('page-header--tone-dark', tone === 'dark');
      pageHeader.classList.toggle('page-header--tone-light', tone === 'light');
    }

    function initHeaderScroll() {
      const hasHero = document.querySelector('.hero');

      if (!hasHero) {
        document.body.classList.add('is-header-visible');
      }

      function getScrollY() {
        return window.lenis?.scroll ?? window.scrollY;
      }

      let lastScrollY = getScrollY();
      let ticking = false;

      function update() {
        const currentScrollY = getScrollY();

        if (hasHero && !document.body.classList.contains('is-past-hero')) {
          lastScrollY = currentScrollY;
          ticking = false;
          return;
        }

        if (currentScrollY < lastScrollY) {
          document.body.classList.add('is-header-visible');
        } else if (currentScrollY > lastScrollY) {
          document.body.classList.remove('is-header-visible');
        }

        lastScrollY = currentScrollY;
        ticking = false;
      }

      function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      if (window.lenis) window.lenis.on('scroll', onScroll);

      return onScroll;
    }

    function initHeaderTone() {
      markToneSections();
      updateHeaderTone();

      window.addEventListener('scroll', updateHeaderTone, { passive: true });
      window.addEventListener('resize', updateHeaderTone);
      if (window.lenis) window.lenis.on('scroll', updateHeaderTone);

      const headerObserver = new MutationObserver(() => {
        if (document.body.classList.contains('is-header-visible')) updateHeaderTone();
      });
      headerObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

      return headerObserver;
    }

    const onScroll = initHeaderScroll();
    const headerObserver = initHeaderTone();

    return () => {
      if (onScroll) window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', updateHeaderTone);
      window.removeEventListener('resize', updateHeaderTone);
      headerObserver?.disconnect();
      document.body.classList.remove('is-header-visible', 'is-past-hero');
    };
  }, [headerRef]);
}
