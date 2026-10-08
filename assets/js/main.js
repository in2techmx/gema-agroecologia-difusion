/**
 * GEMA AGROECOLOGÍA — SCROLLYTELLING & EXPERIENCIA EDITORIAL
 * In2techmx Craft Standard · Animaciones fluidas, IntersectionObserver y Telemetría
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScrollytellingActs();
  initTiltAndSpotlight();
  initHorizontalTrackControls();
  initTerritorySelector();
  initCropsFilter();
  initImpactCalculator();
  initScrollFab();
});

const initZonificationSelector = initTerritorySelector;

function initTiltAndSpotlight() {
  const elements = document.querySelectorAll('.channel-narrative-card, .node-story-panel, .botanic-item-card');
  elements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}

/* --- 1. MODO DUAL ECO-TECH (DARK / LIGHT) --- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  const savedTheme = localStorage.getItem('gema_theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('gema_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

/* --- 2. SCROLLYTELLING: ACTOS DE SUELO VIVO & PINNING VISUAL --- */
const ACT_VISUALS = {
  'act-1': {
    src: 'assets/img/gema_living_soil.jpg',
    title: 'Horizontes de Luvisol Crómico (Kankab)',
    meta: 'Suelo vivo no laboreado &middot; Red fúngica micorrízica intacta'
  },
  'act-2': {
    src: 'assets/img/gema_greenhouse.jpg',
    title: 'Biofábrica & Manejo de Brotes en Raíz Viva',
    meta: 'Bokashi fermentado a 58°C &middot; Microaspersión bioclimática'
  },
  'act-3': {
    src: 'assets/img/meliponario_chimay.jpg',
    title: 'Santuario Biocultural Melipona beecheii',
    meta: 'Jobones ancestrales mayas &middot; Biosensor de inocuidad total'
  }
};

function initScrollytellingActs() {
  const acts = document.querySelectorAll('.scrolly-story-act');
  const stickyImg = document.getElementById('sticky-visual-img');
  const captionTitle = document.getElementById('sticky-caption-title');
  const captionMeta = document.getElementById('sticky-caption-meta');

  if (!acts.length || !stickyImg) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        acts.forEach(a => a.classList.remove('active'));
        entry.target.classList.add('active');

        const actId = entry.target.getAttribute('data-act');
        const visualData = ACT_VISUALS[actId];
        if (visualData) {
          stickyImg.style.opacity = '0.3';
          stickyImg.style.transform = 'scale(1.04)';
          setTimeout(() => {
            stickyImg.src = visualData.src;
            captionTitle.textContent = visualData.title;
            captionMeta.innerHTML = visualData.meta;
            stickyImg.style.opacity = '1';
            stickyImg.style.transform = 'scale(1)';
          }, 200);
        }
      }
    });
  }, {
    threshold: 0.55
  });

  acts.forEach(act => observer.observe(act));
}

/* --- 3. EXPEDICIÓN GLOBAL: CONTROL HORIZONTAL --- */
function initHorizontalTrackControls() {
  const track = document.getElementById('global-nodes-track');
  const prevBtn = document.getElementById('nodes-prev-btn');
  const nextBtn = document.getElementById('nodes-next-btn');

  if (!track) return;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -420, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 420, behavior: 'smooth' });
    });
  }
}

