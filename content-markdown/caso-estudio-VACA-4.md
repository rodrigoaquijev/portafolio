---
title: "Vaca — Fondo compartido para gastos del hogar | Rodrigo Aquije"
description: "Diseñé Vaca a partir de una necesidad personal: compartir gastos sin adelantar dinero ni perseguir reembolsos."
slug: "/casos/vaca"
role: "Product Designer / UX/UI Designer"
timeline: "Iteración inicial · 3 semanas"
tools:
  - "Figma"
metrics:
  - "5 momentos en el flujo principal"
  - "12 pantallas del flujo principal"
  - "9 pantallas para estados críticos"
  - "Pruebas de usabilidad pendientes"
project_type: "Proyecto conceptual"
status: "Diseño de alta fidelidad cerrado para la primera prueba"
---

# Quería compartir gastos sin convertirme en el cobrador del grupo

Vaca nació de una necesidad personal. Cuando varias personas comparten gastos, una suele pagar primero y después empieza la parte incómoda: calcular, avisar, esperar y recordar cuánto falta.

Las apps para dividir cuentas podían decirme quién debía qué. El dinero seguía saliendo del bolsillo de una sola persona y el reembolso todavía dependía de que alguien lo pidiera.

Decidí mover ese momento. En Vaca, el grupo aporta antes del gasto y paga desde un fondo común. Así, todos pueden ver cuánto dinero hay, qué falta cubrir y en qué se usó.

## El proyecto

- Tipo: proyecto conceptual independiente
- Rol: Product Designer / UX/UI Designer
- Duración: iteración inicial de 3 semanas
- Alcance: estrategia de producto, modelo del fondo, flujo principal e interfaz de alta fidelidad
- Herramienta: Figma

## El problema cotidiano detrás de la idea

Partí de mi propia experiencia para reconstruir lo que ocurre alrededor de un gasto compartido:

1. Llega un recibo o aparece una compra para la casa.
2. Alguien paga el monto completo.
3. Esa persona calcula cuánto corresponde a cada integrante.
4. Comparte el comprobante y espera las transferencias.
5. Si el dinero no llega, envía uno o más recordatorios.

El cálculo ocupa poco tiempo. La espera y los recordatorios pueden extenderse durante varios días.

### La pregunta que guio el proyecto

¿Cómo podríamos pagar los gastos de una casa compartida sin que una persona tenga que adelantar el dinero y cobrarlo después?

## Explorar una secuencia diferente

Reconstruí el recorrido actual a partir de mi experiencia y ubiqué la mayor fricción después del gasto: una persona adelanta el dinero y conserva la responsabilidad de recuperarlo. Comparé tres modelos antes de ordenar el flujo principal y preparar una prueba de usabilidad.

Durante la ideación comparé tres caminos:

| Idea | Qué resolvía | Qué dejaba pendiente |
| --- | --- | --- |
| Registrar deudas | Ordenaba cuánto debía cada persona. | Alguien todavía adelantaba el dinero. |
| Enviar recordatorios automáticos | Reducía el trabajo de escribir al grupo. | El pago seguía ocurriendo después del gasto. |
| Crear un fondo previo | Permitía reunir el dinero antes de pagar. | Exigía reglas claras y confianza entre integrantes. |

Elegí desarrollar el fondo porque cambiaba el orden completo del problema. Cada integrante aporta su parte, el saldo queda visible y los gastos salen desde un mismo lugar.

## La idea de Vaca

Cada casa crea su propio fondo y define tres cosas desde el inicio:

- cuánto aportará cada persona;
- qué gastos se pagarán con ese dinero;
- qué reglas necesita el grupo para usarlo.

Definí Vaca como la interfaz de un fondo de dinero real custodiado por un proveedor financiero regulado. Cada integrante puede aportar mediante Yape, Plin o transferencia bancaria. El proveedor confirma el ingreso y mantiene el dinero separado de las cuentas personales de los integrantes. Vaca organiza las reglas, los permisos y el registro común de movimientos.

