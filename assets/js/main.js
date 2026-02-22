/* ===== NAVIGATION TOGGLE ===== */
(function () {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  const body   = document.body;

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('show');
      toggle.classList.toggle('active', open);
      body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open);
    });

    toggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle.click(); }
    });
  }

  /* Close menu on nav link click */
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menu && menu.classList.remove('show');
      toggle && toggle.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });
})();

/* ===== STICKY HEADER SHADOW ===== */
(function () {
  const header = document.querySelector('.l-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scroll-header', window.scrollY >= 60);
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
(function () {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const activate = () => {
    const y = window.scrollY + 80;
    sections.forEach(s => {
      const link = document.querySelector(`.nav__menu a[href*="${s.id}"]`);
      if (!link) return;
      const top = s.offsetTop;
      const bottom = top + s.offsetHeight;
      link.classList.toggle('active-link', y >= top && y < bottom);
    });
  };

  window.addEventListener('scroll', activate, { passive: true });
})();

/* ===== SCROLL REVEAL (Intersection Observer) ===== */
(function () {
  const sel = '.fade-in, .reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade-in, .info-card, .skill__item';
  const els = document.querySelectorAll(sel);
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible', 'active');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ===== CIRCULAR PROGRESS ANIMATION ===== */
(function () {
  const rings = document.querySelectorAll('.progress-ring__progress');
  if (!rings.length) return;

  const animateRing = (ring) => {
    const percent = parseInt(ring.dataset.percent || 0, 10);
    const r = ring.r.baseVal.value;
    const circ = 2 * Math.PI * r;
    ring.style.strokeDasharray = `${circ} ${circ}`;
    ring.style.strokeDashoffset = circ;

    const textEl = ring.closest('svg') ? ring.closest('svg').querySelector('.progress-text') : null;
    let current = 0;
    const step = percent / 60;

    const tick = () => {
      current = Math.min(current + step, percent);
      ring.style.strokeDashoffset = circ - (current / 100) * circ;
      if (textEl) textEl.textContent = Math.round(current) + '%';
      if (current < percent) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const section = document.querySelector('#skills');
  if (section) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          section.querySelectorAll('.progress-ring__progress').forEach(animateRing);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.25 });
    obs.observe(section);
  }
})();

/* ===== SCROLL-TO-TOP BUTTON ===== */
(function () {
  let btn = document.querySelector('.scroll-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.className = 'scroll-top';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(btn);
  }
  const onScroll = () => btn.classList.toggle('visible', window.scrollY > 400);
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ===== FILTER FUNCTIONALITY (projects/blog) ===== */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card[data-category], .blog-card[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const cat = card.dataset.category || '';
        const show = filter === 'all' || cat.includes(filter);
        card.style.display = show ? '' : 'none';
        if (show) {
          card.classList.remove('fade-in');
          void card.offsetWidth; // reflow
          card.classList.add('fade-in', 'visible');
        }
      });
    });
  });
})();
