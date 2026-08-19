/**
 * Sticky Navigation & Scrollspy Module
 */
export function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.navbar__link');
  const sections = document.querySelectorAll('section[id]');

  // Sticky Scroll Behavior
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('navbar--scrolled');
    } else {
      navbar?.classList.remove('navbar--scrolled');
    }
  });

  // Mobile Menu Drawer Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('navbar__menu--open');
      const isOpen = navMenu.classList.contains('navbar__menu--open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('navbar__menu--open');
        mobileToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // IntersectionObserver for Scrollspy Active Nav Highlight
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${activeId}`) {
            link.classList.add('navbar__link--active');
          } else {
            link.classList.remove('navbar__link--active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}