Los pagos también salen del fondo a través del proveedor. La persona autorizada inicia la operación en Vaca, el proveedor la procesa y el comprobante aparece después de la confirmación. Este modelo evita que una persona tenga que recibir los aportes en su cuenta, pagar por fuera y adjuntar luego una evidencia manual.

La infraestructura financiera todavía es una hipótesis del proyecto conceptual. No diseñé la integración técnica, los procesos de conocimiento del cliente ni la operación regulatoria. La interfaz se concentra en explicar cómo se aporta, cómo se aparta el dinero para cada gasto y qué puede hacer cada integrante.

### Una sola lectura del dinero

Reduje el vocabulario del fondo a tres cantidades que siempre deben cuadrar:

- **Saldo total:** todo el dinero confirmado que permanece en el fondo.
- **Dinero apartado:** parte del saldo destinada a gastos próximos concretos.
- **Dinero sin asignar:** parte del saldo que todavía no tiene un destino.

La relación es constante:

```text
Saldo total = dinero apartado + dinero sin asignar
```

Un gasto aparece como **cubierto** cuando tiene apartado el monto completo. “Cubierto” describe el estado de esa obligación; no funciona como otro tipo de saldo. Eliminé “libre”, “reservado”, “protegido” y “disponible” como nombres alternativos porque hacían imposible saber cuánto podía usarse.

Por ejemplo, si el fondo tiene S/800, con S/350 apartados y S/450 sin asignar, un pago de S/99 realizado desde el monto apartado produce este resultado:

- saldo total: S/701;
- dinero apartado: S/251;
- dinero sin asignar: S/450.

El dinero sin asignar no cambia porque el pago ya tenía un monto apartado.

## El flujo de la app

Organicé la experiencia en cinco momentos. Esta estructura cubre el primer ingreso y el uso mensual sin convertir cada decisión en un paso independiente.

### 1. Crear o unirse

Una persona puede abrir un fondo nuevo o entrar mediante un enlace, código o QR. Antes de unirse ve el nombre del grupo, el aporte esperado y las reglas principales.

### 2. Acordar cómo funcionará

Al crear el fondo se define:

- aporte igual o personalizado;
- fecha objetivo;
- gastos que se cubrirán;
- quién puede pagar;
- qué montos necesitan aprobación del grupo.

El resumen también explica dónde se custodiará el dinero y qué permisos tendrá cada rol. Aparece antes de enviar las invitaciones para que todos acepten el mismo acuerdo.

### 3. Completar el primer aporte

Cada integrante elige Yape, Plin o transferencia bancaria, revisa el monto y completa la operación. El aporte se suma al saldo total solo después de que el proveedor confirma el ingreso. Hasta entonces, Vaca lo muestra como pendiente y conserva el saldo anterior.

### 4. Usar el fondo

Desde Inicio, el grupo ve:

- saldo total;
- dinero apartado y sin asignar;
- aportes completos y pendientes;
- gastos recientes;
- siguiente pago por atender.

Para pagar, una persona autorizada registra o selecciona el gasto, revisa el destinatario, el monto y la distribución posterior del fondo. Si la operación supera el límite acordado, pasa a aprobación antes de ser procesada. Vaca comunica cada transición: pendiente de aprobación, en proceso, pagado o fallido.

### 5. Revisar y comenzar otro ciclo

Cada movimiento muestra quién inició la acción, qué proveedor la confirmó, cuándo ocurrió y cuál fue el resultado. Al terminar el periodo, el grupo revisa los gastos, conserva el saldo restante o ajusta los aportes del siguiente mes.

```text
Crear fondo ──────── Unirse al fondo
       \                 /
        Revisar y aceptar reglas
                  ↓
      Aportar con Yape, Plin o banco
                  ↓
       Esperar confirmación del aporte
                  ↓
      Ver saldo total y próximos gastos
             ↙            ↘
         Aportar          Pagar
                             ↓
              Aprobar, si la regla lo exige
                             ↓
                    Procesar el pago
             \            /
          Resultado y actividad
                  ↓
        Cierre del periodo
```

## Las decisiones de UX que sostienen el concepto

