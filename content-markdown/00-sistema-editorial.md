---
title: "Sistema editorial del portafolio"
description: "Fuente de la verdad para revisar, escribir y homologar el contenido del portafolio de Rodrigo Aquije."
status: "activo"
ultima_actualizacion: "2026-08-25"
---

# Sistema editorial del portafolio

Este documento define los criterios obligatorios para auditar, escribir y homologar todo el contenido de `content-markdown/`. Ante cualquier diferencia entre archivos, prevalecen estas reglas.

## 1. Audiencia, perspectiva y tono de voz

### Audiencia

El contenido está dirigido principalmente a Design Leads, Hiring Managers y reclutadores de producto digital. Debe permitirles entender con rapidez:

- qué problema enfrenté;
- cuál fue mi responsabilidad real;
- qué decisiones tomé y con qué criterio;
- cómo colaboré con otros roles;
- qué restricciones condicionaron el trabajo;
- qué resultado produjo mi intervención.

### Perspectiva

La voz principal es la primera persona del singular: **yo / mi / diseñé / lideré / propuse / decidí / validé**. Esta perspectiva debe comunicar propiedad directa de las decisiones, criterio individual y madurez profesional.

- Usar verbos específicos que delimiten mi contribución: “definí la jerarquía”, “mapeé los estados”, “prototipé tres alternativas”.
- Evitar la primera persona del plural corporativa o ambigua: “hicimos”, “diseñamos”, “logramos”.
- Evitar construcciones impersonales que oculten responsabilidad: “se diseñó”, “se decidió”, “se optimizó”.
- Usar el plural solo para describir colaboración real y nombrar a los participantes: “trabajé con ingeniería para ajustar el componente a las restricciones del CMS”.
- No atribuirme decisiones, investigación ni resultados que correspondan al equipo. Cuando el alcance sea compartido, debo explicitar mi responsabilidad y la de los demás.

### Tono de voz

El tono es humano, directo, analítico y centrado en producto y negocio. Debe sonar como un diseñador que explica sus decisiones frente a una pizarra: lenguaje natural y técnico, sin tono publicitario.

- Empezar por el hecho, el problema o la decisión; evitar preámbulos decorativos.
- Preferir frases concretas y verbos activos.
- Explicar la relación entre decisión, restricción y resultado.
- Distinguir hechos, hipótesis, estimaciones y aprendizajes.
- Usar términos técnicos cuando aporten precisión, no estatus.
- Mantener una seguridad sobria: mostrar criterio mediante evidencia, no mediante adjetivos.

## 2. Catálogo de antipatrones (AI-Slop a erradicar)

Todo contenido debe auditarse estrictamente contra los siguientes patrones reconocibles de texto generado por IA.

### Adjetivos grandilocuentes y clichés de IA

Quedan prohibidos: *crucial, fundamental, pivotal, disruptivo, holístico, seamlessly, tapestry, testamento de, faro de, juego cambiante (game-changer), inmersivo, empoderar, catalizador* y *piedra angular*.

También deben sustituirse las afirmaciones de superioridad sin prueba, como “de alto impacto”, “de alto rendimiento”, “innovador”, “transformador” o “escalable”, cuando el texto no explique el resultado, el alcance o el mecanismo que las sustenta.

### Estructuras sintácticas artificiales

- No usar aperturas trilladas como “En el vertiginoso mundo de...” o “En el panorama digital actual...”.
- Evitar el paralelismo forzado: “No solo diseñé X, sino que transformé Y para elevar Z”.
- Evitar cierres moralistas o inflados: “Este proyecto demostró que el diseño centrado en el usuario es la clave del éxito futuro”.
- Evitar el uso excesivo de *navegar*, en especial fórmulas como “navegar la complejidad” o “navegar por los desafíos”.
- Evitar series de tres conceptos abstractos si no se explica su relación concreta.
- Evitar oposiciones sentenciosas como “X no es un detalle: es Y” cuando funcionan como eslogan y no como argumento verificable.

### Descripciones abstractas sin sustancia

No escribir: “Optimicé la experiencia creando una interfaz intuitiva y elegante”.

Es obligatorio especificar qué cambió, por qué cambió y, cuando exista evidencia, qué efecto produjo. Ejemplo: “Reduje el flujo de cinco a dos pantallas al eliminar campos redundantes de validación”.

Cada afirmación relevante debe intentar responder al menos dos de estas preguntas:

- ¿Qué elemento, flujo o comportamiento cambió?
- ¿Qué señal de usuario o negocio motivó la decisión?
- ¿Qué restricción condicionó la solución?
- ¿Cómo validé la decisión?
- ¿Qué resultado medible u observable obtuve?
- ¿Cuál fue exactamente mi contribución?

Si no existe una métrica validada, no debe inventarse. Se puede declarar evidencia cualitativa, alcance operativo o una limitación: “No tuve acceso al dato de conversión; validé comprensión con cinco pruebas moderadas”.

### Muletillas de transición vacías

Eliminar conectores como *en resumen, en conclusión, vale la pena señalar, es importante destacar* y *dicho esto*. La relación entre ideas debe quedar clara por su orden y contenido.

### Prueba de edición

