// ── Theme ──
const root = document.documentElement;
const btn  = document.getElementById('themeToggle');
const icon = btn.querySelector('.theme-icon');

const saved = localStorage.getItem('theme') || 'dark';
applyTheme(saved);

btn.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

function applyTheme(t) {
  root.dataset.theme = t;
  icon.textContent = t === 'light' ? '🌙' : '☀️';
}

// ── Nav shadow on scroll ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Typed text ──
const roles = [
  'Java Backend Developer',
  'Spring Boot · Kafka · K8s',
  'Microservices Architect',
  'Telegram Bot Builder',
];
let ri = 0, ci = 0, deleting = false;
const el = document.getElementById('typed');

function type() {
  const word = roles[ri];
  if (!deleting) {
    el.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 45 : 80);
}
setTimeout(type, 900);

// ── Scroll reveal ──
const reveals = document.querySelectorAll(
  '.section-title, .about-grid, .stack-group, .timeline-item, .project-card, .contact-card, .stat-card'
);
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ── Smooth active nav link ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const linkObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => linkObserver.observe(s));