### Mostrar el estado del fondo antes de las acciones

El saldo total ocupa el lugar principal en Inicio. Debajo se divide entre dinero apartado y dinero sin asignar. Cerca aparecen los aportes pendientes y los gastos próximos. Quise que una persona pudiera reconstruir el estado de la casa antes de iniciar una operación.

### Explicar qué cambiará antes de confirmar

Cuando alguien aporta o paga, Vaca muestra el saldo actual y el saldo posterior. La consecuencia de la acción aparece mientras todavía puede revisarse.

Ejemplo:

> Vas a pagar S/99 de internet con el dinero apartado para este servicio. El saldo total bajará de S/800 a S/701. Quedarán S/251 apartados y S/450 sin asignar.

### Usar hábitos que ya existen

Yape y Plin aparecen solo como medios para ingresar dinero porque ya forman parte de la rutina de pago de muchas personas en Perú. El fondo conserva una sola lectura contable aunque los aportes lleguen por canales diferentes.

### Hacer visibles los estados intermedios

Un aporte o un pago puede tardar o fallar. Vaca conserva el saldo anterior hasta recibir la confirmación del proveedor y explica qué puede hacer la persona.

> Estamos confirmando tu aporte. Puede tardar unos minutos en aparecer en el fondo.

> El pago no salió del fondo. El saldo permanece igual y puedes intentarlo otra vez.

### Convertir las reglas en parte de la interfaz

La app reúne los aportes, permisos y límites que normalmente quedarían dispersos en una conversación. Todos ven los movimientos, aunque las acciones disponibles dependan del acuerdo del grupo. Cualquier cambio de reglas deja un registro visible.

> Este pago necesita una aprobación más porque supera el límite acordado por el grupo.

### Delimitar la salida del fondo

Como regla de producto para una versión posterior, los aportes confirmados formarían parte del fondo común y cada integrante conservaría un historial de aportes, no un saldo individual. Una solicitud de salida tendría que calcular qué parte del dinero sin asignar podría devolverse según las reglas aceptadas, sin comprometer el monto apartado para obligaciones próximas. Esta versión no convierte todavía esa regla en pantallas.

## Las pantallas del flujo principal

Diseñé doce pantallas para representar el recorrido principal, desde la creación del fondo hasta el primer pago. Luego extendí el recorrido con nueve pantallas para las situaciones que cambian el saldo, bloquean una acción o exigen una decisión del grupo.

### Onboarding

1. **Bienvenida y acceso.** Presenta la idea y permite iniciar la creación o entrar desde una invitación existente.
2. **Crear o unirse.** Abre las dos rutas principales sin pedir datos innecesarios.
3. **Crear fondo.** Define nombre, moneda y periodo del fondo.
4. **Aportes y reglas.** Configura el aporte mensual, la fecha límite, el límite de pago directo y los gastos previstos.
5. **Invitación.** Muestra el código, el QR, las opciones para compartir y el estado de las personas invitadas.
6. **Unirse al fondo.** Muestra integrantes, aporte y reglas antes de aceptar.

### Uso principal

7. **Elegir método y aportar.** Incluye Yape, Plin y transferencia bancaria.
8. **Inicio.** Reúne saldo, aportes, próximos pagos y actividad reciente.
9. **Detalle del fondo.** Explica cómo se distribuye el saldo entre dinero apartado y sin asignar, y qué gastos ya están cubiertos.
10. **Pagar un gasto.** Permite revisar destinatario, monto, origen del dinero y saldo posterior.
11. **Confirmación y movimiento.** Comunica el resultado y muestra el comprobante generado por la operación.
12. **Grupo y reglas.** Muestra integrantes, estado de aportes y acuerdos vigentes.

### Estados críticos incorporados

El diagnóstico del happy path mostró que faltaban respuestas para momentos de espera, error y recuperación. Diseñé nueve pantallas adicionales:

13. **Aporte pendiente.** Conserva el saldo anterior mientras el proveedor confirma el movimiento.
14. **Aporte fallido.** Explica que el dinero no ingresó y permite reintentar o elegir otro método.
15. **Pago que requiere aprobación.** Muestra el límite superado, las decisiones registradas y la aprobación pendiente.
16. **Pago en proceso.** Bloquea un segundo intento y mantiene visible el monto que todavía no debe descontarse.
17. **Pago fallido.** Conserva el saldo y el dinero apartado, informa que no existe comprobante y ofrece recuperación.
18. **Fondo insuficiente.** Expone el monto disponible, el costo del gasto y el faltante exacto.
19. **Invitación vencida.** Evita el ingreso con un código expirado y ofrece solicitar otro enlace.
20. **Aporte de un integrante pendiente.** Identifica quién falta, cuánto debe aportar y permite enviar un recordatorio.
21. **Cambio de regla.** Compara el límite vigente con la propuesta y conserva la regla anterior hasta completar las aprobaciones.

### Límite de esta versión

Las 21 pantallas cierran el recorrido que necesito para una primera prueba: creación, invitación, aporte, lectura del fondo, pago y nueve situaciones críticas. Dejé fuera de esta ronda la salida de un integrante, las devoluciones, los aportes duplicados y los estados generales de sesión o conectividad. Esos recorridos necesitan decisiones financieras y operativas propias; agregarlos ahora ampliaría la prueba sin ayudar a responder la hipótesis principal.

Un pago sigue esta secuencia:

```text
Revisar pago
     ↓
¿Cumple las reglas y hay dinero suficiente?
     ├── No hay dinero ──→ Explicar el faltante
     ├── Requiere aprobación ──→ Esperar decisión
     └── Puede continuar
                ↓
          Procesando pago
           ↙          ↘
       Pagado          Fallido
          ↓               ↓
   Mostrar recibo     Conservar saldo
                      y permitir reintento
```

Esta secuencia funciona como criterio de evaluación para la primera prueba. La seguridad, la biometría, las notificaciones, la privacidad y la accesibilidad deben aparecer cuando una decisión las requiera, no como etiquetas generales del producto.

## Cómo quiero probarlo

La primera prueba debe responder una pregunta concreta: ¿las personas entienden y aceptarían aportar antes del gasto?

La interfaz de alta fidelidad permite preparar un prototipo enlazado para estas tareas:

1. Crear un fondo para una casa con tres integrantes.
2. Entender cuánto debe aportar cada persona.
3. Unirse y completar un aporte con Yape o Plin.
4. Identificar por qué un aporte continúa pendiente.
5. Distinguir el saldo total, el dinero apartado y el dinero sin asignar.
6. Pagar un servicio sin comprometer el siguiente recibo.
7. Recuperarse de un pago fallido sin perder dinero.
8. Entender por qué un pago necesita aprobación.

La salida del grupo y la devolución correspondiente quedarán fuera de esta primera ronda porque todavía necesitan sus propias pantallas.

También contrastaré la idea con personas que compartan vivienda. Esta iteración nació de mi experiencia; las entrevistas permitirán descubrir qué partes se repiten en otros hogares y cuáles responden solo a mi manera de organizarme.

## Estado del caso y siguiente paso

El resultado actual conecta la necesidad personal con una propuesta de producto, un modelo explícito del dinero y 21 pantallas de alta fidelidad: doce para el flujo principal y nueve para estados críticos. Cerré la versión visual para la primera ronda de prueba. El fondo custodial y su integración con un proveedor regulado siguen siendo hipótesis de producto.

Todavía no existen resultados de usabilidad ni métricas de uso. El siguiente paso operativo consiste en enlazar las rutas y ejecutar la primera prueba, sin ampliar antes el número de pantallas. Esa prueba permitirá comprobar si el fondo previo se entiende, genera confianza y reduce la necesidad de recordar pagos.

Si esa hipótesis no se sostiene, retomaría la alternativa de recordatorios automáticos sin fondo compartido.

## Siguiente caso

### BBVA Perú

Diseñar un mailing de préstamo bajo restricciones de marca, canal y compliance.

- UX para email
- Salesforce Marketing Cloud
- Diseño responsive

CTA: Ver caso

Enlace: /casos/bbva
