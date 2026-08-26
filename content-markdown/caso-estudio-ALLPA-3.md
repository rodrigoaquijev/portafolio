---
title: "Allpa — Behavioral Design para ingresos variables | Rodrigo Aquije"
description: "Caso conceptual de Behavioral Design para profesionales independientes que cobran digitalmente y necesitan separar obligaciones, reserva y dinero disponible."
slug: "/casos/allpa"
role: "Product Designer · concepto y estrategia conductual"
timeline: "2026"
tools:
  - "Behavioral Design"
  - "Arquitectura de interacción"
  - "UX writing"
metrics:
  - "43 % de microempresarios separa adecuadamente sus cuentas personales y del negocio"
  - "≈15 % del tráfico móvil en Perú corresponde a iOS · septiembre de 2025"
  - "Proyecto conceptual · sin métricas postlanzamiento"
status: "Conceptual"
---

# Convertir un ingreso variable en una decisión clara sobre cuánto gastar.

## Navegación

- Rodrigo Aquije
- Caso de estudio · Allpa
- Contexto
- Método
- Arquitectura
- Interacción
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

## Contexto y oportunidad

Allpa · Behavioral Design · Sistema de producto

Allpa es un concepto para profesionales independientes urbanos que cobran por transferencia, administran obligaciones recurrentes y ya utilizan un iPhone. La propuesta interviene cuando entra el dinero: separa pagos próximos y una reserva personal antes de mostrar cuánto queda disponible para gastar.

Desarrollé este proyecto para aplicar Behavioral Design a una pregunta de producto financiero: ¿cómo puede una interfaz influir en la primera interpretación del saldo sin quitarle control a la persona?

Proyecto conceptual independiente. Las cifras de contexto provienen de fuentes públicas; los indicadores de producto definen cómo validaría la propuesta.

### Ficha del proyecto

- Rol: Product Designer · concepto y estrategia conductual
- Método: Behavioral Design
- Alcance: Hipótesis de producto, arquitectura de decisión, estados y UX writing
- Plataformas propuestas: iOS como producto principal · watchOS como extensión opcional
- Año: 2026

### Momento de intervención

18:42 · Ingresa un pago de S/ 2.000

La persona configuró S/ 1.229 para pagos próximos y una reserva del 10 %. Cuando recibe S/ 2.000, Allpa presenta el cálculo antes de mostrar el resultado:

- Ingreso recibido: S/ 2.000
- Pagos próximos: − S/ 1.229
- Reserva del 10 %: − S/ 200
- Disponible para gastar: S/ 571

Los montos son ilustrativos y mantienen la coherencia numérica necesaria para seguir la lógica del producto.

### Problema

El saldo total reúne dinero con funciones distintas: consumo diario, impuestos, capital de trabajo y pagos próximos. Cuando todas esas categorías aparecen como una sola cifra, la persona debe reconstruir mentalmente cuánto puede usar.

Allpa traslada ese cálculo a la interfaz y lo sitúa antes de la siguiente decisión de gasto.

### Propuesta

Cada ingreso activa una distribución editable. El sistema muestra el dinero disponible junto con una explicación breve y mantiene accesibles el cálculo completo, los pagos incluidos, las reglas aplicadas y la opción de revertir.

### Contenido del hero

- ALLPA
- Tus reglas se aplicaron
- Te llegaron S/ 2.000
- S/ 571 disponibles
- S/ 1.429 separados según tus reglas
- Ver cálculo

Alt text propuesto: Representación conceptual de Allpa en Apple Watch. Una notificación muestra un ingreso de S/ 2.000, S/ 571 disponibles y un acceso al cálculo aplicado.

## Audiencia y alcance inicial

### 7,18 millones

En 2024, el 41,5 % de la población ocupada del Perú trabajaba de forma independiente. Esta categoría reunía a 7,18 millones de personas con distintos niveles de ingreso, grados de formalidad, formas de cobro y acceso tecnológico. Por esa diversidad, funciona como contexto de mercado y requiere una segmentación adicional para definir la audiencia de Allpa.

