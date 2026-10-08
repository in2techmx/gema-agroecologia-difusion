/**
 * GEMA AGROECOLOGÍA — INTERACTIVIDAD DE VANGUARDIA
 * In2techmx Standard · Spotlight Magnético · 3D Tilt · Calculadora de Impacto
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initTiltAndSpotlight();
  initZonificationSelector();
  initCropsFilter();
  initImpactCalculator();
  initScrollFab();
});

/* --- 1. Modo Dual Eco-Tech (Dark / Light) --- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  // Recuperar preferencia guardada o respetar sistema
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

/* --- 2. 3D Tilt y Foco Magnético (Técnica Rodri González & Jack) --- */
function initTiltAndSpotlight() {
  const tiles = document.querySelectorAll('.channel-tile, .pillar-card, .crop-card');

  tiles.forEach((tile) => {
    tile.addEventListener('mousemove', (e) => {
      const rect = tile.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Variables CSS para el resplandor magnético
      tile.style.setProperty('--mouse-x', `${x}px`);
      tile.style.setProperty('--mouse-y', `${y}px`);

      // Solo aplicar rotación 3D en dispositivos con puntero fino
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && tile.classList.contains('channel-tile')) {
        const deltaX = (x - rect.width / 2) / (rect.width / 2);
        const deltaY = (y - rect.height / 2) / (rect.height / 2);

        const rotX = (-(deltaY * 6)).toFixed(2);
        const rotY = (deltaX * 6).toFixed(2);

        tile.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;
      }
    });

    tile.addEventListener('mouseleave', () => {
      if (tile.classList.contains('channel-tile')) {
        tile.style.transform = '';
      }
    });
  });
}

/* --- 3. Selector Interactivo de Zonificación (10.00 HA) --- */
const ZONES_DATA = {
  'piloto': {
    title: 'Unidad Piloto Demostrativa (1.00 HA / 10,000 m²)',
    badge: 'Fase Activa de Validación',
    surface: '1.00 Hectárea (10,000 m²)',
    details: 'Alberga el Invernadero Tecnificado de 200 m² con microaspersión, camas biointensivas de suelo mejorado Luvisol (Kankab), nave de bioinsumos (Bokashi y biol), deshidratado solar y bodega de resguardo técnico.',
    tags: ['Invernadero 200 m²', 'Bokashi Activo', 'Microaspersión', 'Pozo N° 1']
  },
  'etapa-1': {
    title: 'Etapa 1: Escalamiento Habanero & Meliponas (3.00 HA)',
    badge: 'Horizonte Meses 6 a 12',
    surface: '3.00 Hectáreas (30,000 m²)',
    details: 'Área para cultivo intensivo a cielo abierto con fertirriego por goteo de Chile Habanero (Capsicum chinense DO Península de Yucatán), floricultura comestible, apiario/meliponario tradicional de abeja nativa y módulo de talleres para chefs.',
    tags: ['Habanero DO', 'Meliponario Xunan Kab', 'Flores Comestibles', 'Talleres']
  },
  'etapa-2': {
    title: 'Etapa 2: Agroforestería & Cítricos Criollos (4.50 HA)',
    badge: 'Consolidación Meses 12 a 24',
    surface: '4.50 Hectáreas (45,000 m²)',
    details: 'Diseño agroforestal estratificado con cítricos de la región (naranja agria, lima, limón mandarina) y nave agroindustrial de deshidratado solar pasivo con inocuidad de grado alimenticio.',
    tags: ['Agroforestería', 'Cítricos Criollos', 'Deshidratado Solar', 'Grado Alimenticio']
  },
  'reserva': {
    title: 'Reserva Ecológica & Amortiguamiento Biológico (1.50 HA)',
    badge: 'Conservación Vitalicia',
    surface: '1.50 Hectáreas (15,000 m²)',
    details: 'Franja de monte bajo yucateco intangible que funciona como barrera rompevientos natural, refugio para fauna silvestre y hábitat de floración silvestre para polinizadores nativos de la Reserva Cuxtal.',
    tags: ['Monte Bajo Nativo', 'Reserva Cuxtal', 'Corredor Biológico', 'Cero Intervención']
  }
};

function initZonificationSelector() {
  const zoneCards = document.querySelectorAll('.zone-item-card');
  const displayTitle = document.getElementById('zone-detail-title');
  const displayBadge = document.getElementById('zone-detail-badge');
  const displaySurface = document.getElementById('zone-detail-surface');
  const displayDesc = document.getElementById('zone-detail-desc');
  const displayTags = document.getElementById('zone-detail-tags');

  zoneCards.forEach((card) => {
    card.addEventListener('click', () => {
      const zoneId = card.getAttribute('data-zone');
      zoneCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const data = ZONES_DATA[zoneId];
      if (data && displayTitle) {
        displayTitle.textContent = data.title;
        displayBadge.textContent = data.badge;
        displaySurface.textContent = data.surface;
        displayDesc.textContent = data.details;

        if (displayTags) {
          displayTags.innerHTML = data.tags.map(tag => `<span class="crop-tag">${tag}</span>`).join('');
        }
      }
    });
  });
}

/* --- 4. Filtro del Catálogo de Cultivos --- */
function initCropsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cropCards = document.querySelectorAll('.crop-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cropCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* --- 5. Calculadora Interactiva de Huella & Proximidad --- */
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

    // Parámetros verificables:
    // Flete centro de México (Puebla/CDMX) a Mérida: ~1,350 km
    // Flete Rancho Gema (San Pedro Chimay) a Mérida: 14 km
    // Ahorro de km de transporte por entrega semanal: ~1,336 km
    const annualDeliveries = 52;
    const kmSavedAnnual = 1336 * annualDeliveries;
    
    // Emisión diésel de transporte terrestre refrigerado: ~0.165 kg CO2 por tonelada-km
    // Toneladas anuales transportadas = (weeklyKg * 52) / 1000
    const tonsAnnual = (weeklyKg * annualDeliveries) / 1000;
    const co2SavedKg = Math.round(tonsAnnual * 1336 * 0.165);

    kmSavedDisplay.textContent = `${kmSavedAnnual.toLocaleString('es-MX')} km`;
    co2SavedDisplay.textContent = `${co2SavedKg.toLocaleString('es-MX')} kg CO₂`;
    freshnessGainDisplay.textContent = `+48 a 72 Horas`;
  }

  slider.addEventListener('input', updateCalculator);
  updateCalculator();
}

/* --- 6. Botón Flotante Scroll-to-Top --- */
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
