// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('show');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href');
    if (targetId && targetId.length > 1) {
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Demo modal controls
const modal = document.getElementById('demo-modal');
const openDemoBtn = document.querySelector('[data-open-demo]');
const closeModalBtn = document.querySelector('[data-close-modal]');
if (modal && openDemoBtn) {
  openDemoBtn.addEventListener('click', () => modal.showModal());
}
if (modal && closeModalBtn) {
  closeModalBtn.addEventListener('click', () => modal.close());
}
if (modal) {
  modal.addEventListener('click', (e) => {
    const dialogRect = modal.getBoundingClientRect();
    if (
      e.clientX < dialogRect.left ||
      e.clientX > dialogRect.right ||
      e.clientY < dialogRect.top ||
      e.clientY > dialogRect.bottom
    ) {
      modal.close();
    }
  });
}

// Form handling (client-side only; integrate with your backend or Formspree/Netlify)
function handleForm(form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput) return;
    const email = emailInput.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput.setCustomValidity('Please enter a valid email');
      emailInput.reportValidity();
      return;
    }
    emailInput.setCustomValidity('');

    // Simulate async submit
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn?.textContent || '';
    if (btn) btn.textContent = 'Submitting…';
    await new Promise(r => setTimeout(r, 700));
    if (btn) btn.textContent = originalText || 'Submitted';

    // Optimistic success UI
    form.innerHTML = '<div class="success">Thanks! You\'re on the list. We\'ll reach out soon.</div>';
  });
}

document.querySelectorAll('form.cta-form').forEach(handleForm);

// Basic tab toggle between previews (static demo behavior)
document.querySelectorAll('.tabs .tab').forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const parent = tab.closest('.mock-right');
    if (!parent) return;
    parent.querySelectorAll('.preview').forEach((p, pIdx) => {
      p.style.display = idx === pIdx ? 'block' : 'none';
    });
  });
});


