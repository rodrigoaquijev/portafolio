---
title: "Allpa — Repartir cada cobro antes de gastarlo | Rodrigo Aquije"
description: "Caso conceptual de producto para profesionales independientes con ingresos variables: registrar un cobro, repartirlo entre pagos, colchón y disponible, y entender cuánto queda según sus registros."
slug: "/casos/allpa"
role: "Product Designer · producto, identidad y prototipo"
timeline: "Septiembre de 2026 · en curso"
tools:
  - "Behavioral Design"
  - "React, Tailwind CSS y Framer Motion"
  - "Codex y Claude Code"
  - "Generación de imágenes con IA para exploración de marca"
metrics:
  - "Prototipo navegable de 3 pantallas con datos ficticios"
  - "3 pruebas automatizadas del modelo monetario"
  - "Proyecto conceptual · sin pruebas con participantes ni métricas de uso"
project_type: "Proyecto conceptual"
status: "Prototipo en curso"
---

# Cobrar en fechas y montos distintos. Saber cuánto queda sin hacer la cuenta otra vez.

## Navegación

- Rodrigo Aquije
- Caso de estudio · Allpa
- Contexto
- Replanteamiento
- Decisiones
- Prototipo
- Validación
- Activar sonido
- Desactivar sonido
- Sonido apagado
- Sonido activo
- Cambiar tema
- Modo oscuro
- Modo claro
- Cambiar idioma
- View in English
- ES
- Abrir navegación
- Cerrar navegación

## Contexto y problema

Allpa · Producto financiero personal · Concepto

Allpa es un concepto de app para profesionales independientes que cobran por proyecto, en fechas y montos variables. Cada vez que entra un cobro, la persona lo registra y decide cuánto va a sus pagos próximos, cuánto a su colchón y cuánto le queda disponible.

Proyecto conceptual independiente. Las cifras de contexto provienen de fuentes públicas. Todos los montos del prototipo son ficticios.

### Ficha del proyecto

- Rol: Product Designer · definición de producto, identidad visual, interacción y prototipo
- Alcance actual: modelo del reparto, marca, tres pantallas navegables y reglas de contenido
- Plataforma: app móvil; prototipo web a 390 px
- Año: 2026

### El problema

Cuando los ingresos varían, el saldo de la cuenta mezcla dinero con funciones distintas: el alquiler del mes, impuestos, gastos del trabajo y lo que realmente puede gastarse. La persona tiene que separar esas partes de memoria, en una hoja de cálculo o en notas, cada vez que cobra.

En 2024, 7,18 millones de personas en el Perú trabajaban de forma independiente, el 41,5 % de la población ocupada. Es un grupo diverso en ingresos, formalidad y formas de cobro; lo uso como contexto de escala, no como audiencia del producto.

Fuente: [INEI, Indicadores del Mercado Laboral a nivel departamental 2022–2024, cuadro 2.6](https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib2029/libro.pdf).

Una encuesta nacional de SBS y PRODUCE encontró que el 43 % de los microempresarios mantenía prácticas adecuadas de separación entre las cuentas del negocio y las personales.