/* --- 4. SELECTOR INTERACTIVO DE TERRITORIO (10.00 HA) --- */
const TERRITORY_STAGES = {
  'piloto': {
    title: 'Unidad Piloto & Living Lab (1.00 HA / 10,000 m²)',
    badge: 'Validación Activa',
    desc: 'Invernadero bioclimático de 200 m² para brotes vivos los 365 días, camas biointensivas en suelo mejorado Kankab, biofábrica de Bokashi térmico y secado solar pasivo.',
    tags: ['Invernadero 200 m²', 'Bokashi Activo', 'Microaspersión', 'Pozo N° 1']
  },
  'etapa-1': {
    title: 'Etapa 1: Habanero DO & Meliponas (3.00 HA)',
    badge: 'Escalamiento Meses 6-12',
    desc: 'Cultivo con fertirriego por microgoteo de Chile Habanero criollo con Denominación de Origen Península de Yucatán, bancales de flores comestibles y meliponario tradicional.',
    tags: ['Habanero DO', 'Meliponario Xunan Kab', 'Floricultura Comestible', 'Escuela Viva']
  },
  'etapa-2': {
    title: 'Etapa 2: Agroforestería & Cítricos (4.50 HA)',
    badge: 'Consolidación Meses 12-24',
    desc: 'Diseño estratificado con cítricos criollos de Yucatán y nave de transformación agroindustrial con deshidratado solar pasivo en acero inoxidable AISI 304.',
    tags: ['Agroforestería', 'Cítricos Criollos', 'Deshidratado Solar', 'Inocuidad Grado 304']
  },
  'reserva': {
    title: 'Reserva Ecológica & Amortiguamiento (1.50 HA)',
    badge: 'Conservación Vitalicia',
    desc: 'Franja intangible de monte bajo yucateco que actúa como barrera biológica contra vientos, refugio de fauna silvestre y corredor de pecoreo de la abeja melipona.',
    tags: ['Monte Bajo Nativo', 'Reserva Cuxtal', 'Corredor Biológico', 'Cero Intervención']
  }
};

function initTerritorySelector() {
  const stageCards = document.querySelectorAll('.territory-stage-card');
  const displayTitle = document.getElementById('territory-detail-title');
  const displayBadge = document.getElementById('territory-detail-badge');
  const displayDesc = document.getElementById('territory-detail-desc');
  const displayTags = document.getElementById('territory-detail-tags');

  stageCards.forEach(card => {
    card.addEventListener('click', () => {
      stageCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const stageKey = card.getAttribute('data-stage');
      const data = TERRITORY_STAGES[stageKey];
      if (data && displayTitle) {
        displayTitle.textContent = data.title;
        displayBadge.textContent = data.badge;
        displayDesc.textContent = data.desc;
        if (displayTags) {
          displayTags.innerHTML = data.tags.map(t => `<span class="botanic-tag-item">${t}</span>`).join('');
        }
      }
    });
  });
}

/* --- 5. FILTRO DEL CATÁLOGO BOTÁNICO --- */
function initCropsFilter() {
  const filterBtns = document.querySelectorAll('.filter-pill-btn');
  const items = document.querySelectorAll('.botanic-item-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      items.forEach(card => {
        const itemCat = card.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* --- 6. CALCULADORA DE IMPACTO Y PROXIMIDAD --- */
function initImpactCalculator() {
  const slider = document.getElementById('produce-volume-slider');
  const volumeDisplay = document.getElementById('volume-display');
  const kmSavedDisplay = document.getElementById('km-saved-display');
  const co2SavedDisplay = document.getElementById('co2-saved-display');
  const freshnessGainDisplay = document.getElementById('freshness-gain-display');

  if (!slider) return;

  function updateCalculator() {
    const weeklyKg = parseInt(slider.value, 10);
    volumeDisplay.textContent = `${weeklyKg} kg / semana`;

    const annualDeliveries = 52;
    const kmSavedAnnual = 1336 * annualDeliveries;
    const tonsAnnual = (weeklyKg * annualDeliveries) / 1000;
    const co2SavedKg = Math.round(tonsAnnual * 1336 * 0.165);

    kmSavedDisplay.textContent = `${kmSavedAnnual.toLocaleString('es-MX')} km`;
    co2SavedDisplay.textContent = `${co2SavedKg.toLocaleString('es-MX')} kg CO₂`;
    freshnessGainDisplay.textContent = `+48 a 72 Horas`;
  }

  slider.addEventListener('input', updateCalculator);
  updateCalculator();
}

/* --- 7. BOTÓN FLOTANTE SCROLL TOP --- */
function initScrollFab() {
  const fab = document.getElementById('fab-scroll-top');
  if (!fab) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      fab.classList.add('visible');
    } else {
      fab.classList.remove('visible');
    }
  });

  fab.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
