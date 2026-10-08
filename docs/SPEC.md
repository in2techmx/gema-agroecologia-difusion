# ESPECIFICACIÓN FUNCIONAL MAESTRA — PÁGINA DE DIFUSIÓN INSTITUCIONAL
## PROYECTO GEMA AGROECOLOGÍA (SAN PEDRO CHIMAY, YUCATÁN)

**Project ID:** `PROJ-GEMA-DIFUSION-V1`  
**Autoridad Técnica:** Director de Desarrollo (DD) — Ecosistema IN2TECHMX  
**Estándar de Diseño:** Vanguard Web Design +10,000€ (Rodri González & Jack Standard) / Cero AI Slop  
**Memoria Permanente:** Cerebro2 (`~/.gemini/antigravity/brain/second_brain/`)  
**Público Objetivo:** Sector gastronómico de alta gama (HORECA), restauranteros, Wedding Planners de haciendas de Yucatán, inversionistas agroecológicos, instituciones gubernamentales y comunidad regional.

---

### 1. OBJETIVO Y POSICIONAMIENTO REGIONAL
Desplegar una plataforma web de difusión y posicionamiento para **Gema Agroecología** (asentada en Rancho Gema, San Pedro Chimay, Yucatán). La plataforma debe comunicar de manera contundente la vocación regenerativa, la excelencia agronómica, la trazabilidad territorial y la propuesta de valor de especialidad del proyecto para consolidarlo como el **referente agroecológico emblemático de la Península de Yucatán**.

### 2. PILARES DE DISEÑO Y EXPERIENCIA DE USUARIO (UX/UI)
1. **Estética Editorial de Vanguardia:**
   - Tipografía ejecutiva: `Outfit` para encabezados y acentos numéricos; `Plus Jakarta Sans` para cuerpo de texto y lectura prolongada; `JetBrains Mono` para coordenadas, datos de suelo y métricas técnicas.
   - Micro-tipografía y Badges de alta gama: `letter-spacing: 0.1em`, acentos en verde esmeralda botánico, oro solar y terracota Kankab.
2. **Modo Dual Eco-Tech:**
   - **Dark Mode (Default):** Fondo Obsidian Jungle (`#0B130E`), superficies de vidrio botánico (`rgba(15, 28, 20, 0.82)`), bordes sutiles con resplandor esmeralda (`rgba(16, 185, 129, 0.25)`).
   - **Light Mode:** Fondo Cristalino Botánico (`#F8FAF8`), superficies blancas con reflejos de rocío vegetal (`#FFFFFF`), texto de alto contraste (`#062817`).
3. **Efecto 3D Tilt y Foco Magnético (Magnetic Cursor Spotlight):**
   - Interacción física basada en la técnica de Rodri González: cálculo de coordenadas relativas (`--mouse-x`, `--mouse-y`) y rotación tridimensional armónica (`perspective(1000px) rotateX(...) rotateY(...) scale3d(1.02, 1.02, 1.02)`).
4. **Cero Dependencias Externas Frágiles:**
   - La plataforma debe funcionar en modo 100% autónomo (offline-friendly, compatible con protocolo local `file://` y GitHub Pages sin requerir CDNs externos que puedan ser bloqueados por adblockers o firewalls corporativos).
5. **Riqueza de Activos Reales:**
   - Integración nativa de la planimetría satelital (`rancho_gema_map.jpg`), entorno geográfico de San Pedro Chimay (`san_pedro_chimay_yucatan.jpg`), meliponario tradicional (`meliponario_chimay.jpg`), floricultura y bodas en hacienda (`bodas_hacienda_chimay.jpg`), cultivo de habanero con denominación de origen (`chile_habanero_yucatan.jpg`) y producción orgánica (`organic_hero.jpg`, `organic_market.jpg`).

---

### 3. ESTRUCTURA NAVEGABLE Y SECCIONES MAESTRAS
- **01. Navbar Dinámica:** Logotipo institucional de Gema Agroecología, enlaces de anclaje rápido, conmutador de modo Dark/Light y botón de contacto institucional.
- **02. Hero Cinemático:** Declaración de posicionamiento ("El estándar agroecológico de especialidad en el corazón de Yucatán"), badge de geolocalización (20.8750° N, -89.5600° W · San Pedro Chimay), llamada a la acción y mosaico fotográfico de alto impacto.
- **03. Tarjetas KPI de Escala Territorial:** 10.00 HA de Polígono Total · 1.00 HA de Piloto Activo · 200 m² de Invernadero Tecnificado · 18 m de Pozo Profundo · 14 km a Mérida.
- **04. Cartografía Interactiva & Zonificación Dinámica:** Visualizador de las 4 zonas del rancho (Piloto, Etapa 1 Habanero/Meliponas, Etapa 2 Agroforestal y Reserva Ecológica) con selector interactivo y panel lateral de especificaciones edafológicas y de uso de suelo.
- **05. Los 4 Pilares de la Práctica Agroecológica:**
  - 1. Cero Agroquímicos de Síntesis y Enmiendas Vivas (Bokashi, bioles y microorganismos autóctonos).
  - 2. Suelo Luvisol Crómico (*Kankab*) y Manejo Biointensivo de Camas.
  - 3. Santuario de Abeja Melipona (*Melipona beecheii* / Xunan Kab) y Biodiversidad Nativa.
  - 4. Frescura Ultra-Cercana (Cosecha a mesa en < 25 minutos).
- **06. Catálogo de Cultivos & Especialidades Botánicas:** Filtros interactivos por categoría (Microgreens Vivos, Hortalizas Gourmet, Chile Habanero DO, Flores Comestibles, Transformados y Miel de Melipona).
- **07. Los 7 Canales Comerciales Estratégicos:** Despliegue interactivo en grilla con tilt 3D de la estrategia de distribución (HORECA, Mercados, E-Commerce, Venta Comunitaria, Escuela Viva, Bodas en Haciendas, Happenings Pop-Up).
- **08. Gobernanza & Equipo Promotor:** Perfiles de Arturo de la Barrera, Arturo Arnaiz y Gema Romero, evidenciando solvencia multidisciplinaria.
- **09. Calculadora de Impacto & Huella Ecológica:** Módulo interactivo donde los restauranteros y aliados pueden simular la reducción de huella de carbono y el impacto en frescura al sustituir hortalizas traídas del centro del país por producción local de Chimay.
- **10. Footer Institucional & Credenciales:** Metadatos oficiales, enlace a la vitrina documental del informe V3.2, contacto y sello IN2TECHMX.
