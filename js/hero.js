(function () {
  const hero = document.getElementById("hero");
  const scrollContainer = hero?.querySelector(".hero__scroll");
  const stickyMask = hero?.querySelector(".hero__mask");
  const maskWindow = hero?.querySelector(".hero__mask-window");
  const maskImg = hero?.querySelector(".hero__mask-img");
  const revealItems = hero ? [...hero.querySelectorAll(".hero__reveal")] : [];

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const INITIAL_MASK_SIZE = 0.8;
  const TARGET_MASK_SIZE = 30;
  const EASING = 0.15;
  const COMPLETE_THRESHOLD = 0.99;

  const REVEAL_START = 0.1;
  const REVEAL_STAGGER = 0.038;
  const REVEAL_DURATION = 0.07;

  const LOGO_ENTER_DURATION = 1100;

  let easedScrollProgress = 0;
  let logoEnterProgress = reducedMotion ? 1 : 0;
  let logoEnterStart = null;
  let rafId = null;

  function smoothstep(t) {
    return t * t * (3 - 2 * t);
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function getItemReveal(progress, index) {
    const start = REVEAL_START + index * REVEAL_STAGGER;
    const raw = (progress - start) / REVEAL_DURATION;
    return smoothstep(clamp(raw, 0, 1));
  }

  function updateReveals(progress) {
    revealItems.forEach((el, index) => {
      const reveal = getItemReveal(progress, index);
      el.style.setProperty("--reveal", reveal);
      el.style.pointerEvents = reveal > 0.6 ? "auto" : "none";
    });
  }

  function getScrollProgress() {
    if (!scrollContainer || !stickyMask) return 0;

    const scrollable = scrollContainer.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return 1;

    const raw = clamp(stickyMask.offsetTop / scrollable, 0, 1);

    if (raw >= 1) {
      easedScrollProgress = 1;
    } else {
      const delta = raw - easedScrollProgress;
      easedScrollProgress += delta * EASING;
    }

    return easedScrollProgress;
  }

  function setMaskSize(progress) {
    if (!maskWindow) return;

    const maskSize = (INITIAL_MASK_SIZE + TARGET_MASK_SIZE * progress) * 100 + "%";
    maskWindow.style.webkitMaskSize = maskSize;
    maskWindow.style.maskSize = maskSize;
  }

  function updateLogoEnter(timestamp) {
    if (!hero || reducedMotion) return;

    if (!logoEnterStart) logoEnterStart = timestamp;

    const t = clamp((timestamp - logoEnterStart) / LOGO_ENTER_DURATION, 0, 1);
    logoEnterProgress = smoothstep(t);
    hero.style.setProperty("--logo-enter", logoEnterProgress);

    if (logoEnterProgress >= 1) {
      hero.classList.add("is-logo-entered");
    }
  }

  function updateHeroParallax(progress) {
    if (!maskImg) return;

    const y = progress * -100;
    const scale = 1 + progress * 0.08;
    maskImg.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
  }

  function animate(timestamp) {
    if (!hero || !scrollContainer || !stickyMask) return;

    updateLogoEnter(timestamp);

    const progress = getScrollProgress();
    setMaskSize(progress);
    updateHeroParallax(progress);
    updateReveals(progress);

    hero.style.setProperty("--intro-progress", progress);

    const complete = progress >= COMPLETE_THRESHOLD;
    hero.classList.toggle("is-intro-complete", complete);
    if (maskWindow) {
      maskWindow.setAttribute("aria-hidden", complete ? "true" : "false");
    }

    rafId = requestAnimationFrame(animate);
  }

  function initIntro() {
    if (!hero || !scrollContainer || !stickyMask) return;

    if (reducedMotion) {
      hero.classList.add("is-intro-skip", "is-intro-complete");
      hero.style.setProperty("--intro-progress", "1");
      hero.style.setProperty("--logo-enter", "1");
      hero.classList.add("is-logo-entered");
      setMaskSize(1);
      updateHeroParallax(1);
      updateReveals(1);
      if (maskWindow) maskWindow.setAttribute("aria-hidden", "true");
      return;
    }

    easedScrollProgress = 0;
    logoEnterProgress = 0;
    logoEnterStart = null;
    hero.style.setProperty("--logo-enter", "0");
    setMaskSize(0);
    updateReveals(0);
    rafId = requestAnimationFrame(animate);

    window.addEventListener("resize", () => {
      easedScrollProgress = getScrollProgress();
    });
  }

  initIntro();

  window.addEventListener("pagehide", () => {
    if (rafId) cancelAnimationFrame(rafId);
  });
})();