Antes de aprobar un bloque, comprobar:

1. ¿La frase identifica al responsable de la acción?
2. ¿Nombra un objeto concreto: flujo, estado, componente, campaña o métrica?
3. ¿Explica el criterio o la restricción detrás de la decisión?
4. ¿Diferencia resultados comprobados de expectativas?
5. ¿Podría esta frase aparecer sin cambios en otro portafolio? Si la respuesta es sí, necesita más precisión.

## 3. Estructura estándar de casos de estudio

### 1. Frontmatter

YAML con metadata, rol, timeline, herramientas y métricas sintetizadas. Como mínimo:

- `title`
- `description`
- `slug`
- `role`
- `timeline`
- `tools`
- `metrics`

Las métricas deben ser breves, verificables y coherentes con el cuerpo del caso. Si el proyecto es conceptual o no dispone de datos posteriores al lanzamiento, debe indicarse explícitamente.

### 2. Contexto & Problema de Negocio

Explicar el dolor real del usuario, el comportamiento observado y el impacto comercial u operativo. Delimitar producto, audiencia, momento del flujo y situación inicial. Evitar presentar una solución como si fuera el problema.

### 3. Restricciones & Trade-offs

Documentar límites técnicos, deuda de diseño, regulación, tiempos, dependencias y acceso a datos. Explicar qué cedí, qué protegí y por qué. Un trade-off debe mostrar alternativas reales, no una dificultad genérica.

### 4. Proceso & Decisiones clave

Presentar las hipótesis relevantes, incluidas las descartadas; los descubrimientos que cambiaron el rumbo; y el criterio con el que elegí la solución. No convertir esta sección en una lista ceremonial de métodos.

### 5. Solución & UX Writing

Describir los flujos principales, estados, reglas de interacción y decisiones de contenido. Incluir ejemplos de microcopy cuando sean determinantes para comprensión, confianza, conversión o recuperación de errores.

### 6. Impacto & Aprendizajes

Incluir métricas medibles, evidencia cualitativa o impacto operativo con fuente y periodo cuando estén disponibles. Separar resultados observados de resultados esperados. Cerrar con una reflexión concreta sobre qué haría diferente hoy y por qué.

## 4. Glosario de consistencia

### Criterio general

Escribir en español cuando exista una traducción precisa y habitual. Conservar el anglicismo cuando sea un término estándar de la industria, el nombre oficial de una herramienta o una traducción reduzca la precisión. No alternar español e inglés para un mismo concepto dentro de un caso.

En la primera aparición de un término que pueda resultar ambiguo para reclutamiento generalista, añadir contexto breve. No usar mayúsculas por prestigio; respetar nombres propios y convenciones del producto.

### Términos preferidos

| Usar | Criterio | Evitar o limitar |
| --- | --- | --- |
| **sistema de diseño** | Concepto general en prosa española. | Alternarlo sin motivo con *Design System*. |
| **Design System** | Nombre formal de una iniciativa, disciplina, entregable o etiqueta profesional. | Usarlo como adorno en frases en español. |
| **flujo de usuario** | Prosa general y explicación narrativa. | “Flujo UX” si no aporta precisión. |
| **User Flow** | Nombre de artefacto, etiqueta o entregable reconocido. | Alternarlo con “flujo de usuario” en el mismo contexto. |
| **wireframes** | Anglicismo técnico estándar; en minúscula dentro de una oración. | “Wireframes” como mayúscula genérica. |
| **trade-offs** | Decisiones con beneficios y costos contrapuestos. | Usarlo como sinónimo de restricciones o problemas. |
| **investigación de usuarios** | Actividad general. | *UX Research* cuando no sea una disciplina, rol o etiqueta. |
| **prototipo / prototipado** | Prosa general. | *Prototyping* salvo en etiquetas o nombres formales. |
| **microcopy** | Texto breve funcional dentro de la interfaz. | “Texto UX” como categoría imprecisa. |
| **UX writing** | Disciplina o conjunto de decisiones de contenido en producto. | Confundirlo con tono publicitario. |
| **responsive** | Comportamiento adaptable en interfaces y email; término técnico aceptado. | “Responsivo” si genera ambigüedad. |
| **compliance** | Contexto regulatorio o función formal del sector financiero. | Usarlo sin explicar la restricción concreta. |
| **Design Tokens** | Nombre de la arquitectura o entregable técnico. | “Tokens” sin contexto en audiencia no técnica. |
| **Salesforce Marketing Cloud (SFMC)** | Nombre completo en la primera mención; sigla después. | Introducir solo “SFMC” sin desarrollo previo. |

### Convenciones adicionales

- Preferir **producto digital**, **interfaz**, **estado**, **componente**, **flujo transaccional** y **tasa de conversión** frente a expresiones genéricas como “experiencia”, “solución” o “impacto”.
- Usar **caso de estudio**, no alternar con *case study*.
- Escribir las métricas con unidad, periodo y base de comparación siempre que sea posible.
- Mantener nombres de cargos en su forma oficial; si están en inglés, no traducirlos de manera inconsistente entre páginas.
- Definir una sigla en su primera aparición dentro de cada archivo, salvo siglas universalmente reconocibles para la audiencia.
