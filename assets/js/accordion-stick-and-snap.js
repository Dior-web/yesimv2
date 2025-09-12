
(function () {
  // Header yüksekliği kadar üst pay bırakmak için
  function getHeaderOffset () {
    const header =
      document.querySelector('.elementor-location-header') ||
      document.querySelector('.site-header') ||
      document.querySelector('header');
    let h = header ? header.offsetHeight : 1200;
    const admin = document.getElementById('wpadminbar');
    if (admin) h += admin.offsetHeight || 50;
    return h + 20; // küçük tampon
  }

  // Tüm başlıklara scroll-margin-top ver
  function applyScrollMargins () {
    const off = getHeaderOffset();
    document.querySelectorAll('.elementor-tab-title').forEach(el => {
      el.style.scrollMarginTop = off + 'px';
    });
  }
  applyScrollMargins();
  window.addEventListener('resize', applyScrollMargins);

  // Başlığı header altına hizala (aç/kapat işlemi bittiğinde)
  function snapToTop(title) {
    if (!title) return;
    requestAnimationFrame(() => {          // toggle sınıfları uygulansın
      requestAnimationFrame(() => {        // layout otursun
        title.scrollIntoView({ block: 'start', behavior: 'smooth' });
      });
    });
  }

  // 1) Başlık içindeki <a href="#..."> tıklandıysa: default’u durdur, aç ve hizala
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a.elementor-toggle-title[href^="#"]');
    if (!a) return;

    e.preventDefault();                     // tarayıcının kendi “ortaya” kaydırmasını engelle
    const title = a.closest('.elementor-tab-title');

    // kapalıysa aç (Elementor’un kendi click’i çalışsın)
    if (title && !title.classList.contains('elementor-active')) title.click();

    // hash’i güncelle ve hizala
    history.replaceState(null, '', a.getAttribute('href'));
    snapToTop(title);
  });

  // 2) Başlık barına (DIV) tıklanınca da hizala
  document.addEventListener('click', function (e) {
    const title = e.target.closest('.elementor-tab-title');
    if (!title) return;
    snapToTop(title);
  });

  // 3) Sayfaya hash ile gelindiyse (ör. /alerji/#et-alerjisi) otomatik aç ve hizala
  function openFromHash() {
    const el = document.querySelector(location.hash);
    if (!el) return;
    const title = el.classList?.contains('elementor-tab-title') ? el : el.closest('.elementor-tab-title');
    if (!title) return;

    if (!title.classList.contains('elementor-active')) title.click();
    snapToTop(title);
  }
  document.addEventListener('DOMContentLoaded', openFromHash);
  window.addEventListener('hashchange', openFromHash);
})();

