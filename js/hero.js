(function () {
  const langGroup = document.querySelector(".hero__lang");
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
})();
