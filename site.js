const MOBILE_BREAKPOINT = 860;
const navToggle = document.querySelector('[data-mobile-toggle]');
const navMenu = document.querySelector('[data-mobile-menu]');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (navMenu) {
      navMenu.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

document.querySelectorAll('[data-faq-item]').forEach((item) => {
  const button = item.querySelector('[data-faq-button]');
  const answer = item.querySelector('[data-faq-answer]');
  if (!button || !answer) return;
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    answer.hidden = expanded;
    const symbol = button.querySelector('[data-faq-symbol]');
    if (symbol) symbol.textContent = expanded ? '+' : '–';
  });
});

document.querySelectorAll('[data-footer-group]').forEach((group) => {
  const title = group.querySelector('[data-footer-toggle]');
  if (!title || window.innerWidth > MOBILE_BREAKPOINT) return;
  group.dataset.collapsible = 'true';
  title.addEventListener('click', () => {
    group.classList.toggle('is-open');
  });
});

const footerTitle = document.querySelector('[data-footer-title]');
if (footerTitle) footerTitle.textContent = document.title;

const yearNode = document.querySelector('[data-year]');
if (yearNode) yearNode.textContent = new Date().getFullYear();
