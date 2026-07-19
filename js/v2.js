/* SEK v2 — scroll-driven intro + horizontal projects carousel */
(() => {
  // Locomotive Scroll v5 (Lenis-based) — smooths native scrolling,
  // so position: sticky and window scroll events keep working.
  if (window.LocomotiveScroll) {
    new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.09,
        smoothWheel: true,
      },
    });
  }

  const scrolly = document.getElementById('scrolly');
  const room = document.querySelector('.room');
  const ocean = document.querySelector('.ocean');
  const logoDark = document.querySelector('.logo-dark');
  const phrase = document.querySelector('.phrase');
  const scrollHint = document.querySelector('.scroll-hint');
  const whatwedo = document.getElementById('whatwedo');
  const track = document.querySelector('.track');

  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  // progress of p between a and b, eased
  const seg = (p, a, b) => clamp01((p - a) / (b - a));
  const easeInOut = (t) => t * t * (3 - 2 * t);

  function updateIntro() {
    const total = scrolly.offsetHeight - innerHeight;
    const p = clamp01(-scrolly.getBoundingClientRect().top / total);

    // Phase 1 · zoom into the arch (0 → .25), opacity decreasing while scrolling
    const zoom = easeInOut(seg(p, 0, 0.25));
    const scale = 1 + zoom * 5.2;
    room.style.transform = `scale(${scale})`;
    room.style.opacity = 1 - easeInOut(seg(p, 0.04, 0.26));
    room.style.visibility = p > 0.28 ? 'hidden' : 'visible';

    // Scroll hint fades out as soon as scrolling starts
    scrollHint.style.opacity = 1 - seg(p, 0.01, 0.06);

    // Phase 2 · ocean alone (.25 → .35)

    // Phase 3 · dark logo rises from the ocean (.35 → .55)
    const rise = easeInOut(seg(p, 0.35, 0.55));
    logoDark.style.transform =
      `translate(-50%, -50%) translateY(${(1 - rise) * 45}vh)`;
    logoDark.style.opacity = rise * (1 - seg(p, 0.68, 0.82));

    // Phase 4 · ocean slides up revealing gold logo (.6 → .88)
    const lift = easeInOut(seg(p, 0.6, 0.88));
    ocean.style.transform = `translateY(${-lift * 100}vh)`;

    // Phrase sweeps in under the gold logo once the ocean has cleared it
    if (p >= 0.86) phrase.classList.add('in');
    else if (p < 0.7) phrase.classList.remove('in');
  }

  // Horizontal carousel — vertical scroll drives translateX
  function sizeCarousel() {
    const overflow = Math.max(0, track.scrollWidth - innerWidth * 0.4);
    whatwedo.style.height = `${innerHeight + overflow}px`;
    return overflow;
  }

  function updateCarousel() {
    const overflow = track.scrollWidth - innerWidth * 0.4;
    if (overflow <= 0) return;
    const total = whatwedo.offsetHeight - innerHeight;
    const p = clamp01(-whatwedo.getBoundingClientRect().top / total);
    track.style.transform = `translateX(${-p * overflow}px)`;
  }

  function onScroll() {
    updateIntro();
    updateCarousel();
  }

  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => {
    sizeCarousel();
    onScroll();
  });

  sizeCarousel();
  onScroll();

  // Safari sometimes blocks autoplay until a gesture
  const sea = document.querySelector('.sea');
  const tryPlay = () => sea.play().catch(() => {});
  tryPlay();
  addEventListener('pointerdown', tryPlay, { once: true });
})();
