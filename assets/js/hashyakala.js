
(function () {
  function openToggleByHash() {
    var hash = window.location.hash;
    if (!hash) return;

    var anchor = document.querySelector(hash);
    if (!anchor) return;

    var title = anchor.classList && anchor.classList.contains('elementor-tab-title')
      ? anchor
      : anchor.closest('.elementor-tab-title') || anchor.querySelector('.elementor-tab-title');

    if (!title) {
      var container = anchor.closest('.elementor-toggle-item') || anchor.nextElementSibling;
      if (container) title = container.querySelector('.elementor-tab-title');
    }
    if (!title) return;

    var wrap = title.closest('.elementor-toggle, .elementor-accordion') || document;
    wrap.querySelectorAll('.elementor-tab-title.elementor-active').forEach(function (t) {
      if (t !== title) {
        t.classList.remove('elementor-active');
        t.setAttribute('aria-expanded', 'false');
        var cid = t.getAttribute('aria-controls');
        var cc = cid ? document.getElementById(cid) : t.nextElementSibling;
        if (cc) { cc.style.display = 'none'; cc.setAttribute && cc.setAttribute('aria-hidden', 'true'); }
      }
    });

    title.classList.add('elementor-active');
    title.setAttribute('aria-expanded', 'true');

    var contentId = title.getAttribute('aria-controls');
    var content = contentId ? document.getElementById(contentId) : title.nextElementSibling;
    if (content) {
      content.style.display = 'block';
      content.setAttribute && content.setAttribute('aria-hidden', 'false');

      // --- OFFSET'LI KAYDIRMA ---
      // Elementor header'ı veya sabit header yüksekliği
      var headerEl =
        document.querySelector('.elementor-location-header') ||
        document.querySelector('.site-header, header') ||
        null;
      var HEADER_OFFSET = headerEl ? headerEl.offsetHeight : 120; // fallback

      // Elementor animasyonu/ölçüleri tam otursun diye küçük gecikme
      setTimeout(function () {
        var y = title.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET - 8;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 50);
    }
  }

  document.addEventListener('DOMContentLoaded', openToggleByHash);
  window.addEventListener('hashchange', openToggleByHash);
})();

