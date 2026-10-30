---
title: "Sistema de diseño del portafolio"
description: "Auditoría del sitio y reglas del sistema de tokens que controla colores, tipografía, espaciado y diagramación en todas las páginas."
updated: "2026-10-30"
---

# Sistema de diseño del portafolio

Este documento registra la auditoría del 30 de octubre de 2026 y describe el sistema que la resuelve. Todo el sitio lee sus valores de `src/styles/tokens.css`. Si cambio un color, una familia tipográfica, un tamaño o el ancho del contenedor en ese archivo, el cambio llega a la Home, a Sobre mí y a cada caso.

## 1. Auditoría

Revisé las rutas públicas (`/`, `/sobre-mi`, `/casos/bbva`, `/casos/banco-nacion`, `/casos/vaca`) a 1353 px y a 375 px, en tema claro y oscuro. Medí cada página con un script que recorre el DOM renderizado y calcula familias, tamaños, contraste WCAG, tamaño de los objetivos táctiles, saltos de encabezado y desbordes horizontales. También revisé el CSS fuente.

### Problemas encontrados

**Tipografía rota.** El sitio pedía Clash Display, Gambetta, General Sans, Cabinet Grotesk y Geist Mono. Fontshare no servía Gambetta, así que el texto de lectura se mostraba en Georgia en Windows y en una serif cualquiera en Android. Geist Mono nunca se cargaba. JetBrains Mono y General Sans se descargaban sin usarse. Ninguna de estas familias era la dirección visual aprobada.

**Sin escala tipográfica.** Cada página usaba entre 18 y 31 tamaños distintos (BBVA 31, Nación 29, Vaca 26). Había unos 80 valores `clamp()` diferentes solo para títulos. La Home tenía 41 textos por debajo de 12 px, Sobre mí 52, BBVA 53 y Nación 161, algunos de 6 y 7 px.

**Contraste insuficiente.** El token de texto terciario medía 2,63:1 en claro y 2,78:1 en oscuro. Las etiquetas en verde esmeralda medían 3,42:1 sobre el fondo claro. El verde de «Lado personal» medía 2,83:1.

**Tokens duplicados y código muerto.** `--bg-deep` se definía en 10 lugares; había cuatro paletas alternativas, tres pares tipográficos y un personalizador (`DesignCustomizer.jsx`) que ninguna página usaba. De 73 clases en `foundation.css`, 70 no se usaban; en `home.css`, 341 reglas eran inalcanzables. El encabezado, el kicker y la etiqueta de sección, que aparecen en todo el sitio, vivían dentro de `vaca.css`.

**Navegación.** Al tocar una sección en el menú, el título quedaba a 132 px por debajo del encabezado porque se sumaban dos márgenes de desplazamiento. La regla global de `prefers-reduced-motion` dependía de un atributo `data-motion` que nunca se asignaba, así que no funcionaba.

**Accesibilidad.** Los enlaces Email y LinkedIn del pie medían 28 × 16 y 43 × 16 px. El control de posición del reproductor medía 2 px de alto. Las fuentes del caso Nación medían 17 px de alto. El nombre en el encabezado medía 96 × 17 px en móvil. Había saltos de `h1` a `h3` en BBVA y en Sobre mí, porque el título del email de muestra y el del reproductor usaban `h3`.

**Peso de imágenes.** Las 16 capturas del caso Nación eran PNG de hasta 1,2 MB cada una, unos 8,6 MB en total.

**Móvil.** No había desborde horizontal real. En la Home, el nombre bajaba a 36 px y quedaba más pequeño que el kicker, así que la jerarquía del primer viewport se invertía.

## 2. Referencias

Consulté Mobbin para ver cómo resuelven páginas largas de contenido otros productos:

- [Attio](https://mobbin.com/sites/sections/7866659c-1438-4186-8ec4-500d137ba8b1) usa una sola familia sans para la interfaz y un índice de secciones persistente.
- [Dub](https://mobbin.com/sites/sections/825205b6-8aa3-4195-893d-0c348638a02e) numera las secciones y acompaña la lectura con un índice.
- [Whop](https://mobbin.com/sites/sections/440ddcf2-af25-41df-bda0-eaed82591dd4) presenta los metadatos en una franja de etiqueta y valor.
- [Caso de Figma con Philips](https://mobbin.com/sites/sections/2e5c4c7d-4e70-4e5e-bbf7-987c58c9cd9e) y [Better Stack](https://mobbin.com/sites/sections/e7e957c6-5a4a-4cd8-831b-7f0a65f19d87) separan los títulos editoriales de una interfaz sans neutra.

De ahí tomé tres decisiones: una sola sans para toda la interfaz y el texto, la serif reservada para títulos, y conservar el índice de secciones que ya existe en el encabezado de cada caso, corrigiendo su desplazamiento.

## 3. Arquitectura de tokens

`tokens.css` se carga antes que cualquier otra hoja y tiene cuatro niveles.

**Primitivos.** Valores crudos sin significado: la rampa de neutros fríos (`--neutral-0` a `--neutral-950`), los acentos (`--cyan-*`, `--iris-*`, `--emerald-*`, `--rose-*`), las tres familias, la escala fija (`--fs-12` a `--fs-32`), el espaciado en base 4 (`--space-1` a `--space-32`), los radios y las curvas de movimiento.

**Semánticos fijos.** Roles que no cambian con el tema: `--font-heading`, `--font-body`, `--font-meta`, los roles de texto (`--text-caption` a `--text-display`), interlineados, tracking y diagramación (`--container`, `--gutter`, `--container-width`, `--header-offset`, `--target-min`).

**Semánticos por tema.** `--color-bg`, `--color-surface`, `--color-text`, `--color-text-secondary`, `--color-text-tertiary`, bordes, acentos y foco, definidos una vez para claro y otra para oscuro.

**Alias heredados.** El CSS de cada página usa nombres anteriores (`--bg-deep`, `--text-muted`, `--font-display`, `--type-step-*`, `--space-md`). Ahora apuntan a los semánticos, así que el código existente consume el sistema sin reescribirse.

## 4. Tipografía

| Rol | Familia | Uso |
| --- | --- | --- |
| Títulos | Instrument Serif | `h1` a `h4`, citas destacadas, cifras grandes |
| Interfaz y lectura | Satoshi | párrafos, navegación, botones, etiquetas |
| Metadatos | JetBrains Mono | contadores, códigos de token, fichas técnicas |

Instrument Serif solo tiene peso 400. Activé `font-synthesis-weight: none` para que el navegador no invente negritas falsas, y bajé el tracking negativo de los títulos a −0,015 em, porque el −0,04 em estaba calibrado para Clash Display.

Escala fija: 12, 13, 14, 16, 18, 20, 24, 28 y 32 px. Ningún texto de interfaz baja de 12 px. Los títulos usan seis tamaños fluidos:

| Token | Mínimo → máximo |
| --- | --- |
| `--text-lead` | 18 → 20 px |
| `--text-h4` | 24 → 32 px |
| `--text-h3` | 28 → 44 px |
| `--text-h2` | 36 → 60 px |
| `--text-h1` | 44 → 80 px |
| `--text-display` | 52 → 112 px |

Las maquetas que reproducen otra interfaz conservan sus tamaños literales: el email de BBVA, la tarjeta de Vaca y los especímenes Roboto del sistema Nación.

## 5. Color

No uso negro ni blanco puros como fondo. Cada color de texto cumple 4,5:1 sobre el fondo y la superficie de su tema.

| Token | Claro | Contraste | Oscuro | Contraste |
| --- | --- | --- | --- | --- |
| `--color-text` | #0B111D | 17,1:1 | #F8FAFC | 17,6:1 |
| `--color-text-secondary` | #4B5A6F | 6,4:1 | #94A3B8 | 7,2:1 |
| `--color-text-tertiary` | #5A6779 | 5,2:1 | #7D8AA0 | 5,3:1 |
| `--color-accent` | #047857 | 5,0:1 | #10B981 | 7,3:1 |
| `--color-accent-cyan` | #0369A1 | 5,4:1 | #00E5FF | 12,0:1 |
| `--color-accent-iris` | #4F46E5 | 5,7:1 | #818CF8 | 6,2:1 |

En tema claro, los acentos usan el tono 700 de la misma familia en lugar del 600, porque el 600 no alcanzaba 4,5:1 en texto pequeño. Los tonos 600 siguen disponibles como primitivos para rellenos y decoración.

Cada caso mantiene su paleta de marca (BBVA, Nación, Vaca) dentro de su hoja. Donde un color de marca no alcanzaba el contraste en texto, agregué una variante de texto, por ejemplo `--vc-coral-text`.

## 6. Diagramación

- `--container`: 1180 px. `--gutter`: 24 px en escritorio y 16 px desde 760 px hacia abajo.
- `--container-width` combina ambos y lo usan la Home, Sobre mí, los tres casos y el bloque del siguiente caso, que antes tenían anchos de 1120 y 1180 px con márgenes de 24, 28, 30 y 32 px.
- `--header-offset` (104 px; 96 px en móvil) se aplica una sola vez como `scroll-padding-top`, así que cualquier ancla queda justo debajo del encabezado.
- `--target-min` (44 px) define el alto mínimo de los controles táctiles.

## 7. Componentes compartidos

`src/styles/components.css` reúne lo que se repite en todas las páginas: el encabezado con su índice de secciones, el kicker editorial y la etiqueta de sección. Antes vivían en `vaca.css`. La hoja se carga en la misma posición de cascada que tenía ese bloque, para no alterar cómo se resuelven los estilos de cada página.

## 8. Resultados

| Medida | Antes | Después |
| --- | --- | --- |
| Familias cargadas sin usar o sin servir | 4 | 0 |
| Tamaños distintos por página (escritorio) | 18–31 | 10–21 |
| Textos bajo 12 px fuera de maquetas | 41–161 por página | 0 |
| Contraste del texto terciario | 2,63:1 | 5,2:1 |
| Objetivos táctiles bajo 24 px | 5 tipos | 0 |
| Saltos de encabezado | 2 páginas | 0 |
| Líneas de CSS | 3656 | 2672 |
| CSS compilado (gzip) | 46,8 KB | 37,1 KB |
| Imágenes del caso Nación | 8,6 MB | 2,3 MB |

## 9. Cómo hacer cambios

- Para cambiar un color del sitio, edito el semántico en las secciones de tema claro y oscuro de `tokens.css`. Si necesito un tono nuevo, primero lo agrego como primitivo.
- Para cambiar una familia, edito `--family-serif`, `--family-sans` o `--family-mono` y el enlace correspondiente en `index.html`.
- Para un tamaño nuevo en una página, uso un token de la escala. Si ninguno sirve, reviso la escala en lugar de escribir un valor en píxeles.
- Para el ancho o los márgenes laterales, edito `--container` o `--gutter`.
- Antes de publicar, compruebo el contraste de cualquier color de texto nuevo sobre `--color-bg` y `--color-surface` en ambos temas.
