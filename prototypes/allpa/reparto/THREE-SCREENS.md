# Allpa · Tres pantallas

Entrada actual: `main.jsx` → `ThreeScreens.jsx` + `three-screens.css`.

Abrir `/prototypes/allpa/reparto/` con `npm run dev -- --host 127.0.0.1 --port 5175 --strictPort`.

Inicio, Registro de cobro y Reparto comparten un cobro ficticio editable. En escritorio aparecen juntas; en móvil se muestra la activa. Guardar actualiza Inicio y reemplaza el cobro anterior. No hay persistencia tras recargar, acumulación de ingresos ni integración bancaria. Cambiar escenario reinicia el ejemplo.

Importes en céntimos. El ingreso admite coma o punto decimal, sin separadores de miles. Los controles de reparto conservan el total y muestran el faltante de alquiler por separado. Fuentes: Fraunces local y Manrope desde la importación existente en HTML. SVG de marca en `assets/allpa/brand/v1`.

Verificación: `npm run build`, `node --test prototypes/allpa/reparto/model.test.js`; además recorrido en navegador de guardar S/ 1,200 → disponible S/ 580, faltante S/ 350 → S/ 150 pendientes, edición por teclado y vista móvil de 390 px. Pendiente: pruebas con participantes, modelo de varios cobros y auditoría completa de accesibilidad.
