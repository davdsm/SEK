(function () {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || typeof Lenis === "undefined") {
    document.documentElement.style.scrollBehavior = "smooth";
    return;
  }

  const lenis = new Lenis({
    lerp: 0.085,
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
  });

  document.documentElement.classList.add("lenis", "lenis-smooth");

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  window.lenis = lenis;
})();
