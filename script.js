document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  const cards = [...document.querySelectorAll(".archive-card")];
  const filterButtons = [...document.querySelectorAll(".filter-btn")];
  const searchInput = document.getElementById("archiveSearch");
  const noResults = document.getElementById("noResults");
  let activeFilter = "all";

  function updateArchive() {
    const term = (searchInput?.value || "").trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
      const searchable = `${card.dataset.search || ""} ${card.innerText}`.toLowerCase();
      const searchMatch = !term || searchable.includes(term);
      const show = categoryMatch && searchMatch;
      card.hidden = !show;
      if (show) visible++;
    });
    if (noResults) noResults.hidden = visible !== 0;
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";
      filterButtons.forEach(item => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      updateArchive();
    });
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
  });

  searchInput?.addEventListener("input", updateArchive);

  // Give in-page navigation a smooth, predictable focus target.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        if (target.matches("section, main")) target.setAttribute("tabindex", "-1");
      }
    });
  });
});
