(function () {
  const path = window.location.pathname.toLowerCase();
  let page = "";

  if (path.endsWith("/") || path.endsWith("/index.html") || path.endsWith("/sek") || path.endsWith("/sek/")) {
    page = "home";
  } else if (path.includes("culture")) {
    page = "vision";
  } else if (path.includes("projects") || path.includes("project.html")) {
    page = "portfolio";
  } else if (path.includes("contact")) {
    page = "contact";
  }

  const pageHeader = document.querySelector(".page-header");

  if (page && pageHeader) {
    const activeLink = document.querySelector(`.hero__nav-link[data-nav="${page}"]`);
    if (activeLink) {
      activeLink.classList.add("hero__nav-link--active");
      activeLink.setAttribute("aria-current", "page");
    }
  }

  function markToneSections() {
    document.querySelectorAll("main section, .footer").forEach((el) => {
      el.dataset.headerTone = "light";
    });

    [".hero", ".culture-hero", ".project-banner", ".contact-hero", ".portfolio__carousel"].forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.dataset.headerTone = "dark";
      });
    });
  }

  function getToneAtPoint(x, y) {
    const originalPointerEvents = pageHeader?.style.pointerEvents;
    if (pageHeader) pageHeader.style.pointerEvents = "none";

    const el = document.elementFromPoint(x, y);
    const tone = el?.closest("[data-header-tone]")?.dataset.headerTone;

    if (pageHeader) pageHeader.style.pointerEvents = originalPointerEvents || "";

    return tone || "light";
  }

  function updateHeaderTone() {
    if (!pageHeader) return;
    if (!document.body.classList.contains("is-header-visible")) {
      return;
    }

    const rect = pageHeader.getBoundingClientRect();
    const x = window.innerWidth / 2;
    const y = Math.min(rect.bottom + 6, window.innerHeight - 1);
    const tone = getToneAtPoint(x, y);

    pageHeader.classList.toggle("page-header--tone-dark", tone === "dark");
    pageHeader.classList.toggle("page-header--tone-light", tone === "light");
  }

  function initHeaderScroll() {
    const hasHero = document.querySelector(".hero");

    if (!hasHero) {
      document.body.classList.add("is-header-visible");
    }

    function getScrollY() {
      return window.lenis?.scroll ?? window.scrollY;
    }

    let lastScrollY = getScrollY();
    let ticking = false;

    function update() {
      const currentScrollY = getScrollY();

      if (hasHero && !document.body.classList.contains("is-past-hero")) {
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      if (currentScrollY < lastScrollY) {
        document.body.classList.add("is-header-visible");
      } else if (currentScrollY > lastScrollY) {
        document.body.classList.remove("is-header-visible");
      }

      lastScrollY = currentScrollY;
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    if (window.lenis) {
      window.lenis.on("scroll", onScroll);
    }
  }

  function initHeaderTone() {
    markToneSections();
    updateHeaderTone();

    window.addEventListener("scroll", updateHeaderTone, { passive: true });
    window.addEventListener("resize", updateHeaderTone);

    if (window.lenis) {
      window.lenis.on("scroll", updateHeaderTone);
    }

    const headerObserver = new MutationObserver(() => {
      if (document.body.classList.contains("is-header-visible")) {
        updateHeaderTone();
      }
    });

    headerObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  }

  const langGroup = document.querySelector(".hero__lang");

  function initLang() {
    if (!langGroup) return;

    const buttons = langGroup.querySelectorAll(".hero__lang-btn");
    let switchTimer;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (!lang || langGroup.dataset.active === lang) return;

        langGroup.dataset.active = lang;

        buttons.forEach((b) => {
          const isActive = b.dataset.lang === lang;
          b.classList.toggle("hero__lang-btn--active", isActive);
          b.setAttribute("aria-pressed", String(isActive));
        });

        document.documentElement.lang = lang;

        langGroup.classList.add("is-switching");
        clearTimeout(switchTimer);
        switchTimer = setTimeout(() => {
          langGroup.classList.remove("is-switching");
        }, 550);
      });
    });
  }

  initHeaderScroll();
  initHeaderTone();
  initLang();
})();
