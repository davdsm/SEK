/* Text entry animation — GSAP SplitText: characters fade + rise into
   place with a stagger, triggered on scroll (or manually for text
   that lives inside the pinned intro, driven by js/v2.js instead). */
(() => {
  if (!window.gsap || !window.SplitText) return;
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const CONFIG = {
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.032,
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
  };

  function buildTween(el) {
    const split = new SplitText(el, {
      type: 'chars, words',
      charsClass: 'split-char',
      wordsClass: 'split-word',
      smartWrap: true,
      reduceWhiteSpace: false,
    });
    const targets = split.chars.length ? split.chars : split.words;

    if (reduceMotion) {
      gsap.set(targets, CONFIG.to);
      return null;
    }

    gsap.set(targets, CONFIG.from);
    return gsap.to(targets, {
      ...CONFIG.to,
      duration: CONFIG.duration,
      ease: CONFIG.ease,
      stagger: CONFIG.stagger,
      paused: true,
    });
  }

  function whenFontsReady(fn) {
    if (document.fonts && document.fonts.status !== 'loaded') {
      document.fonts.ready.then(fn);
    } else {
      fn();
    }
  }

  whenFontsReady(() => {
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const tween = buildTween(el);
      if (!tween) return;

      if (el.dataset.reveal === 'manual') {
        el._reveal = tween;
        return;
      }

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => tween.play(),
      });
    });
  });
})();
