# Allpa — Cobro recurrente y reparto

Prototipo aislado: React 18, Tailwind CSS 4, Lucide React y Framer Motion. La alpaca y los andenes son SVG originales. Fraunces y Manrope se cargan desde Google Fonts con respaldos del sistema.

## Ejecutar

Desde la raíz del repositorio:

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 5175
```

Abrir `http://127.0.0.1:5175/prototypes/allpa/reparto/`.

```sh
node --test prototypes/allpa/reparto/model.test.js
npm run build
```

Vite incluye la página del prototipo en `dist/prototypes/allpa/reparto/index.html`. Las utilidades y el reset de Tailwind se cargan solo en esta página.

## Interacción

- Abrir **Escenarios** para elegir el cobro holgado, faltante o reajuste voluntario.
- Los sliders asignan soles enteros. El modelo calcula en céntimos y conserva la suma del ingreso. El máximo de cada slider respeta lo asignado a la otra categoría; pagos se limita al alquiler pendiente.
- Holgado: S/ 1.200 = S/ 500 pagos + S/ 120 colchón + S/ 580 disponibles.
- Faltante: S/ 350 para un alquiler de S/ 500; S/ 150 pendientes y disponible cero.
- Reajuste: S/ 500 pagos, colchón cero y S/ 700 disponibles.
- Guardar almacena una sola distribución ficticia en este navegador, con la clave `allpa.reparto.prototype.v1`. No agrega cobros repetidos a un libro de movimientos. La última distribución se recupera al recargar.
- Deshacer restaura el registro previo durante la sesión. Un fallo de almacenamiento conserva la edición y muestra un error.
- La animación de asentamiento usa Framer Motion y respeta movimiento reducido. Sliders nativos admiten teclado; confirmación con región de estado accesible.

La forma de las terrazas representa categorías, no porcentajes. Los importes expresan el reparto. La aplicación no conecta bancos ni ejecuta pagos; el escenario se limita al cobro mostrado.

## Archivos

- `RepartoApp.jsx`: pantalla, controles, escenarios y guardado.
- `model.js`: reglas monetarias, escenarios y geometría de terrazas.
- `AlpacaMark.jsx` y `app-icon.svg`: marca vectorial.
- `styles.css`: tokens, Tailwind y detalles de composición.
- `model.test.js`: escenarios, límites y validación de datos guardados.

Verificación realizada: compilación de producción, tres pruebas automatizadas de reglas, cambio de escenarios, sliders con Home/End, guardado, deshacer y persistencia al recargar. Inspección visual a 390 px y comprobación de desbordamiento a 320 px. La carga final del navegador no registró errores. No equivale a una auditoría completa WCAG ni a investigación con usuarios.
