---
title: "Allpa — Diseño conductual para liquidez variable | Rodrigo Aquije"
description: "Caso conceptual de Behavioral Design para estructurar ingresos variables, proteger obligaciones futuras y mostrar la liquidez realmente disponible en watchOS e iOS."
slug: "/casos/allpa"
---

# Diseñar para la volatilidad financiera antes de que el saldo se sienta disponible.

## Navegación

- Rodrigo Aquije
- Caso de estudio · Allpa
- Descubrimiento
- Definición
- Arquitectura
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

## Contexto

Allpa · Behavioral finance · Sistema de producto

Un concepto para trabajadores independientes que estructura cada ingreso en el momento en que llega: protege obligaciones futuras y muestra únicamente la liquidez realmente disponible.

Proyecto conceptual independiente. Las cifras de impacto son hipótesis de validación, no resultados de producción.

### Ficha del proyecto

- Rol: Product Designer end-to-end
- Método: Behavioral Design
- Plataformas: watchOS + iOS
- Año: 2026

### Momento de intervención

18:42 · Ingresa un pago de S/ 2,000

En menos de cinco segundos, Allpa separa pagos fijos y colchón antes de que el sesgo de disponibilidad convierta el total en permiso para gastar.

### Problema

Las apps muestran el saldo bruto cuando el dinero llega. El usuario ve abundancia, no compromisos.

### Solución

Allpa aparta obligaciones en T+0 y convierte el saldo protagonista en “lo que puedes gastar”.

### Texto del mockup del hero

- ALLPA
- Intervención contextual
- Ingreso detectado
- S/ 2,000
- S/ 1,429 protegidos
- Ver disponible

Alt text propuesto: Apple Watch con una notificación de Allpa que detecta un ingreso de S/ 2,000, protege S/ 1,429 y ofrece ver el saldo disponible.

## Proceso

El caso se organiza en cinco fases: Descubrimiento, Definición, Arquitectura, Prototipo y Validación.

## Descubrimiento conductual

## El problema no era cuánto ingresaba. Era cuándo se interpretaba ese ingreso.

Las herramientas financieras suelen explicar el gasto después de ocurrido. Allpa interviene en el instante anterior: cuando el dinero entra y todavía puede estructurarse sin quitarle al usuario la última palabra.

### Dato de contexto

70% de la fuerza laboral peruana opera sin un ingreso mensual predecible.

Referencia del caso: INEI, empleo informal 2024.

Este caso combina literatura conductual, datos públicos de mercado y patrones observados en productos financieros. Los arquetipos son hipótesis de diseño, no resultados de entrevistas.

### Sesgo de disponibilidad

Ver S/ 2,000 ahora hace que alquiler e impuestos futuros desaparezcan del cálculo mental.

Respuesta: Mostrar libre neto, no saldo bruto.

### Sesgo del presente

Lo disponible hoy pesa más que una obligación conocida que vence en tres semanas.

Respuesta: Intervenir en T+0 del cobro.

### Contabilidad mental

Sin separación, consumo diario y capital de trabajo compiten dentro de la misma bolsa.

Respuesta: Partición automática y reversible.

La interfaz no debía enseñar a presupuestar. Debía cambiar la decisión que aparece primero.

## Definición del usuario

## Dos formas distintas de vivir la misma incertidumbre.

Los arquetipos permiten probar si el sistema sirve tanto para ingresos personales variables como para flujos donde capital y utilidad conviven en la misma cuenta.

### Luis, 29

Freelancer digital

“Tengo buenos meses, pero nunca sé cuánto está realmente libre.”

- Objetivo: Que un buen ingreso no se diluya en gastos diarios.
- Fricción: Posterga impuestos porque el saldo visible mezcla dinero libre y comprometido.
- Necesidad: Saber de inmediato cuánto puede gastar sin tocar obligaciones.

### Carla, 34

Emprendedora

“La venta entra, pero capital y utilidad siguen siendo el mismo número.”

