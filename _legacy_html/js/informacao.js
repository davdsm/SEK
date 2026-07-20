(function () {
  const section = document.getElementById("informacao");
  if (!section) return;

  const statValues = [...section.querySelectorAll(".informacao__stat-value[data-count]")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const BG_THRESHOLD = 0.5;
  const COUNTER_THRESHOLD = 0.3;
  const BASE_DELAY_MS = 1000;
  const COUNT_DURATION_MS = 1800;

  let countersStarted = false;

  function setPageBackground(active) {
    document.documentElement.classList.toggle("is-informacao-bg", active);
    document.body.classList.toggle("is-informacao-bg", active);
  }

  function formatValue(value, decimals) {
    if (decimals > 0) return value.toFixed(decimals);
    return String(Math.round(value));
  }

  function setFinalValues() {
    statValues.forEach((el) => {
      const target = parseFloat(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      el.textContent = `${formatValue(target, decimals)}${suffix}`;
    });
  }

  function animateCounter(el, delayMs) {
    const target = parseFloat(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const startAt = performance.now() + delayMs;

    function frame(now) {
      if (now < startAt) {
        requestAnimationFrame(frame);
        return;
      }

      const elapsed = now - startAt;
      const progress = Math.min(elapsed / COUNT_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      el.textContent = `${formatValue(current, decimals)}${suffix}`;

      if (progress < 1) requestAnimationFrame(frame);
      else el.textContent = `${formatValue(target, decimals)}${suffix}`;
    }

    requestAnimationFrame(frame);
  }

  function startCounters() {
    if (countersStarted) return;
    countersStarted = true;

    if (reducedMotion) {
      setFinalValues();
      return;
    }

    statValues.forEach((el, index) => {
      animateCounter(el, BASE_DELAY_MS + index * 120);
    });
  }

  function evaluateSection() {
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const sectionHeight = section.offsetHeight;
    const visibleTop = Math.max(0, rect.top);
    const visibleBottom = Math.min(viewportHeight, rect.bottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const sectionCoverage = sectionHeight > 0 ? visibleHeight / sectionHeight : 0;
    const viewportCoverage = viewportHeight > 0 ? visibleHeight / viewportHeight : 0;

    const bgActive =
      visibleHeight > 0 &&
      (sectionCoverage >= BG_THRESHOLD || viewportCoverage >= BG_THRESHOLD);
    const counterActive = visibleHeight > 0 && sectionCoverage >= COUNTER_THRESHOLD;

    setPageBackground(bgActive);

    if (counterActive) startCounters();
  }

  const observer = new IntersectionObserver(
    () => evaluateSection(),
    { threshold: [0, 0.1, 0.25, COUNTER_THRESHOLD, BG_THRESHOLD, 0.75, 1] }
  );

  observer.observe(section);

  window.addEventListener("scroll", evaluateSection, { passive: true });
  window.addEventListener("resize", evaluateSection);

  if (window.lenis) {
    window.lenis.on("scroll", evaluateSection);
  }

  evaluateSection();
})();
