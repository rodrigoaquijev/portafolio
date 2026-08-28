# Vaca UI Kit · Dirección 0.1

## Idea rectora

**Jugar alrededor del dinero, nunca con el dinero.**

Vaca debe sentirse cálida, táctil y optimista cuando invita, organiza o celebra. Cuando muestra montos, permisos, errores o confirmaciones, cambia a una voz precisa y tranquila. La inspiración de Duolingo está en la claridad, el ritmo y la respuesta física de los controles; no en copiar su mascota, su verde ni su estructura de gamificación.

La personalidad se resume en cuatro rasgos:

- **Juguetona:** formas redondas, microinteracciones cortas y una mascota expresiva.
- **Compartida:** la interfaz evita jerarquías innecesarias entre integrantes.
- **Clara:** el saldo, la consecuencia y el estado de cada movimiento siempre tienen prioridad.
- **Local:** Yape, Plin y los códigos QR aparecen como hábitos reconocibles, sin convertir la app en una imitación de una billetera existente.

## 1. ADN visual tomado del logo

El sistema parte de cuatro elementos presentes en la marca:

1. **Verde lima:** energía, progreso y acción principal.
2. **Verde petróleo:** confianza, texto y estructura.
3. **Coral:** humor, atención y momentos expresivos.
4. **Crema:** calidez y distancia frente al blanco clínico de la banca.

La silueta de la vaca aporta una segunda capa:

- curvas amplias para cards y botones;
- dos pequeños nodos circulares como firma de marca;
- orejas laterales que pueden aparecer en ilustraciones o superficies hero;
- manchas orgánicas reservadas para fondos vacíos, onboarding y celebraciones.

Las manchas no se usan detrás de cifras ni textos funcionales. Los nodos y las orejas deben aparecer con moderación para conservar su valor distintivo.

## 2. Tipografía

### Familia display · Bricolage Grotesque

Usar en balances, títulos cortos, cifras hero y mensajes de celebración. Sus formas ligeramente irregulares aportan personalidad sin entrar en una estética infantil.

- Balance hero: 52/52 · 700 · números tabulares.
- Display: 36/38 · 700.
- Título de pantalla: 28/32 · 700.
- Título de sección: 22/26 · 650.

### Familia UI · Onest

Usar en navegación, botones, formularios, movimientos y textos explicativos. Tiene curvas amables, buena lectura en tamaños pequeños y suficiente neutralidad para operaciones financieras.

- Body: 16/24 · 400.
- Body strong: 16/24 · 600.
- Button: 16/20 · 650.
- Label: 14/18 · 600.
- Metadata: 12/16 · 500.

### Reglas tipográficas

- Mantener los títulos en sentence case.
- Reservar las mayúsculas para la marca VACA y códigos breves.
- Escribir montos como `S/ 480`; usar decimales solo cuando existan.
- Usar números tabulares en saldos, listas y comparaciones.
- Separar la moneda del valor mediante jerarquía, no reduciendo el contraste.
- Evitar fuentes redondeadas genéricas como Fredoka o Nunito: acercarían demasiado la identidad a productos educativos infantiles.

## 3. Color

### Marca

| Token | Valor | Uso |
| --- | --- | --- |
| `vaca.ink.deep` | `#062F32` | Texto principal, bordes táctiles y fondos oscuros. |
| `vaca.ink` | `#0C4146` | Marca, navegación y superficies oscuras. |
| `vaca.pasture` | `#9FD254` | Acción principal, progreso y estados completos. |
| `vaca.coral` | `#FC755B` | Acento expresivo, ilustración y atención no crítica. |
| `vaca.milk` | `#FFF9EC` | Fondo cálido principal. |
| `vaca.paper` | `#FFFFFF` | Formularios y superficies que necesitan máxima limpieza. |
| `vaca.mist` | `#EFF5ED` | Superficie secundaria y selección suave. |
| `vaca.line` | `#CADAD5` | Divisores y límites silenciosos. |
| `vaca.muted` | `#577071` | Texto secundario sobre fondos claros. |

El texto `vaca.ink.deep` sobre `vaca.milk` alcanza una relación de contraste superior a 10:1. Sobre `vaca.pasture` supera 8:1. El coral de marca no se usa para texto pequeño ni como único indicador de error.

### Semánticos

| Token | Valor | Uso |
| --- | --- | --- |
| `semantic.success` | `#17795E` | Operación confirmada. |
| `semantic.warning` | `#805B13` | Saldo bajo, vencimiento o acción pendiente. |
| `semantic.danger` | `#C94537` | Error, rechazo o acción destructiva. |
| `semantic.info` | `#22688E` | Información operativa. |