- Objetivo: Separar operación del negocio y disponibilidad personal.
- Fricción: Hace cuadraturas manuales para entender qué parte del saldo le pertenece.
- Necesidad: Una partición automática, editable y siempre visible.

### Pregunta de diseño

¿Cómo estructurar la liquidez en tiempo real antes de que el saldo bruto detone una decisión impulsiva?

## Arquitectura de decisión

## Del ingreso a la siguiente decisión, incluyendo las ramas incómodas.

El flujo no termina en un happy path. Explica qué ocurre cuando el gasto cabe, cuándo amenaza la cobertura y cómo se conserva la autonomía mediante un override explícito.

### Flujo

1. Llega un ingreso. El sistema detecta el evento y reconstruye el contexto financiero.
2. Partición automática. Pagos fijos y colchón se apartan por defecto, con una ventana para deshacer.
3. Liquidez neta visible. El saldo protagonista cambia de S/ 2,000 a S/ 571.
4. Nueva intención de pago. Antes de transferir, Allpa calcula el efecto sobre la cobertura.
5. Confirmar o proteger. Si alcanza, confirma. Si no, prioriza cancelar y deja el override como acción secundaria.

### Decisiones y trade-offs

#### Fricción intencional

Un paso adicional es válido cuando hace visible una consecuencia financiera antes del gasto.

#### Wearable primero

El reloj atiende decisiones de segundos; el teléfono conserva profundidad y edición.

#### Autonomía preservada

Allpa recomienda y estructura, pero nunca bloquea una compra por la fuerza.

### Auditoría de la propuesta

#### Copy técnico

“Liquidez neta” y “retención estructural” se reemplazaron por lenguaje cotidiano.

#### Confirmación innecesaria

La primera versión pedía aceptar el ahorro; la corrección actúa por defecto y permite deshacer.

#### Jerarquía riesgosa

“Enviar de todas formas” dejó de ser botón principal y pasó a una acción deliberadamente discreta.

## Prototipo dual

## Intervención en el reloj. Comprensión y control en el teléfono.

Cada dispositivo tiene una responsabilidad clara. watchOS reduce la decisión a un vistazo; iOS explica, proyecta y permite editar sin duplicar versiones del mismo dato.

Explorar pantalla

### watchOS

#### Ingreso

- Título: Te llegó un pago
- Monto: S/ 2,000
- Mensaje: Ya separamos S/ 1,429 para tus pagos fijos y colchón.
- CTA principal: Entendido
- Acción secundaria: Deshacer o ajustar
- Decisión: Default nudge: el esfuerzo se coloca del lado de deshacer, no del lado de proteger.

#### Disponible

- Título: Esto te queda para gastar
- Monto: S/ 571
- Mensaje: Pagos fijos cubiertos. Tu colchón sigue seguro.
- CTA: Ver detalle
- Decisión: El sistema confirma cobertura con palabras antes de pedirle al usuario interpretar cifras.

#### Pago

- Título: ¿Vas a pagar esto?
- Monto: S/ 120
- Mensaje: Después te quedan S/ 451 para el resto del mes.
- CTA principal: Sí, pagar
- Acción secundaria: No enviar
- Decisión: Una pausa positiva activa evaluación consciente antes de que el dinero salga.

#### Límite

- Título: Cuidado
- Monto: S/ 48
- Mensaje: Si envías S/ 80, no te alcanzará antes del próximo ingreso.
- CTA principal: Cancelar el pago
- Acción secundaria: Enviar de todas formas
- Decisión: La opción segura recibe el mayor peso visual; el override sigue disponible sin competir.

Alt text propuesto: Serie de pantallas de Allpa en Apple Watch para ingreso, saldo disponible, confirmación de pago y alerta de cobertura crítica.

Decisión en menos de 5 segundos

### iOS

#### Inicio

- Título: Tienes esto para gastar
- Monto: S/ 571
- Mensaje: Pagos fijos S/ 1,229 · Colchón S/ 200
- CTA: Vas bien
- Texto secundario: Próximo pago: alquiler cubierto
- Decisión: El bruto nunca es protagonista. La pantalla se ancla en el saldo accionable.

