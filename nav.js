(function () {
  var navHTML = `
    <nav id="main-navigation" class="navigation-wrapper">
      <div class="navigation-container">
        <a href="index.html">
          <div aria-label="BVSbyMarilyn Homepage" class="navigation-brand">
            <img src="Logo_Resized__1_.png" alt="BVSbyMarilyn Logo" style="height:48px;width:auto;display:block;" />
            <span class="navigation-brand-name section-title">BVSbyMarilyn</span>
          </div>
        </a>
        <div class="navigation-desktop-menu">
          <ul role="list" class="navigation-links">
            <li><a href="index.html#services"><div class="navigation-link"><span data-i18n="nav_services">Servicios</span></div></a></li>
            <li><a href="us-visa.html"><div class="navigation-link"><span data-i18n="nav_usvisa">Visa de EE. UU.</span></div></a></li>
            <li><a href="international.html"><div class="navigation-link"><span data-i18n="nav_international">Internacional</span></div></a></li>
            <li><a href="about.html"><div class="navigation-link"><span data-i18n="nav_about">Sobre Nosotros</span></div></a></li>
          </ul>
          <a href="index.html#contact">
            <div class="btn navigation-cta btn-primary"><span data-i18n="nav_cta">Consulta Ahora</span></div>
          </a>
          <div class="lang-toggle">
            <button class="lang-btn active" data-lang="es">ES</button>
            <span class="lang-divider">|</span>
            <button class="lang-btn" data-lang="en">EN</button>
          </div>
        </div>
        <button id="mobile-menu-open" aria-label="Open navigation menu" aria-controls="mobile-overlay" aria-expanded="false" class="navigation-mobile-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </nav>
    <div id="mobile-overlay" aria-hidden="true" class="navigation-mobile-overlay">
      <div class="navigation-overlay-header">
        <a href="index.html">
          <div class="navigation-brand">
            <img src="Logo_Resized__1_.png" alt="BVSbyMarilyn Logo" style="height:48px;width:auto;display:block;" />
            <span class="navigation-brand-name section-title">BVSbyMarilyn</span>
          </div>
        </a>
        <button id="mobile-menu-close" aria-label="Close navigation menu" class="navigation-mobile-close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
        </button>
      </div>
      <div class="navigation-overlay-content">
        <ul role="list" class="navigation-mobile-links">
          <li class="navigation-stagger-item"><a href="index.html#services"><div class="navigation-mobile-link"><span data-i18n="nav_services">Servicios</span></div></a></li>
          <li class="navigation-stagger-item"><a href="us-visa.html"><div class="navigation-mobile-link"><span data-i18n="nav_usvisa">Visa de EE. UU.</span></div></a></li>
          <li class="navigation-stagger-item"><a href="international.html"><div class="navigation-mobile-link"><span data-i18n="nav_international">Internacional</span></div></a></li>
          <li class="navigation-stagger-item"><a href="about.html"><div class="navigation-mobile-link"><span data-i18n="nav_about">Sobre Nosotros</span></div></a></li>
        </ul>
        <div class="navigation-stagger-item navigation-overlay-footer">
          <a href="index.html#contact">
            <div class="btn btn-primary btn-lg navigation-mobile-cta"><span data-i18n="nav_cta">Consulta Ahora</span></div>
          </a>
          <div class="lang-toggle lang-toggle-mobile">
            <button class="lang-btn active" data-lang="es">ES</button>
            <span class="lang-divider">|</span>
            <button class="lang-btn" data-lang="en">EN</button>
          </div>
        </div>
      </div>
    </div>
  `;

  var footerHTML = `
    <footer class="footer-wrapper">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-brand-column">
            <span class="footer-brand-name" data-i18n="footer_brand">BVSbyMarilyn</span>
            <p class="footer-description" data-i18n="footer_desc">Asesoría profesional en inmigración en República Dominicana. Brindamos guía clara, humana y confiable para tus solicitudes de visa internacional.</p>
          </div>
          <div class="footer-links-column">
            <h3 class="footer-heading" data-i18n="footer_services_heading">Servicios</h3>
            <ul class="footer-nav-list">
              <li><a href="us-visa.html" class="footer-nav-link" data-i18n="footer_link_usvisa">Asesoría de Visas Americanas</a></li>
              <li><a href="international.html" class="footer-nav-link" data-i18n="footer_link_international">Destinos Internacionales</a></li>
              <li><a href="index.html#services" class="footer-nav-link" data-i18n="footer_link_docs">Preparación de Documentos</a></li>
              <li><a href="index.html#services" class="footer-nav-link" data-i18n="footer_link_interview">Coaching de Entrevistas</a></li>
            </ul>
          </div>
          <div class="footer-contact-column">
            <h3 class="footer-heading" data-i18n="footer_contact_heading">Contáctanos</h3>
            <div class="footer-contact-info">
              <div class="footer-contact-item">
                <span class="footer-contact-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
                <span class="footer-contact-text" data-i18n="footer_address">Santo Domingo, República Dominicana</span>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></span>
                <span class="footer-contact-text" data-i18n="footer_phone">+1 (809) 906-0849</span>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
                <span class="footer-contact-text" data-i18n="footer_email">info@visaliamigratoria.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="footer-copyright" data-i18n="footer_copyright">© 2026 BVSbyMarilyn. Todos los derechos reservados.</span>
          <div class="footer-legal">
            <a href="#" class="footer-legal-link" data-i18n="footer_privacy">Política de Privacidad</a>
            <div class="footer-legal-divider"></div>
            <a href="#" class="footer-legal-link" data-i18n="footer_terms">Términos del Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  var whatsappHTML = `
    <a href="https://wa.me/18099060849" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp"
      style="position:fixed;bottom:30px;right:30px;z-index:9999;width:56px;height:56px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.25);transition:transform 0.2s,box-shadow 0.2s;"
      onmouseover="this.style.transform='scale(1.1)';this.style.boxShadow='0 6px 20px rgba(0,0,0,0.35)'"
      onmouseout="this.style.transform='scale(1)';this.style.boxShadow='0 4px 16px rgba(0,0,0,0.25)'">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  `;

  function inject() {
    var navEl = document.getElementById('nav-placeholder');
    if (navEl) navEl.innerHTML = navHTML;

    var footerEl = document.getElementById('footer-placeholder');
    if (footerEl) footerEl.innerHTML = footerHTML;

    var waEl = document.getElementById('whatsapp-placeholder');
    if (waEl) waEl.innerHTML = whatsappHTML;

    // Mobile menu
    setTimeout(function () {
      var open = document.getElementById('mobile-menu-open');
      var close = document.getElementById('mobile-menu-close');
      var overlay = document.getElementById('mobile-overlay');
      if (open && overlay) {
        open.addEventListener('click', function () {
          overlay.classList.add('is-open');
          overlay.setAttribute('aria-hidden', 'false');
          open.setAttribute('aria-expanded', 'true');
        });
      }
      if (close && overlay) {
        close.addEventListener('click', function () {
          overlay.classList.remove('is-open');
          overlay.setAttribute('aria-hidden', 'true');
          if (open) open.setAttribute('aria-expanded', 'false');
        });
      }
    }, 0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