Cada estado combina color, icono y texto. “Pendiente”, “Confirmado” y “Falló” nunca dependen solo del color.

### Modo oscuro

| Token | Valor |
| --- | --- |
| Fondo | `#062F32` |
| Superficie | `#0C4146` |
| Elevada | `#14565A` |
| Texto | `#FFF9EC` |
| Texto secundario | `#B9CDCB` |
| Línea | `#2F686B` |
| Acción principal | `#A8DC59` |

El modo oscuro conserva el crema para texto y el lima para acción. No invierte el coral hacia tonos neón.

## 4. Retícula, tamaño y ritmo

- Frame inicial para Paper: 390 × 844 px.
- Retícula base: 4 px.
- Margen horizontal: 20 px.
- Separación entre bloques: 24 o 32 px.
- Separación interna de cards: 16 o 20 px.
- Separación entre etiqueta y valor: 6 u 8 px.
- Objetivo táctil mínimo: 48 × 48 px.
- Botón principal e inputs: 56 px de alto.
- Bottom navigation: 72 px más safe area.

### Radios

- `radius.s`: 12 px · chips y elementos compactos.
- `radius.m`: 18 px · inputs y botones.
- `radius.l`: 24 px · cards.
- `radius.xl`: 32 px · hero, sheets y estados vacíos.
- `radius.round`: 999 px · avatar, progreso y filtros breves.

El sistema usa radios consistentes. La personalidad debe venir de la composición, los nodos y las ilustraciones; no de asignar una esquina distinta a cada componente.

## 5. Profundidad y tactilidad

### Controles principales

- Borde: 2 px en `vaca.ink.deep`.
- Sombra dura: `0 4px 0 #062F32`.
- Presionado: desplazar 3 px hacia abajo y reducir la sombra a 1 px.
- Transición: 100–140 ms.

### Superficies financieras

- Fondo sólido.
- Borde de 1 px.
- Sin sombras difusas.
- Sin glassmorphism ni transparencias detrás de cifras.

La respuesta táctil vive en los controles. Las cards que contienen dinero permanecen estables para evitar que la app se sienta como un juego de azar.

## 6. Iconografía e ilustración

### Iconos

- Base: Lucide o una familia equivalente de trazo redondeado.
- Tamaños: 20 px para navegación y 24 px para acciones principales.
- Trazo: 2–2.25 px con extremos redondeados.
- Cada botón icon-only necesita etiqueta accesible.

Crear tres iconos propios para reforzar la identidad:

- Fondo: una bolsa/saldo con dos nodos de la marca.
- Aportes: tres fichas que convergen en un círculo.
- Grupo: tres cabezas simplificadas con orejas laterales.

### Mascota

La vaca aparece en cinco expresiones:

1. bienvenida;
2. fondo vacío;
3. esperando una confirmación;
4. fondo completo;
5. error recuperable.

La mascota acompaña, nunca juzga. No se enfada con quien aporta tarde, no usa rachas y no convierte los pagos en una competencia.

## 7. Componentes base

### Botones

**Primary / Pasture**

- Fondo lima, texto verde profundo, borde y sombra táctil.
- Una acción principal por pantalla.
- Verbos directos: “Aportar S/ 160”, “Revisar pago”, “Crear fondo”.

**Secondary / Milk**

- Fondo crema o blanco, borde verde profundo, sin relleno de color.

**Tertiary / Text**

- Texto verde petróleo, sin contenedor permanente.

**Danger**

- Fondo claro, texto y borde `semantic.danger`.
- Reservado para salir del grupo, cancelar o rechazar.

Todos contemplan default, pressed, focus, loading, disabled y success.

### Balance hero

- Saludo breve o nombre del fondo.
- Saldo disponible como cifra dominante.
- Saldo reservado en una línea separada.
- Barra de cobertura con etiqueta textual.
- Acciones “Aportar” y “Pagar” debajo del valor, nunca flotando sobre la cifra.

La superficie puede incorporar dos nodos coral como firma, pero no una ilustración completa de la mascota.

### Medidor de aportes

- Un segmento por integrante.
- Avatar, nombre, monto y estado visibles.
- Los aportes parciales usan progreso dentro del segmento.
- El estado pendiente se comunica con reloj + texto, no con una persona en rojo.

### Input de dinero

- Teclado numérico del sistema.
- Prefijo `S/` persistente.
- Valor de 32 px o mayor.
- Ayuda contextual debajo: parte esperada, límite o saldo posterior.
- Error escrito como una acción recuperable.

### Método de aporte

- Yape, Plin y transferencia bancaria se muestran como opciones equivalentes.
- Conservar los logos oficiales sin recolorearlos.
- Mostrar el estado de retorno: confirmado, pendiente o fallido.
- No convertir una marca externa en el color principal de toda la pantalla.