Fuente: [INEI, Indicadores del Mercado Laboral a nivel departamental 2022–2024, cuadro 2.6](https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib2029/libro.pdf).

### 43 %

Una encuesta nacional de SBS y PRODUCE encontró que el 43 % de los microempresarios mantenía prácticas adecuadas de separación entre las cuentas del negocio y las personales. El 64 % hacía seguimiento de sus registros financieros.

Fuente: [SBS, Capacidades financieras de los microempresarios peruanos, encuesta 2021](https://www.sbs.gob.pe/Portals/0/jer/pub_nota_politica/NOTA-SBS-8.pdf).

Los datos muestran la escala del trabajo independiente y una fricción concreta al separar dinero personal y operativo. Para la primera versión acoté la audiencia mediante comportamientos financieros y condiciones de uso.

### Audiencia inicial

Profesionales independientes urbanos —por ejemplo, consultores, diseñadores, desarrolladores, fotógrafos o creadores— que:

- reciben la mayor parte de sus pagos por transferencias bancarias o billeteras digitales;
- administran impuestos, servicios, cuotas o gastos del negocio desde sus cuentas personales;
- tienen ingresos suficientes para cubrir sus obligaciones, pero enfrentan variaciones en la fecha y el monto de cada cobro;
- ya utilizan un iPhone y están dispuestos a conectar sus movimientos financieros;
- realizan actualmente la separación mediante notas, hojas de cálculo, cuentas distintas o cálculo mental.

El producto completo funciona en iPhone. Apple Watch añade una intervención breve cuando llega un ingreso o un gasto amenaza la reserva.

### Estrategia de plataforma

iOS funciona como un MVP acotado para probar la lógica conductual y la continuidad entre teléfono y reloj. Esta decisión prioriza profundidad del prototipo sobre alcance inicial.

La elección tiene un costo claro. En septiembre de 2025, Android representaba el 84,5 % del tráfico móvil medido por Statcounter en Perú e iOS, cerca del 15 %. Si la intervención demuestra valor, la arquitectura debe trasladarse a Android; mantener el producto solo en iOS limitaría innecesariamente su alcance.

Fuente: [Statcounter, participación de sistemas operativos móviles en Perú, septiembre de 2025](https://gs.statcounter.com/os-market-share/mobile/peru/d17971.top).

En Android, el núcleo puede trasladarse mediante notificaciones accionables, widgets y la aplicación móvil. Wear OS sería una extensión posterior.

## Método: Behavioral Design aplicado al flujo financiero

Organicé el proceso alrededor de una conducta específica y del contexto que la activa. La metodología conecta evidencia, hipótesis y decisiones de interfaz en seis pasos.

### 1. Definir la conducta

- Conducta actual: Interpretar el saldo total como dinero disponible y calcular después qué parte estaba comprometida.
- Conducta objetivo: Consultar primero el disponible y conservar cubiertos los pagos registrados.
- Momento crítico: La llegada de un ingreso.
- Señal de éxito: La reserva se mantiene hasta su uso previsto sin aumentar la sensación de pérdida de control.

### 2. Delimitar a quién debe servir

Construí dos arquetipos estratégicos para representar situaciones distintas dentro del mismo problema. Funcionan como herramientas de diseño y quedan pendientes de contraste mediante investigación con la audiencia.

#### Luis, 32 · Consultor independiente

- Cobra por proyectos mediante transferencias y utiliza su iPhone para operar con el banco.
- Separa impuestos y gastos próximos mediante una hoja de cálculo.
- Necesita reconocer cuánto puede gastar cuando un cliente paga antes o después de la fecha prevista.

#### Carla, 36 · Directora de un estudio creativo

- Recibe pagos digitales de clientes y administra parte de la operación desde una cuenta personal.
- Capital de trabajo, impuestos y dinero personal comparten el saldo.
- Necesita diferenciar esas categorías y corregir la distribución cuando cambia la carga de proyectos.

### 3. Diagnosticar las barreras conductuales

#### Saliencia del saldo total

La cifra más visible concentra la atención. En el escenario, los S/ 2.000 pueden dominar la lectura mientras los pagos futuros permanecen fuera de la interfaz principal.

Respuesta de diseño: Convertir el disponible en la cifra protagonista y conservar el saldo total dentro del desglose.

#### Sesgo del presente

Una compra inmediata puede pesar más que una obligación conocida cuyo vencimiento todavía parece lejano.

Respuesta de diseño: Intervenir cuando llega el ingreso y mostrar la consecuencia de un gasto antes de confirmarlo.

#### Contabilidad mental

Las personas asignan funciones distintas al dinero aunque la cuenta bancaria lo muestre como un solo monto.

Respuesta de diseño: Representar pagos, reserva y gasto corriente como categorías visibles y editables.

### 4. Elegir los mecanismos de intervención

#### Opción predeterminada

Las reglas configuradas distribuyen el ingreso en el momento en que llega. La persona puede revisar, editar o revertir la operación.

#### Partición

Separar visualmente el dinero reduce la ambigüedad entre capital de trabajo, obligaciones y consumo diario.

#### Intervención oportuna

El sistema actúa durante el ingreso y antes de un gasto que amenaza la cobertura, cuando la información todavía puede cambiar la decisión.

#### Fricción intencional

Allpa añade un paso cuando un pago usaría dinero protegido. La fricción comunica la consecuencia y conserva una salida explícita para continuar.

#### Retroalimentación inmediata

Cada acción muestra qué cambió, cuánto queda y qué categoría se vería afectada.

### 5. Traducir la intervención a un sistema

La metodología define reglas, estados y excepciones antes de concentrarse en la apariencia. El flujo necesita responder qué ocurre cuando la clasificación es correcta, cuando la persona ajusta una distribución y cuando un gasto supera el disponible.

### 6. Definir cómo aprender

La propuesta se evalúa mediante comprensión, edición, reversión y persistencia de las reservas. Estas señales permiten comprobar la conducta objetivo antes de atribuir impacto financiero.

## Arquitectura de decisión

### La configuración ocurre antes del primer ingreso

El disponible puede resultar comprensible porque la persona participa en la creación de sus reglas. El flujo inicial contiene cuatro decisiones:

1. Conectar una cuenta y autorizar la lectura de movimientos.
2. Revisar los pagos recurrentes detectados y confirmar cuáles debe proteger Allpa.
3. Definir una reserva como porcentaje o monto fijo.
4. Previsualizar la distribución con un ingreso de ejemplo antes de activar la regla.

Allpa conserva el origen de cada componente. Si detecta un nuevo pago o pierde acceso a una cuenta, marca el cálculo para revisión en vez de presentar el disponible con el mismo nivel de certeza.

### Flujo posterior al abono

1. Llega un abono. Allpa identifica el movimiento y solicita confirmación cuando el origen es ambiguo.
2. El sistema aplica las reglas configuradas para pagos próximos y reserva personal.
3. La confirmación muestra el ingreso, cada descuento y el disponible resultante.
4. La persona puede revisar, editar o revertir la distribución.
5. Antes de un pago, Allpa calcula cómo cambia la cobertura.
6. Si el gasto usa dinero protegido, la interfaz prioriza cancelar y mantiene disponible la opción de continuar.

### Una cifra con trazabilidad

El disponible sigue siempre la misma estructura:

`Ingreso recibido − pagos confirmados − reserva configurada = disponible para gastar`

En el escenario principal:

`S/ 2.000 − S/ 1.229 − S/ 200 = S/ 571`

La acción “Cómo calculamos S/ 571” abre el detalle de los pagos incluidos, la regla de reserva, la última actualización y los datos que Allpa todavía no considera. Desde ahí se puede corregir una categoría sin buscarla en configuración.

### Decisiones y trade-offs

#### Automatización y control

Aplicar la distribución por defecto reduce el cálculo repetitivo. La edición y la reversión permanecen visibles para evitar que la automatización se perciba como una pérdida de autonomía.

#### Protección y liquidez

El dinero protegido sigue siendo accesible. Usarlo exige una confirmación adicional que especifica el monto y la categoría afectada.

#### Wearable y teléfono

El iPhone contiene el flujo completo: configuración, cálculo, edición, proyección e historial. Apple Watch es una extensión opcional para ingresos y alertas; ninguna función esencial depende del reloj. Esta jerarquía permite probar la intervención contextual sin convertir la compra de otro dispositivo en una condición de uso.

#### Precisión y confianza

El cálculo depende de los movimientos y pagos que Allpa puede reconocer. La interfaz comunica el resultado como estimación, explica sus supuestos y permite corregir una clasificación.

### Auditoría de la propuesta

#### Terminología cotidiana

Reemplacé “liquidez neta” y “retención estructural” por “esto te queda para gastar”, “pagos próximos” y “reserva”.

#### Regla editable

La primera versión pedía aceptar cada distribución. La revisión aplica las reglas configuradas y muestra una opción inmediata para ajustar o deshacer.

#### Consecuencia explícita

El CTA “Enviar de todas formas” ocultaba la consecuencia financiera. Lo reescribí como “Usar S/ 32 de tu reserva”.

## Sistema de interacción propuesto

Definí los estados y el microcopy que se convertirán en un prototipo. iOS contiene la experiencia completa y watchOS funciona como una capa complementaria para momentos que admiten una respuesta breve.

### Alcance del prototipo

#### iOS · Flujo principal

1. Conexión y permisos.
2. Confirmación de pagos recurrentes detectados.
3. Configuración de la reserva.
4. Vista previa de la regla con un ingreso de ejemplo.
5. Inicio con el disponible y su distribución.
6. “Cómo calculamos tu disponible”.
7. Edición de pagos y reserva.
8. Proyección y supuestos.
9. Historial con origen de cada movimiento.
10. Confirmación para usar dinero protegido.

#### watchOS · Extensión opcional

1. Ingreso recibido.
2. Disponible y distribución breve.
3. Consecuencia de un pago dentro de la cobertura.
4. Alerta cuando un gasto usa dinero protegido.

Estas pantallas se diseñarán y prototiparán en la siguiente fase. La definición actual establece su contenido, jerarquía y relación dentro del flujo.

### watchOS · Decidir de un vistazo

#### Ingreso

- Título: Te llegaron S/ 2.000
- Monto principal: S/ 571 disponibles
- Mensaje: S/ 1.429 fueron a pagos y reserva según tus reglas.
- Acción principal: Ver cálculo
- Acción secundaria: Ajustar
- Decisión: Presentar resultado y origen en una misma lectura, con acceso inmediato al detalle.

#### Disponible

- Título: Esto te queda para gastar
- Monto: S/ 571
- Mensaje: Pagos próximos S/ 1.229 · Reserva S/ 200
- Acción principal: Cómo lo calculamos
- Decisión: Explicar el cálculo en la misma vista que presenta el resultado.

#### Pago dentro de la cobertura

- Título: Si pagas S/ 120
- Monto restante: S/ 451
- Mensaje: Tus pagos y tu reserva siguen cubiertos.
- Acción principal: Continuar
- Acción secundaria: Cancelar
- Decisión: Traducir el pago a su efecto sobre el dinero restante.

#### Pago que usa la reserva

- Título: Este pago supera tu disponible
- Monto: S/ 80
- Mensaje: Usaría S/ 32 de tu reserva.
- Acción principal: Cancelar el pago
- Acción secundaria: Usar S/ 32 de mi reserva
- Decisión: Dar mayor peso a la opción que conserva la cobertura y mantener una salida informada.

Alt text propuesto: Cuatro estados de Allpa en Apple Watch: ingreso recibido con disponible calculado, distribución breve, saldo posterior a un pago y advertencia cuando el gasto usaría parte de la reserva.

Objetivo de interacción: comprender la consecuencia principal con una mirada breve. El tiempo de lectura debe comprobarse en pruebas.

### iOS · Comprender y editar

#### Configurar las reglas

- Título: ¿Qué quieres proteger cada vez que cobras?
- Pagos detectados: Alquiler · SUNAT · Internet · Cuota del equipo
- Reserva: 10 % de cada ingreso
- Acción principal: Previsualizar regla
- Acción secundaria: Añadir otro pago
- Decisión: Hacer que el usuario participe en la composición del cálculo antes de automatizarlo.

#### Vista previa

- Título: Así funcionará tu regla
- Ejemplo: Si recibes S/ 2.000
- Pagos próximos: − S/ 1.229
- Reserva del 10 %: − S/ 200
- Disponible: S/ 571
- Acción principal: Activar regla
- Acción secundaria: Editar
- Decisión: Permitir que la persona anticipe el resultado y corrija la configuración.

#### Inicio

- Título: Tienes esto para gastar
- Monto: S/ 571
- Referencia: De los S/ 2.000 que recibiste hoy
- Mensaje: Pagos próximos S/ 1.229 · Reserva S/ 200
- Estado: Actualizado hoy a las 18:42
- Acción principal: Cómo calculamos S/ 571
- Decisión: Vincular el disponible con el ingreso que lo originó y mantener visible el acceso al cálculo.

#### Cómo calculamos tu disponible

- Ingreso recibido: + S/ 2.000
- Pagos confirmados: − S/ 1.229
- Reserva del 10 %: − S/ 200
- Disponible para gastar: S/ 571
- Incluye: Alquiler, SUNAT, internet y cuota del equipo
- Aún no incluye: Efectivo, cuentas externas ni movimientos por confirmar
- Acción principal: Revisar pagos
- Acción secundaria: Ajustar reserva
- Decisión: Mostrar la ecuación, el origen de sus componentes y los límites del cálculo en un mismo lugar.

#### Distribución

- Título: Así se repartió tu ingreso
- Monto total: S/ 2.000
- Mensaje: Pagos próximos 61 % · Reserva 10 % · Para gastar 29 %
- Acción principal: Revisar pagos
- Acción secundaria: Editar distribución
- Decisión: Hacer visible la lógica de una automatización que administra dinero.

Los porcentajes están redondeados y corresponden al escenario ilustrativo.

#### Proyección

- Título: Cobertura estimada
- Monto: 28 días
- Mensaje: Basado en tus pagos registrados y tu ritmo de gasto.
- Acción principal: Revisar supuestos
- Decisión: Presentar la proyección junto con las variables que la producen.

#### Movimientos

- Título: Lo que pasó hoy
- Eventos: Ingreso detectado · Distribución automática · Compra
- Acción principal: Ver movimiento
- Etiqueta secundaria: Hecho por Allpa o confirmado por ti
- Decisión: Diferenciar las acciones del sistema de las decisiones de la persona.

Alt text propuesto: Estados de Allpa en iPhone para configurar reglas, revisar un ejemplo, consultar el disponible, entender su cálculo, proyectar cobertura y revisar movimientos.

### Dirección visual

Cada color cumple una función dentro del modelo. Los iconos, etiquetas y mensajes repiten el significado y garantizan una lectura independiente del color.

- Dorado · #F5A623 · Dinero disponible y acción principal
- Verde · #3ECF6E · Cobertura confirmada
- Coral · #FF5A5F · Uso de dinero protegido
- Arena · #A8957E · Pagos y reservas

El contraste y los estados de accesibilidad se validarán cuando existan las pantallas del producto.

## Riesgos y estrategia de validación

### Riesgos del sistema

#### Clasificación incorrecta

Una transferencia entre cuentas o una devolución podría confundirse con un ingreso. Allpa debe pedir confirmación cuando no reconoce el origen y permitir corregir la categoría.

#### Dinero fuera del sistema

El efectivo y las obligaciones no registradas reducen la precisión del disponible. La interfaz identifica qué información incluyó y cambia el estado a “Disponible por revisar” cuando existen movimientos sin clasificar o una cuenta perdió conexión.

#### Fatiga de intervención

Alertar en cada movimiento puede convertir la ayuda en ruido. Las pruebas deben definir qué cambios de cobertura justifican una interrupción y cuáles pueden agruparse.

#### Confianza y privacidad

La propuesta requiere acceso a movimientos financieros. Integré la explicación de permisos, uso de datos y reversión en los momentos del flujo donde la persona entrega o modifica ese acceso.

### Marco de medición

#### Comprensión del disponible

- Pregunta: ¿La persona puede explicar cómo se calcularon los S/ 571?
- Medición: Tarea moderada, explicación con sus propias palabras y errores de interpretación.

#### Aceptación de la distribución

- Pregunta: ¿La regla aplicada coincide con lo que la persona esperaba?
- Medición: Distribuciones aceptadas, editadas y revertidas después de un ingreso.

#### Uso de dinero protegido

- Pregunta: ¿La alerta cambia la decisión sin impedir que la persona continúe?
- Medición: Continuaciones, cancelaciones y comprensión de la categoría afectada.

#### Persistencia de las reservas

- Pregunta: ¿Los pagos registrados conservan cobertura hasta su fecha prevista?
- Medición: Tiempo que permanece cada reserva y motivo de las ediciones o retiros.

#### Carga mental percibida

- Pregunta: ¿Allpa reduce el cálculo cotidiano o añade otra tarea de administración?
- Medición: Entrevistas posteriores a las tareas y seguimiento periódico durante un eventual piloto.

Hasta completar un piloto, estas métricas funcionan como criterios de validación y mantienen separado el impacto esperado de los resultados observados.

### Hoja de ruta de plataforma

- Fase 1 · iOS: Configuración, distribución, cálculo, proyección e historial.
- Extensión opcional · watchOS: Ingresos, disponible y alertas accionables.
- Fase 2 · Android: Trasladar el flujo principal y adaptar la intervención a notificaciones y widgets.
- Extensión posterior · Wear OS: Evaluarla solo si el uso del reloj aporta una señal distinta a la del teléfono.

El paso a Android depende de validar el mecanismo conductual, pero forma parte de la estrategia de alcance desde el inicio.

### Hipótesis de adopción comercial

- Base: Distribución de ingresos y visibilidad del disponible.
- Pro: Proyecciones y revisión de tendencias.
- B2B2C: Integración como capa conductual dentro de una institución financiera.

La disposición de pago, la viabilidad de integración y el modelo comercial quedan pendientes de validación.

## Aprendizaje

Mi experiencia previa en análisis de riesgo influyó en la forma de construir Allpa: definí qué datos necesita el sistema, qué supuestos pueden fallar y qué consecuencia debe aparecer antes de una decisión financiera.

Al definir la distribución automática identifiqué dos condiciones para sostener la confianza: explicar cada monto y permitir su reversión. El siguiente paso es diseñar las pantallas de iOS y watchOS, construir el prototipo y probarlo con profesionales independientes bancarizados que ya utilizan iPhone. La primera validación comprobará si pueden reconstruir el cálculo de S/ 571, corregir una regla y distinguir el dinero disponible del dinero protegido.

## Fuentes conductuales

- Richard H. Thaler, [Mental Accounting Matters](https://doi.org/10.1002/%28SICI%291099-0771%28199909%2912%3A3%3C183%3A%3AAID-BDM318%3E3.0.CO%3B2-F), 1999.
- David Laibson, [Golden Eggs and Hyperbolic Discounting](https://doi.org/10.1162/003355397555253), 1997.
- Amar Cheema y Dilip Soman, [The Effect of Partitions on Controlling Consumption](https://doi.org/10.1509/jmkr.45.6.665), 2008.
- Brigitte C. Madrian y Dennis F. Shea, [The Power of Suggestion: Inertia in 401(k) Participation and Savings Behavior](https://doi.org/10.1162/003355301753265543), 2001.

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
