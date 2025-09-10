// assets/js/toggle-accordion.js
(() => {
  function initAccordion() {
    const items = document.querySelectorAll(".elementor-toggle-item");
    if (!items.length) return; // Bu sayfada akordeon yoksa çık

    // Başlangıçta hepsini kapat
    items.forEach((item) => {
      const title = item.querySelector(".elementor-tab-title");
      const contentId = title && title.getAttribute("aria-controls");
      const content = contentId ? document.getElementById(contentId) : null;
      if (!title || !content) return;

      title.setAttribute("aria-expanded", "false");
      content.style.display = "none";

      // Tıklama
      item.addEventListener("click", (e) => {
        const t = e.target.closest(".elementor-tab-title");
        if (!t || !item.contains(t)) return;

        const container =
          item.closest(".elementor-toggle") || item.parentElement;

        // Aynı gruptaki diğerlerini kapat
        container
          .querySelectorAll(".elementor-tab-title.elementor-active")
          .forEach((tt) => {
            if (tt !== t) {
              tt.classList.remove("elementor-active");
              tt.setAttribute("aria-expanded", "false");
              const cc = document.getElementById(
                tt.getAttribute("aria-controls")
              );
              if (cc) cc.style.display = "none";
            }
          });

        // Seçileni aç/kapat
        const c = document.getElementById(t.getAttribute("aria-controls"));
        const willOpen = !t.classList.contains("elementor-active");
        t.classList.toggle("elementor-active", willOpen);
        t.setAttribute("aria-expanded", willOpen ? "true" : "false");
        if (c) c.style.display = willOpen ? "block" : "none";
      });

      // Klavye ile (Enter/Space) destekle
      item.addEventListener("keydown", (e) => {
        if (
          (e.key === "Enter" || e.key === " ") &&
          e.target.closest(".elementor-tab-title")
        ) {
          e.preventDefault();
          e.target.closest(".elementor-tab-title").click();
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAccordion);
  } else {
    initAccordion();
  }
})();
