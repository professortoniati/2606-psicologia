/* ===========================
   script.js – Interatividade
   =========================== */

// ── Navbar scroll ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Hamburger menu ─────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});
// Fechar ao clicar em link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Intersection Observer – animações ──────────────────
const animateEls = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.style.getPropertyValue('--delay') || '0s';
        const ms = parseFloat(delay) * 1000;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, ms);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
animateEls.forEach(el => observer.observe(el));

// ── Formulário de contato ───────────────────────────────
const form     = document.getElementById('contato-form');
const feedback = document.getElementById('form-feedback');
const btnEnviar = document.getElementById('btn-enviar');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  feedback.textContent = '';
  feedback.className = 'form-feedback';

  const nome     = document.getElementById('nome');
  const email    = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');
  let valid = true;

  // Reset errors
  [nome, email, mensagem].forEach(el => el.classList.remove('error'));

  if (!nome.value.trim() || nome.value.trim().length < 2) {
    nome.classList.add('error');
    valid = false;
  }
  if (!validateEmail(email.value)) {
    email.classList.add('error');
    valid = false;
  }
  if (!mensagem.value.trim() || mensagem.value.trim().length < 10) {
    mensagem.classList.add('error');
    valid = false;
  }

  if (!valid) {
    feedback.textContent = 'Por favor, preencha os campos obrigatórios corretamente.';
    feedback.classList.add('error');
    return;
  }

  // Simula envio
  btnEnviar.disabled = true;
  btnEnviar.textContent = 'Enviando…';

  await new Promise(resolve => setTimeout(resolve, 1500));

  // Constrói mensagem para WhatsApp
  const tipo = document.getElementById('tipo').value;
  const tel  = document.getElementById('telefone').value;
  const tipoLabels = {
    individual:   'Psicoterapia Individual',
    casal:        'Terapia de Casal',
    familiar:     'Terapia Familiar',
    adolescente:  'Atendimento a Adolescentes',
    burnout:      'Burnout / Estresse',
    luto:         'Luto e Perdas',
  };
  const tipoTexto = tipoLabels[tipo] || 'Não informado';
  const waMsg = encodeURIComponent(
    `Olá, Dra. Ana Beatriz!\n\n*Nome:* ${nome.value.trim()}\n*E-mail:* ${email.value.trim()}\n*Telefone:* ${tel || 'Não informado'}\n*Atendimento:* ${tipoTexto}\n\n*Mensagem:*\n${mensagem.value.trim()}`
  );

  feedback.innerHTML = `✅ Mensagem recebida! Redirecionando para o WhatsApp…`;
  feedback.classList.add('success');

  setTimeout(() => {
    window.open(`https://wa.me/5511999999999?text=${waMsg}`, '_blank');
    form.reset();
    btnEnviar.disabled = false;
    btnEnviar.textContent = 'Enviar Mensagem';
    setTimeout(() => { feedback.textContent = ''; feedback.className = 'form-feedback'; }, 4000);
  }, 1200);
});

// ── Smooth scroll ativo nos links nav ──────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 20;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Cursor glow sutil no hero ──────────────────────────
const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty('--mx', `${x}%`);
    hero.style.setProperty('--my', `${y}%`);
  });
}

// ── Contador de estatísticas animado ──────────────────
function animateCounter(el, target, suffix = '') {
  const duration = 1500;
  const start = performance.now();
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(el => {
        const text = el.textContent.trim();
        const match = text.match(/^(\d+)([+]?)$/);
        if (match) {
          animateCounter(el, parseInt(match[1]), match[2]);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);