#### Detalle

- Título: Así se repartió tu dinero
- Monto: S/ 2,000
- Mensaje: Pagos fijos 61% · Colchón 10% · Para gastar 29%
- CTA: Ver próximos pagos
- Texto secundario: Todas las particiones son editables
- Decisión: La transparencia progresiva sostiene confianza en una automatización que mueve dinero.

#### ¿Alcanza?

- Título: Te alcanza con este ritmo
- Monto: 28 días
- Mensaje: 17 días más de cobertura frente al patrón sin Allpa.
- CTA: Revisar proyección
- Texto secundario: Basado en tu ritmo habitual
- Decisión: El valor se expresa como tranquilidad operativa, no como un gráfico abstracto.

#### Movimientos

- Título: Lo que pasó hoy
- Fecha: Martes 14
- Mensaje: Ingreso · Apartado automático · Compra
- CTA: Ver movimiento
- Texto secundario: Automático y voluntario nunca se confunden
- Decisión: Distinguir acciones del sistema preserva la sensación de agencia.

Alt text propuesto: Serie de pantallas de Allpa en iPhone que muestran saldo disponible, partición del ingreso, días de cobertura e historial de movimientos.

- 9:41
- •••
- ALLPA · Inicio
- ALLPA · Detalle
- ALLPA · ¿Alcanza?
- Inicio
- Detalle
- ¿Alcanza?
- Mismo dato, mayor profundidad

### Sistema visual

## Un sistema visual con pocos roles y ninguna decoración gratuita.

- Dorado · #F5A623 · Liquidez disponible y acción principal
- Verde · #3ECF6E · Cobertura y confirmación
- Coral · #FF5A5F · Riesgo crítico
- Arena · #A8957E · Dinero comprometido

## Métricas y resultados

## Lo que debería medirse antes de atribuir impacto.

El concepto aún no tiene un piloto real. La evaluación se formula como hipótesis, límites y señales observables; no como porcentajes inventados.

### Riesgos

#### Fatiga de intervención

Si una sugerencia se ignora repetidamente, el sistema reduce frecuencia y agrupa avisos.

#### Efectivo invisible

Un retiro no puede clasificarse sin participación del usuario; el cálculo adopta el escenario conservador.

#### Aprendizaje inicial

Durante los primeros 45 días las proyecciones tendrán menor precisión y deben comunicarlo.

### Aceptación de la partición

- Pregunta: ¿La intervención llega con el timing y el lenguaje correctos?
- Medición: Comparar aceptación, edición y reversión durante T+0.

### Tasa de override

- Pregunta: ¿La alerta protege o empieza a cansar?
- Medición: Medir cuántas personas continúan pese a una cobertura crítica.

### Persistencia de reservas

- Pregunta: ¿Las obligaciones permanecen protegidas hasta su vencimiento?
- Medición: Observar cuánto dura cada bucket antes de una edición o retiro.

### Estrés financiero declarado

- Pregunta: ¿La persona hace menos cálculo mental cotidiano?
- Medición: Seguimiento cualitativo y escala breve mes a mes.

### Modelo de negocio

- Base: Particiones y visibilidad del disponible.
- Pro: Pronósticos y auditorías de tendencia.
- B2B2C: Licenciamiento como capa conductual para instituciones financieras.

### Simular cobertura

Una demostración del modelo, no una predicción financiera.

- Día
- Disponible estimado
- Cobertura estable
- Alerta preventiva
- Límite crítico

El valor de Allpa no es ahorrar por el usuario. Es evitar que administrar su liquidez ocupe espacio mental todos los días.

## Siguiente caso

### Vaca

Un fondo compartido que reemplaza al “me debes”.

Producto conceptual para roommates: todos aportan antes del gasto y la casa paga desde un balance común.

- Social FinTech
- Wallet UX
- Design Thinking

CTA: Ver caso

Enlace: /casos/vaca

## Pie de página

- © 2026 Rodrigo Aquije
- Diseñado y construido en Lima.
- Email
- LinkedIn