### Movimiento

- Icono de categoría.
- Concepto y persona responsable.
- Fecha y estado.
- Monto alineado a la derecha con números tabulares.
- El signo y el verbo acompañan al color: “Aportó +S/ 160”, “Pagaste −S/ 99”.

### Banners de estado

- Success: confirmación y siguiente efecto.
- Warning: explica qué falta y cuándo importa.
- Danger: explica qué ocurrió y ofrece recuperación.
- Info: dato operativo sin urgencia.

Máximo dos líneas antes de la acción. La mascota solo puede aparecer en success o estados vacíos.

### Bottom navigation

Cuatro destinos:

1. Inicio.
2. Fondo.
3. Actividad.
4. Grupo.

El item activo usa forma rellena suave, icono y etiqueta. “Aportar” y “Pagar” son acciones contextuales, no destinos permanentes.

### Bottom sheets y diálogos

- Bottom sheet para selección de método, filtros y acciones reversibles.
- Pantalla completa para revisar pagos, permisos o salidas.
- Diálogo solo para confirmaciones breves y destructivas.

## 8. Patrones financieros

### Antes de una operación

Mostrar monto, destinatario, origen, saldo posterior y regla aplicada.

### Durante

Usar un estado estable con progreso indeterminado. Bloquear el doble envío sin bloquear la navegación completa.

### Después

Confirmar el resultado, actualizar el saldo y dejar acceso a la constancia.

### Pendiente

Evitar mensajes celebratorios. Explicar que el movimiento todavía no forma parte del saldo disponible.

### Error

Usar lenguaje preciso y sin bromas. Indicar si el dinero salió, si el saldo cambió y qué acción sigue.

## 9. Voz de interfaz

### En momentos cotidianos

- “El fondo ya está completo.”
- “Falta un aporte para cubrir internet.”
- “Tu parte de agosto es S/ 160.”
- “La casa está lista para el siguiente recibo.”

### En momentos críticos

- “El aporte sigue pendiente. Todavía no lo sumamos al saldo.”
- “El pago no se completó. El fondo mantiene el mismo saldo.”
- “Este pago necesita una aprobación más.”

### Evitar

- juegos de palabras con “muu” en cada pantalla;
- lenguaje que avergüence a un integrante;
- “¡Ups!” en errores financieros;
- metáforas que oculten estados reales;
- confeti para movimientos todavía pendientes.

## 10. Motion y sonido

- Tap/press: 100–140 ms.
- Cambio de estado: 180–240 ms.
- Progreso del fondo: 240–320 ms.
- Entrada de mascota: 320–420 ms, una sola vez.
- Curva sugerida: spring suave, sin rebote repetido.
- Haptic ligero al aportar; haptic medio al confirmar un pago.
- Sonido solo si el usuario lo habilita. Ningún estado depende de él.
- Respetar `prefers-reduced-motion` y ofrecer equivalentes sin movimiento.

## 11. Accesibilidad

- Contraste WCAG AA como mínimo.
- Texto de cuerpo de 16 px.
- Targets de 48 px.
- Escalado de texto sin truncar montos ni CTAs.
- Color acompañado por icono y palabra.
- Orden de lectura lógico para lectores de pantalla.
- Foco visible de 3 px en lima con separación de 2 px sobre fondos oscuros.
- Dark mode y reduced motion desde el sistema operativo.
- No comunicar deuda, retraso o responsabilidad únicamente mediante rojo y verde.

## 12. Orden de construcción en Paper

1. Foundations: color, tipografía, spacing, radios y elevation.
2. Primitives: iconos, avatar, badge, divider y progress.
3. Inputs: teléfono, código, dinero, selector y switch.
4. Actions: botones, navigation item y segmented control.
5. Financial components: balance hero, medidor de aportes, movimiento y recibo.
6. Feedback: banners, empty state, loading, error y toast.
7. Patterns: aportar, pagar, aprobar y salir.
8. Pantallas: construir las doce vistas a partir de estos patrones.

## 13. Guardrails contra una estética genérica

- No usar gradientes morado/rosa, glassmorphism o brillos sin función.
- No convertir cada bloque en una card.
- No usar una paleta pastel extensa; la marca trabaja con cuatro colores.
- No llenar la app de stickers o confeti.
- No usar la mascota en comprobantes, términos o errores graves.
- No copiar el progreso, la navegación o las ilustraciones de Duolingo.
- No mezclar más de dos familias tipográficas.
- No sacrificar precisión financiera para parecer simpático.

La creatividad de Vaca debe reconocerse en su ritmo, lenguaje y tactilidad antes que en la decoración.
