document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth'});
        // close mobile nav if open
        document.getElementById('mainNav')?.classList.remove('open');
      }
    });
  });

  // Mobile nav toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  menuToggle?.addEventListener('click', () => mainNav.classList.toggle('open'));

  // Recommendation form handling
  const form = document.getElementById('recommendation-form');
  const input = document.getElementById('new-recommendation');
  const list = document.getElementById('recommendation-list');
  const popup = document.getElementById('popup');
  const popupClose = document.getElementById('popupClose');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    const li = document.createElement('li');
    li.textContent = value;
    list.appendChild(li);
    input.value = '';
    // show popup
    popup.setAttribute('aria-hidden','false');
    // auto hide after 5s
    setTimeout(() => popup.setAttribute('aria-hidden','true'), 5000);
  });
  popupClose?.addEventListener('click', () => popup.setAttribute('aria-hidden','true'));

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) scrollBtn.style.display = 'flex'; else scrollBtn.style.display = 'none';
  });
  scrollBtn?.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

  // Project modal wiring
  document.querySelectorAll('.project button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.project');
      const title = card.querySelector('h3')?.textContent || 'Project';
      const desc = card.querySelector('p')?.textContent || '';
      const modal = document.getElementById('projectModal');
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDesc').textContent = desc;
      modal.setAttribute('aria-hidden','false');
    });
  });
  document.getElementById('modalClose')?.addEventListener('click', () => document.getElementById('projectModal').setAttribute('aria-hidden','true'));
  // close modal on click outside
  document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) e.currentTarget.setAttribute('aria-hidden','true');
  });
});
