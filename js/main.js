/* =====================================================
   SCRIPT DU PORTFOLIO
   Sommaire : 1.Menu mobile 2.Navbar & progression 3.Texte tapé
              4.Apparition au scroll 5.Formulaire de contact
   ===================================================== */

/* 1. MENU MOBILE (burger) */
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
// Ferme le menu après un clic sur un lien
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open'); burger.setAttribute('aria-expanded', false);
}));

/* 2. NAVBAR : bordure au scroll, barre de progression, onglet actif */
const nav = document.getElementById('nav');
const progress = document.getElementById('progress');
const sections = document.querySelectorAll('main section[id]');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (window.scrollY / max * 100) + '%';
  // Onglet actif = dernière section dont le haut a dépassé le milieu de l'écran
  let current = sections[0].id;
  sections.forEach(s => { if (s.getBoundingClientRect().top < window.innerHeight / 2) current = s.id; });
  menu.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});

/* 3. TEXTE TAPÉ (page d'accueil) – modifie ROLES pour changer les phrases */
const ROLES = ['développeur d\'applications', 'passionné de code', 'à la recherche d\'une alternance'];
const typed = document.getElementById('typed');
let r = 0, c = 0, deleting = false;
function type() {
  const word = ROLES[r];
  typed.textContent = word.slice(0, c);
  if (!deleting && c === word.length) { deleting = true; return setTimeout(type, 1500); }
  if (deleting && c === 0) { deleting = false; r = (r + 1) % ROLES.length; }
  c += deleting ? -1 : 1;
  setTimeout(type, deleting ? 40 : 80);
}
type();

/* 4. APPARITION AU SCROLL + animation des barres de compétences */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    e.target.querySelectorAll('.bar i').forEach(b => b.style.width = b.dataset.level + '%');
    observer.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* 5. FORMULAIRE DE CONTACT : validation + envoi avec EmailJS
      Réglages (clé, service, modèle) : voir js/config.js */
emailjs.init({ publicKey: MAIL_CONFIG.publicKey });   // connexion à ton compte EmailJS

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Anti-spam : le champ caché "website" doit rester vide
  if (form.website.value) return;

  // Vérification des champs
  let ok = true;
  form.querySelectorAll('[required]').forEach(f => {
    const bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  if (!ok) { status.textContent = 'Merci de remplir correctement tous les champs.'; return; }

  status.textContent = 'Envoi en cours…';
  try {
    // Les clés (name, email, message) doivent correspondre aux {{variables}} du modèle EmailJS
    await emailjs.send(MAIL_CONFIG.serviceId, MAIL_CONFIG.templateId, {
      name:    form.nom.value.trim(),
      email:   form.email.value.trim(),
      message: form.message.value.trim()
    });
    status.textContent = 'Message envoyé, merci ! Je te réponds rapidement.';
    form.reset();
  } catch (err) {
    console.error('EmailJS :', err);               // détail de l'erreur dans la console (F12)
    status.textContent = 'Le message n\'a pas pu être envoyé. Réessaie dans un instant.';
  }
});

/* Année automatique dans le pied de page */
document.getElementById('year').textContent = new Date().getFullYear();
