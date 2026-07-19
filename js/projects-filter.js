(function () {
  const filters = [...document.querySelectorAll(".projects-filter")];
  const cards = [...document.querySelectorAll(".projects-card")];
  if (!filters.length || !cards.length) return;

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const category = filter.dataset.filter;

      filters.forEach((btn) => btn.classList.toggle("is-active", btn === filter));

      cards.forEach((card) => {
        const match = category === "all" || card.dataset.category === category;
        card.style.display = match ? "" : "none";
      });
    });
  });
})();
