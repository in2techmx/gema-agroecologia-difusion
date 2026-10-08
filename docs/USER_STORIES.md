# HISTORIAS DE USUARIO Y CRITERIOS GHERKIN — GEMA AGROECOLOGÍA DIFUSIÓN
**Project ID:** `PROJ-GEMA-DIFUSION-V1`

### US-GEMA-DIF-01: Visualización Editorial y Posicionamiento de Marca
- **GIVEN** que un visitante (chef ejecutivo, sommelier, wedding planner o inversionista) ingresa a la página web,
- **WHEN** carga la pantalla principal,
- **THEN** visualiza el Hero institucional con tipografía de alta fidelidad, la fotografía real de San Pedro Chimay, las coordenadas 20.8750° N, -89.5600° W, y los indicadores territoriales (10.00 HA Polígono, 1.00 HA Piloto, 200 m² Invernadero, 14 km a Mérida).

### US-GEMA-DIF-02: Zonificación Interactiva del Predio
- **GIVEN** que el usuario inspecciona la sección del Polígono de Rancho Gema,
- **WHEN** hace clic en cualquiera de las 4 zonas (Unidad Piloto, Etapa 1 Habanero, Etapa 2 Agroforestal, Reserva Ecológica),
- **THEN** el panel dinámico actualiza instantáneamente la superficie en hectáreas/m², el uso específico, el estado de operación y la ficha edafológica sin recargar la página.

### US-GEMA-DIF-03: Exploración del Catálogo de Especialidades Botánicas
- **GIVEN** que el visitante navega por el catálogo de cultivos,
- **WHEN** filtra por categorías ("Microgreens Vivos", "Hortalizas Gourmet", "Chile Habanero", "Flores Comestibles", "Transformados"),
- **THEN** la grilla filtra de forma fluida los ítems mostrando ciclo biológico, sabor/perfil organoléptico y aplicaciones culinarias.

### US-GEMA-DIF-04: Conmutación Fluida Modo Dual (Dark / Light)
- **GIVEN** que el usuario prefiere visualizar el portal en ambiente luminoso o nocturno,
- **WHEN** hace clic en el interruptor de tema o el sistema detecta su preferencia `prefers-color-scheme`,
- **THEN** la interfaz permuta suavemente entre `dark` (Obsidian Jungle) y `light` (Cristalino Botánico) persistiendo la selección en `localStorage`.

### US-GEMA-DIF-05: Interactividad 3D Tilt y Foco Magnético (Spotlight)
- **GIVEN** que el usuario recorre con el ratón las tarjetas de canales comerciales y pilares agronómicos,
- **WHEN** el cursor sobrevuela una tarjeta en dispositivos de puntero,
- **THEN** la tarjeta responde con inclinación suave en 3D calculada por ángulo de incidencia y un resplandor luminoso radial en el borde que sigue al puntero.

### US-GEMA-DIF-06: Calculadora Interactiva de Huella e Impacto de Proximidad
- **GIVEN** que un restaurante o comprador ingresa a la calculadora de impacto de proximidad,
- **WHEN** selecciona su volumen estimado de consumo semanal de hortalizas y brotes,
- **THEN** el algoritmo calcula y proyecta interactivamente los kilómetros de flete evitados (ahorro logístico frente al centro del país ~1,300 km), la reducción de huella de carbono estimada y el incremento en horas de frescura post-cosecha.

### US-GEMA-DIF-07: Verificación de Integridad y Trazabilidad (3 Gates)
- **GIVEN** la ejecución de la suite de pruebas del framework IN2TECH,
- **WHEN** se ejecutan los scripts de prueba en `tests/difusion.test.js`,
- **THEN** el Gate 1 (Pruebas unitarias y de DOM), Gate 2 (Seguridad y ausencia de secretos) y Gate 3 (Auditoría de correspondencia de datos oficiales) emiten dictamen aprobatorio con exit code 0.