Fuente: [SBS, Capacidades financieras de los microempresarios peruanos, encuesta 2021](https://www.sbs.gob.pe/Portals/0/jer/pub_nota_politica/NOTA-SBS-8.pdf).

Estos datos muestran escala y una fricción plausible. No demuestran que la audiencia de Allpa tenga este problema ni que quiera resolverlo con una app. Esa comprobación es el primer paso de la investigación pendiente.

### Audiencia inicial

Profesionales independientes urbanos —consultores, diseñadores, desarrolladores, fotógrafos o creadores— que reciben sus pagos por transferencia, Yape, Plin o efectivo, y que hoy separan su dinero con notas, hojas de cálculo o cálculo mental.

### Pregunta de diseño

¿Cómo puede una persona con ingresos variables decidir qué hacer con cada cobro en pocos segundos y entender después cuánto le queda, sin entregar el acceso a sus cuentas?

## Replanteamiento: de leer cuentas a registrar cobros

La primera versión de Allpa proponía conectar las cuentas bancarias, detectar ingresos y aplicar reglas automáticas, con Apple Watch como extensión. Al revisar qué necesitaba esa propuesta para funcionar, encontré dependencias que no podía resolver ni verificar desde un proyecto conceptual: un proveedor de lectura de movimientos con cobertura en el Perú, permisos, sincronización, costo y tratamiento de datos financieros.

Decidí replantear el alcance:

- **Registro manual asistido.** La persona registra el cobro y su origen. Yape, Plin, transferencia y efectivo identifican de dónde vino el dinero; no implican conexión con esos servicios.
- **Organización informativa.** Allpa organiza registros. El dinero permanece donde la persona lo tiene; la app no custodia fondos ni ejecuta pagos.
- **Teléfono primero.** El reloj queda como anexo posible, solo si aporta una ventaja concreta después de probar el flujo en el teléfono.

### El costo de esta decisión

Registrar a mano es trabajo. Si el esfuerzo de registrar supera el beneficio de ver el reparto, la persona abandonará. Por eso el objetivo de diseño es que el registro recurrente sea muy breve, y la investigación deberá comprobar si ese costo resulta aceptable.

### Alternativas existentes

Revisé descripciones públicas de productos cercanos, sin probarlos: NotiCobro anuncia el registro de cobros a partir de notificaciones; Zaldo anuncia captura por Gmail, confirmación y alertas de presupuesto; YNAB documenta la asignación manual y automática del dinero. Con esa revisión descarté afirmar que las alternativas son pasivas o que anticipar gastos es exclusivo de Allpa.

La hipótesis diferencial combina el momento del cobro, un reparto acotado a tres partes, lenguaje local y una visualización propia del reparto.

## Restricciones y trade-offs

### Precisión frente a esfuerzo

El disponible solo es tan correcto como los registros. Mostré la cifra con el contexto «Según tus registros» para no presentarla como un saldo bancario en tiempo real. Cuando falten movimientos conocidos, la etiqueta prevista es «Disponible por revisar».

### Lenguaje cercano frente a promesas falsas

Asignar dinero a un pago no paga ese pago. Descarté textos como «alquiler pagado» o «plata protegida» y usé «Alquiler contemplado en tu plan». La frase es más larga, pero describe lo que el registro realmente hace.

### Identidad expresiva frente a lectura de datos

Quería una visualización reconocible del reparto. Si las formas cambiaran de tamaño según el monto, tendrían que funcionar como un gráfico con escala. Decidí que las capas identifiquen categorías con tamaños fijos y que los importes escritos sean la única representación cuantitativa.

### Prototipo acotado

El prototipo guarda un solo cobro editable en memoria durante la sesión. No acumula varios ingresos, no persiste al recargar y no integra cuentas. Esta restricción me permitió cerrar primero la lógica del reparto y la identidad antes de diseñar el modelo de varios cobros.

## Proceso y decisiones clave

### Comportamiento que quiero cambiar

- **Conducta actual:** mirar el saldo total como dinero disponible y calcular después qué parte estaba comprometida.
- **Conducta objetivo:** decidir el destino de cada cobro cuando llega y consultar primero lo disponible.
- **Momento de intervención:** el registro del cobro.

Usé la literatura de economía conductual para formular mecanismos de diseño. No prueba que esta audiencia los experimente ni que Allpa cambie su conducta.

| Hipótesis de barrera | Decisión de diseño | Qué observaré en pruebas |
| --- | --- | --- |
| Cuesta reconstruir qué parte del saldo está comprometida. | Disponible destacado con desglose en la misma vista. | Si la persona explica el cálculo y reconoce que depende de sus registros. |
| Las personas ya asignan funciones al dinero aunque el banco lo muestre como un monto ([contabilidad mental, Thaler](https://doi.org/10.1002/%28SICI%291099-0771%28199909%2912%3A3%3C183%3A%3AAID-BDM318%3E3.0.CO%3B2-F)). | Tres categorías visibles y editables: pagos, colchón y disponible. | Si los nombres coinciden con cómo la persona describe su dinero. |
| Separar visualmente un recurso ayuda a controlar su consumo ([particiones, Cheema y Soman](https://doi.org/10.1509/jmkr.45.6.665)). | Capas separadas para cada categoría, inspiradas en andenes. | Si la separación se entiende sin sugerir que el dinero quedó bloqueado. |
| Decidir el reparto en cada cobro exige demasiado esfuerzo ([opción predeterminada, Madrian y Shea](https://doi.org/10.1162/003355301753265543)). | Un reparto sugerido que la persona ajusta antes de guardar. | Si la persona anticipa, edita y corrige el reparto, o lo acepta sin leerlo. |

### Decisión 1 · Qué cifra aparece primero

En Inicio, la cifra principal es el disponible del último cobro, acompañada de «Según tus registros». Debajo aparecen las tres partes del reparto y el próximo pago con su estado: «Monto completo en tu plan», «Faltan S/ 150» o «Aún sin asignar · S/ 500».

Prioricé el disponible porque responde a la pregunta que motiva abrir la app. El saldo total no desaparece: forma parte del desglose.

### Decisión 2 · Organizar sin confundirlo con mover dinero

El riesgo principal del registro manual es que la persona crea que Allpa movió su dinero. Agregué en el registro la frase «Organizas tus registros. No mueves dinero.», y la acción final dice «Guardar reparto» en vez de «Confirmar» o «Transferir».

Al guardar, un mensaje anunciado a lectores de pantalla confirma «Reparto guardado.». La animación de las capas acompaña ese cambio, pero nunca reemplaza la confirmación escrita.

### Decisión 3 · Mostrar un faltante sin culpa

Cuando el cobro no alcanza para un pago, el modelo nunca muestra un disponible negativo ni esconde la diferencia. En el escenario de un cobro de S/ 350 con un alquiler de S/ 500, la pantalla de reparto asigna S/ 350 a pagos y dice «Al alquiler le faltan S/ 150». El faltante se muestra aparte, como un dato para decidir.

Dejar el colchón en cero también es una decisión válida. En ese caso la capa dice «Esta vez, sin aporte», sin advertencias ni tono de reproche.

## Solución y UX writing

### Flujo del prototipo

Inicio → Registrar cobro → Reparto → Inicio actualizado

1. **Inicio.** Muestra el disponible según los registros, las tres partes del último cobro y el próximo pago. Sin registros, invita a empezar: «Empieza con un cobro. Lo ordenamos contigo.».
2. **Registrar cobro.** Pregunta «¿Cuánto recibiste?» y «¿Por dónde te pagaron?». Ofrece «Usar cobro habitual» como atajo que rellena el campo, pero no guarda nada por sí solo. Valida el monto con «Escribe un monto mayor a cero, con hasta dos decimales.».
3. **Reparto.** Muestra las tres capas con sus importes. La persona ajusta pagos y colchón; el disponible se recalcula al instante. «Todavía puedes ajustar antes de guardar.» recuerda que nada quedó fijado.
4. **Inicio actualizado.** Refleja el reparto guardado y el estado del próximo pago.

En escritorio, las tres pantallas aparecen juntas para revisar el recorrido completo. En móvil se muestra una pantalla por vez.

### Escenarios de prueba

| Escenario | Cobro | Pagos | Colchón | Disponible | Faltante del alquiler |
| --- | ---: | ---: | ---: | ---: | ---: |
| Cobro holgado | S/ 1,200 | S/ 500 | S/ 120 | S/ 580 | — |
| Faltante | S/ 350 | S/ 350 | S/ 0 | S/ 0 | S/ 150 |
| Colchón a cero | S/ 1,200 | S/ 500 | S/ 0 | S/ 700 | — |

### Regla monetaria

`Cobro − pagos − colchón = disponible`

El modelo guarda los importes en céntimos. Modificar una categoría respeta lo asignado a la otra, no permite asignar más de lo recibido y nunca asigna al alquiler más de su monto. Tres pruebas automatizadas comprueban estas reglas en los tres escenarios.

### Identidad

La identidad parte del nombre. *Allpa* significa tierra o suelo en quechua; la alpaca es una asociación fonética de marca y no una traducción. Usé generación de imágenes con IA para explorar direcciones; elegí la alpaca de cuerpo entero por su silueta reconocible y la reconstruí como vector editable para el isotipo y el App Icon.

Los andenes son el recurso gráfico del reparto: pagos en la base, colchón al centro y disponible arriba. Cada categoría tiene un color propio, separado de los colores de éxito, advertencia y error, y siempre va acompañada de etiqueta e importe.

- Tipografía: Fraunces para marca y titulares; Manrope para interfaz e importes, con cifras tabulares.
- Contraste medido de los pares de texto del sistema: todos superan 4,5:1. Esto no equivale a una auditoría completa de accesibilidad.
- La animación de asentamiento respeta la preferencia de movimiento reducido.

### Voz del producto

Tuteo, frases cortas y vocabulario cotidiano: «cobraste», «plata», «colchón». La personalidad más expresiva aparece al empezar y al guardar; ante un faltante, la interfaz explica el monto y las opciones con calma.

## Validación y aprendizajes

### Estado actual

- Existe: modelo monetario con pruebas, marca v1, tres pantallas navegables y verificación técnica en navegador del guardado, el faltante, el ajuste con teclado y la vista móvil a 390 px.
- No existe todavía: entrevistas, pruebas con participantes, modelo de varios cobros, registro de gastos ni auditoría completa de accesibilidad.

No hay métricas de uso. Las señales siguientes son criterios de validación, no resultados.

### Plan de validación

Primero, entre 4 y 6 conversaciones con profesionales independientes sobre un cobro reciente: cómo lo recibieron, qué separaron y con qué herramienta. Después, una ronda de unas 5 pruebas moderadas con datos ficticios.

Tareas previstas:

1. Registrar un cobro y explicar con sus palabras cuánto queda disponible.
2. Ajustar el reparto para dejar el colchón en cero.
3. Interpretar un faltante en el alquiler.
4. Explicar si Allpa movió dinero al guardar.
5. Registrar un segundo cobro y decir si repetiría la tarea cada vez que cobra.

La quinta tarea pone a prueba el supuesto más débil del proyecto: que el beneficio del reparto compensa el esfuerzo del registro manual.

### Lo que aprendí hasta aquí

Mi experiencia en análisis de riesgo crediticio me llevó a preguntar primero qué datos necesitaba el sistema y qué podía fallar. Esa pregunta hizo caer la primera versión: la promesa de leer cuentas automáticamente dependía de una integración que no podía verificar. Reducir el alcance a registros informativos hizo el producto más modesto y más honesto, y desplazó el riesgo principal hacia algo que sí puedo probar: el costo del hábito de registrar.

## Fuentes

- INEI, [Indicadores del Mercado Laboral a nivel departamental 2022–2024](https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib2029/libro.pdf).
- SBS, [Capacidades financieras de los microempresarios peruanos](https://www.sbs.gob.pe/Portals/0/jer/pub_nota_politica/NOTA-SBS-8.pdf), encuesta 2021.
- Richard H. Thaler, [Mental Accounting Matters](https://doi.org/10.1002/%28SICI%291099-0771%28199909%2912%3A3%3C183%3A%3AAID-BDM318%3E3.0.CO%3B2-F), 1999.
- Amar Cheema y Dilip Soman, [The Effect of Partitions on Controlling Consumption](https://doi.org/10.1509/jmkr.45.6.665), 2008.
- Brigitte C. Madrian y Dennis F. Shea, [The Power of Suggestion: Inertia in 401(k) Participation and Savings Behavior](https://doi.org/10.1162/003355301753265543), 2001.
- [NotiCobro — ficha en Google Play](https://play.google.com/store/apps/details?id=com.noticobro), [Zaldo](https://zaldo.pe/) y [YNAB — Assigning Your Money](https://support.ynab.com/en_us/assigning-your-money-a-guide-SypgkrNJi): capacidades declaradas, no verificadas mediante uso.
- [SoyQuechua — Allpa: tierra](https://blog.soyquechua.org/tierra/).

## Siguiente caso

### Vaca

Un fondo compartido que reemplaza al “me debes”.

Producto conceptual para personas que viven con roommates: cada integrante aporta antes del gasto y los pagos comunes salen de un mismo fondo.

- Gastos compartidos
- Fondo común
- Producto conceptual

CTA: Ver caso

Enlace: /casos/vaca

## Pie de página

- © 2026 Rodrigo Aquije
- Diseñado y construido en Lima.
- Email
- LinkedIn
