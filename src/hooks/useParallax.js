import { useEffect } from 'react';

/** Port of js/parallax.js — subtle vertical drift on any .js-parallax image. */
export default function useParallax(deps = []) {
  useEffect(() => {
    const images = document.querySelectorAll('.js-parallax');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!images.length || reducedMotion) return undefined;

    let rafId = null;

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function getCoverScale(img, rect) {
      const custom = parseFloat(img.dataset.coverScale);
      if (!Number.isNaN(custom)) return custom;
      if (rect.height < 100 || rect.width < 100) return 1.08;
      return 1.22;
    }

    function getContainerHeight(img) {
      const parent = img.parentElement;
      if (!parent) return img.offsetHeight;
      return parent.getBoundingClientRect().height || img.offsetHeight;
    }

    function update() {
      const vh = window.innerHeight;
      const viewportCenter = vh * 0.5;

      images.forEach((img) => {
        const speed = parseFloat(img.dataset.parallax) || 0.1;
        const rect = img.getBoundingClientRect();
        const coverScale = getCoverScale(img, rect);
        const containerHeight = getContainerHeight(img);
        const elementCenter = rect.top + rect.height * 0.5;
        const distance = elementCenter - viewportCenter;
        const rawY = distance * speed * -1;
        const slack = containerHeight * (coverScale - 1) * 0.5;
        const y = clamp(rawY, -slack, slack);

        img.style.transformOrigin = 'center center';
        img.style.transform = `translate3d(0, ${y}px, 0) scale(${coverScale})`;
      });
    }

    function tick() {
      update();
      rafId = requestAnimationFrame(tick);
    }

    tick();
    window.addEventListener('resize', update);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', update);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
