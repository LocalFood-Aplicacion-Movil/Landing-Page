document.addEventListener("DOMContentLoaded", () => {
  // ===== Existing small-page helpers =====
  const forgotLink = document.getElementById("forgot-link");
  if (forgotLink) {
    forgotLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "forgot-password.html";
    });
  }

  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      window.location.href = "reset-password.html";
    });
  }

  const saveBtn = document.getElementById("save-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      alert("¡Contraseña restablecida con éxito!");
      window.location.href = "login.html";
    });
  }

  // ===== Hamburger / Mobile menu =====
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      openMobileMenu();
    });
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', () => {
      closeMobileMenu();
    });
  }
  // Close when clicking any link inside mobile menu
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMobileMenu()));

  // ===== Simple i18n system =====
  const translations = {
    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Acerca de Nosotros',
      'nav.brands': 'Marcas Registradas',
      'nav.countries': 'Países Hábiles',
      'action.login': 'Iniciar sesión',
      'action.register': 'Registrarse',
      'hero.title': 'Ubicación de Restaurantes por Grupo de Personas',
      'hero.subtitle': 'Iníciate ahora <br><strong>Let’s Go!!!</strong>',
      'about.title': 'Acerca de Nosotros',
      'about.text': 'En una ciudad como Lima, donde el tráfico es uno de los principales problemas diarios, LocalFood surge para facilitar encuentros sociales y profesionales. Utilizamos geolocalización inteligente para encontrar el restaurante óptimo donde reunirse, reduciendo tiempos de traslado y mejorando la experiencia de los usuarios.',
      'brands.title': 'Marcas Registradas',
      'countries.title': 'Países Hábiles',
      'countries.text': 'Actualmente LocalFood está disponible en <strong>Perú</strong>, con miras a expandirse a toda Latinoamérica en los próximos años.',
      'footer.copy': '© 2025 LocalFood. Todos los derechos reservados.'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.brands': 'Brands',
      'nav.countries': 'Available Countries',
      'action.login': 'Sign in',
      'action.register': 'Register',
      'hero.title': 'Restaurant location by group of people',
      'hero.subtitle': 'Get started now <br><strong>Let’s Go!!!</strong>',
      'about.title': 'About Us',
      'about.text': 'In a city like Lima, where traffic is one of the main daily problems, LocalFood helps to facilitate social and professional meetings. We use smart geolocation to find the optimal restaurant to meet, reducing travel times and improving the user experience.',
      'brands.title': 'Registered Brands',
      'countries.title': 'Available Countries',
      'countries.text': 'LocalFood is currently available in <strong>Peru</strong>, with plans to expand throughout Latin America in the coming years.',
      'footer.copy': '© 2025 LocalFood. All rights reserved.'
    }
  };

  const langToggle = document.getElementById('lang-toggle');
  let lang = localStorage.getItem('lang') || 'es';

  function setLanguage(l) {
    lang = l;
    localStorage.setItem('lang', l);
    document.documentElement.lang = (l === 'en') ? 'en' : 'es';
    // Update button label: ES for Spanish, US for English (as requested)
    if (langToggle) langToggle.textContent = (l === 'en') ? 'US' : 'ES';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = translations[l] && translations[l][key];
      if (!value) return;
      // If translation contains HTML tags, set innerHTML, otherwise textContent
      if (value.indexOf('<') !== -1) el.innerHTML = value; else el.textContent = value;
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const next = (lang === 'es') ? 'en' : 'es';
      setLanguage(next);
    });
  }

  // Initialize language on load
  setLanguage(lang);

});
