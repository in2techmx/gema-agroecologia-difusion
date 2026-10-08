/**
 * SUITE DE PRUEBAS AUTOMATIZADAS DETERMINISTAS (GATE 1)
 * Proyecto: Gema Agroecología - Página de Difusión
 * ID: PROJ-GEMA-DIFUSION-V1
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;

function test(description, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✅ [PASS] ${description}`);
  } catch (err) {
    console.error(`  ❌ [FAIL] ${description}`);
    console.error(`     Error: ${err.message}`);
    process.exitCode = 1;
  }
}

console.log('\n======================================================');
console.log('🧪 EJECUCIÓN GATE 1: PRUEBAS AUTOMATIZADAS DETERMINISTAS');
console.log('   Proyecto: Gema Agroecología (San Pedro Chimay, Yucatán)');
console.log('======================================================\n');

// 1. Verificación de archivos estructurales críticos
test('Archivos estructurales y assets presentes', () => {
  const requiredFiles = [
    'index.html',
    'assets/css/tokens.css',
    'assets/css/style.css',
    'assets/js/main.js',
    'data/project_manifest.json',
    'docs/SPEC.md',
    'docs/USER_STORIES.md',
    'assets/img/rancho_gema_map.jpg',
    'assets/img/san_pedro_chimay_yucatan.jpg',
    'assets/img/meliponario_chimay.jpg',
    'assets/img/organic_hero.jpg',
    'assets/img/organic_market.jpg',
    'assets/img/bodas_hacienda_chimay.jpg',
    'assets/img/chile_habanero_yucatan.jpg'
  ];

  requiredFiles.forEach(file => {
    const fullPath = path.join(ROOT_DIR, file);
    assert.ok(fs.existsSync(fullPath), `El archivo requerido no existe: ${file}`);
    const stat = fs.statSync(fullPath);
    assert.ok(stat.size > 0, `El archivo está vacío: ${file}`);
  });
});

// 2. Integridad del manifiesto de datos JSON
test('Consistencia matemática y canónica del project_manifest.json', () => {
  const manifestPath = path.join(ROOT_DIR, 'data/project_manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  assert.strictEqual(manifest.project_id, 'PROJ-GEMA-DIFUSION-V1');
  assert.strictEqual(manifest.location.estate, 'Rancho Gema');
  assert.strictEqual(manifest.location.subcomisaria, 'San Pedro Chimay');
  assert.strictEqual(manifest.location.coordinates.formatted, '20.8750° N, -89.5600° W');
  assert.strictEqual(manifest.location.logistics.distance_merida_periferico_km, 14);

  // Verificación de suma de hectáreas
  const totalHa = manifest.land_zonification.total_polygon_ha;
  const sumZonesHa = manifest.land_zonification.zones.reduce((acc, z) => acc + z.area_ha, 0);
  assert.strictEqual(sumZonesHa, totalHa, `La suma de zonas (${sumZonesHa} HA) no coincide con el polígono total (${totalHa} HA)`);
  assert.strictEqual(totalHa, 10.0, 'El polígono de Rancho Gema debe ser exactamente de 10.00 HA');

  // Verificación de los 7 canales
  assert.strictEqual(manifest.strategic_channels.length, 7, 'Deben existir exactamente 7 canales comerciales');

  // Verificación del equipo
  assert.strictEqual(manifest.governance.length, 3, 'Deben registrarse los 3 líderes de gobernanza');
});

// 3. Verificación de HTML y atributos esenciales
test('Atributos semánticos, SEO, accesibilidad y modo dual en index.html', () => {
  const htmlPath = path.join(ROOT_DIR, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Meta y SEO
  assert.ok(html.includes('<title>Gema Agroecología'), 'Falta título representativo');
  assert.ok(html.includes('meta name="description"'), 'Falta meta description');
  assert.ok(html.includes('data-theme='), 'Falta atributo data-theme para el modo dual');
  assert.ok(html.includes('theme-toggle-btn'), 'Falta botón de conmutación de tema');

  // Datos verificables y cifras reales
  assert.ok(html.includes('10.00 HA'), 'Falta indicador de 10.00 HA');
  assert.ok(html.includes('1.00 HA'), 'Falta indicador de 1.00 HA piloto');
  assert.ok(html.includes('200 m²'), 'Falta indicador de invernadero tecnificado de 200 m²');
  assert.ok(html.includes('14 km'), 'Falta indicador de distancia logística de 14 km');
  assert.ok(html.includes('20.8750° N, -89.5600° W'), 'Faltan coordenadas geográficas oficiales');
  assert.ok(html.includes('Kankab'), 'Falta mención al suelo Luvisol crómico (Kankab)');
  assert.ok(html.includes('Melipona beecheii'), 'Falta mención de abeja Melipona beecheii');

  // Canales 01 a 07
  for (let i = 1; i <= 7; i++) {
    const channelNum = i.toString().padStart(2, '0');
    assert.ok(html.includes(`>${channelNum}<`), `Falta desplegar el canal número ${channelNum}`);
  }

  // Calculadora interactiva
  assert.ok(html.includes('produce-volume-slider'), 'Falta el slider de la calculadora');
  assert.ok(html.includes('km-saved-display'), 'Falta display de km evitados');
  assert.ok(html.includes('co2-saved-display'), 'Falta display de CO2 evitado');

  // Seguridad de enlaces externos
  const matchesTargetBlank = html.match(/<a[^>]+target="_blank"[^>]*>/g) || [];
  matchesTargetBlank.forEach(link => {
    assert.ok(link.includes('rel="noopener"'), `Enlace con target="_blank" carece de rel="noopener": ${link}`);
  });
});

// 4. Verificación de interactividad en main.js
test('Lógica interactiva sin dependencias externas en main.js', () => {
  const jsPath = path.join(ROOT_DIR, 'assets/js/main.js');
  const js = fs.readFileSync(jsPath, 'utf8');

  assert.ok(js.includes('initThemeToggle'), 'Falta función initThemeToggle');
  assert.ok(js.includes('initTiltAndSpotlight'), 'Falta función initTiltAndSpotlight');
  assert.ok(js.includes('initZonificationSelector'), 'Falta función initZonificationSelector');
  assert.ok(js.includes('initCropsFilter'), 'Falta función initCropsFilter');
  assert.ok(js.includes('initImpactCalculator'), 'Falta función initImpactCalculator');

  // No debe contener eval() ni alert()
  assert.ok(!js.includes('eval('), 'Prohibido el uso de eval()');
  assert.ok(!js.includes('alert('), 'Prohibido el uso de alert()');
});

console.log(`\n------------------------------------------------------`);
console.log(`Resumen de Pruebas Gate 1: ${passedTests}/${totalTests} superadas.`);
if (passedTests === totalTests) {
  console.log('🟢 DICTAMEN GATE 1: APROBADO (Exit Code 0)\n');
} else {
  console.log('🔴 DICTAMEN GATE 1: REPROBADO\n');
  process.exit(1);
}
