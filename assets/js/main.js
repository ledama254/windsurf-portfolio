// Theme Toggle
(function() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');
  toggle && toggle.addEventListener('click', () => {
    root.classList.toggle('light');
    const mode = root.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
    toggle.textContent = mode === 'light' ? '🌞' : '🌙';
  });
  // set initial icon
  const mode = root.classList.contains('light') ? 'light' : 'dark';
  if (toggle) toggle.textContent = mode === 'light' ? '🌞' : '🌙';
})();

// Mobile Nav Toggle
(function() {
  const btn = document.querySelector('.nav__toggle');
  const list = document.getElementById('primary-menu');
  if (!btn || !list) return;
  btn.addEventListener('click', () => {
    const show = list.classList.toggle('show');
    btn.setAttribute('aria-expanded', String(show));
  });
  list.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    list.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
  }));
})();

// Active section highlighting (Scroll Spy)
(function() {
  const links = Array.from(document.querySelectorAll('.nav__list a'));
  const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  if (sections.length === 0) return;

  const onScroll = () => {
    const y = window.scrollY + 120;
    let active = sections[0];
    for (const sec of sections) {
      if (sec.offsetTop <= y) active = sec;
    }
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + active.id));
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Back to top button
(function() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  const onScroll = () => {
    if (window.scrollY > 500) btn.classList.add('show'); else btn.classList.remove('show');
  };
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Footer year
(function() {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();

// Load projects from JSON
(async function() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  try {
    const res = await fetch('assets/data/projects.json');
    const projects = await res.json();
    const frag = document.createDocumentFragment();
    projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class="card__media" role="img" aria-label="${p.title} preview"></div>
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__desc">${p.description}</p>
          <div class="card__tags">${(p.tags||[]).map(t=>`<span class='card__tag'>${t}</span>`).join('')}</div>
        </div>
        <div class="card__actions">
          ${p.demo ? `<a class="btn btn--primary" href="${p.demo}" target="_blank" rel="noopener">Live</a>` : ''}
          ${p.repo ? `<a class="btn btn--ghost" href="${p.repo}" target="_blank" rel="noopener">Code</a>` : ''}
        </div>
      `;
      frag.appendChild(card);
    });
    grid.appendChild(frag);
  } catch (e) {
    console.error('Failed to load projects.json', e);
    grid.innerHTML = '<p class="muted">Projects failed to load. Check console.</p>';
  }
})();
