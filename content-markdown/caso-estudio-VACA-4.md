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
  - "12 pantallas diseñadas para el ciclo completo"
  - "Pruebas de usabilidad pendientes"
project_type: "Proyecto conceptual"
status: "Flujo, interfaz y prototipo definidos"
---

# Quería compartir gastos sin convertirme en el cobrador del grupo

Vaca nació de una necesidad personal. Cuando varias personas comparten gastos, una suele pagar primero y después empieza la parte incómoda: calcular, avisar, esperar y recordar cuánto falta.

Las apps para dividir cuentas podían decirme quién debía qué. El dinero seguía saliendo del bolsillo de una sola persona y el reembolso todavía dependía de que alguien lo pidiera.

Decidí mover ese momento. En Vaca, el grupo aporta antes del gasto y paga desde un fondo común. Así, todos pueden ver cuánto dinero hay, qué falta cubrir y en qué se usó.

## El proyecto

- Tipo: proyecto conceptual independiente
- Rol: Product Designer / UX/UI Designer
- Duración: iteración inicial de 3 semanas
- Alcance: estrategia de producto, flujo de usuario, interfaz y prototipo
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

Seguí las etapas clásicas de Design Thinking para llevar la experiencia personal hacia una propuesta de UX/UI: entender el recorrido actual, definir el momento de mayor fricción, comparar alternativas, ordenar el flujo y preparar una prueba de usabilidad.

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

Los aportes pueden hacerse con medios familiares como Yape, Plin o una transferencia bancaria. Vaca reúne el estado de esos movimientos para que el grupo tenga una sola lectura del fondo.

La propuesta protege una idea sencilla: el dinero compartido debe sentirse compartido. Ningún integrante debería aparecer como dueño informal del saldo ni tener más información que los demás.

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

El resumen aparece antes de enviar las invitaciones para que todos lleguen con el mismo acuerdo.

### 3. Completar el primer aporte

Cada integrante elige Yape, Plin o transferencia bancaria, revisa el monto y completa la operación. Al regresar a Vaca puede ver si el aporte fue confirmado, sigue pendiente o necesita intentarse otra vez.

### 4. Usar el fondo

Desde Inicio, el grupo ve:

- saldo disponible;
- dinero reservado para próximos recibos;
- aportes completos y pendientes;
- gastos recientes;
- siguiente pago por atender.

Para pagar, una persona registra o selecciona el gasto, revisa cuánto quedará en el fondo y confirma. Si el monto supera la regla acordada, la app pide una segunda aprobación.

### 5. Revisar y comenzar otro ciclo

Cada movimiento muestra quién aportó o pagó, cuándo ocurrió y cuál fue el resultado. Al terminar el periodo, el grupo revisa los gastos, conserva el saldo restante o ajusta los aportes del siguiente mes.

```text
Crear fondo ──────── Unirse al fondo
       \                 /
        Revisar y aceptar reglas
                  ↓
      Aportar con Yape, Plin o banco
                  ↓
      Ver saldo y próximos gastos
             ↙            ↘
         Aportar          Pagar
             \            /
        Confirmación y actividad
                  ↓
        Cierre del periodo
```

## Las decisiones de UX que sostienen el concepto

### Mostrar el dinero antes de mostrar funciones

El saldo disponible ocupa el lugar principal en Inicio. Cerca aparecen los aportes pendientes y los recibos próximos. Quise que una persona pudiera entender el estado de la casa antes de tocar cualquier botón.

### Explicar qué cambiará antes de confirmar

Cuando alguien aporta o paga, Vaca muestra el saldo actual y el saldo posterior. La consecuencia de la acción aparece en el momento en que todavía puede revisarse.

Ejemplo:

> Vas a pagar S/ 99 de internet. Quedarán S/ 381 disponibles y S/ 120 reservados para luz.

### Usar hábitos que ya existen

Yape y Plin aparecen como opciones al momento de aportar porque ya forman parte de la rutina de pago de muchas personas en Perú. Esa familiaridad permite concentrar la interfaz en el monto, la confirmación y el estado posterior de la operación.

### Hacer visibles los estados intermedios

Una transferencia puede tardar o fallar. En esos casos, la app evita sumar el monto antes de confirmarlo y explica qué puede hacer la persona.

> Estamos confirmando tu aporte. Puede tardar unos minutos en aparecer en el fondo.

### Convertir las reglas en parte de la interfaz

La app reúne los aportes, permisos y límites que normalmente quedarían dispersos en una conversación. Cualquier cambio deja un registro visible para el grupo.

> Este pago necesita una aprobación más porque supera el límite acordado por el grupo.

### Diseñar también la salida

Una persona puede mudarse o dejar de participar. El flujo permite revisar su saldo, los pagos pendientes y la fecha de devolución antes de abandonar el fondo.

## Las pantallas que necesita el flujo

Diseñé doce pantallas principales para representar el ciclo completo, desde la creación del fondo hasta el cierre del periodo.

### Onboarding

1. **Bienvenida y acceso.** Presenta la idea y permite ingresar con el número de celular.
2. **Crear o unirse.** Abre las dos rutas principales sin pedir datos innecesarios.
3. **Crear fondo.** Define nombre, integrantes y gastos previstos.
4. **Aportes y reglas.** Configura montos, fechas, permisos y aprobaciones.
5. **Invitación.** Resume el acuerdo y permite compartir enlace, código o QR.
6. **Unirse al fondo.** Muestra integrantes, aporte y reglas antes de aceptar.

### Uso principal

7. **Elegir método y aportar.** Incluye Yape, Plin y transferencia bancaria.
8. **Inicio.** Reúne saldo, aportes, próximos pagos y actividad reciente.
9. **Detalle del fondo.** Muestra el avance del periodo y lo que todavía falta cubrir.
10. **Pagar un gasto.** Permite revisar destinatario, monto y saldo posterior.
11. **Confirmación y movimiento.** Comunica el resultado y conserva el comprobante.
12. **Grupo y reglas.** Gestiona integrantes, aprobaciones, cambios y salida.

### Estados que acompañan las pantallas

Cada pantalla debe contemplar las situaciones que cambian la decisión de una persona:

- fondo vacío, parcial, completo o con saldo bajo;
- aporte pendiente, confirmado o fallido;
- pago directo o pendiente de aprobación;
- invitación pendiente o vencida;
- integrante que todavía no aporta;
- salida del grupo y devolución del saldo;
- falta de conexión o acceso perdido.

La seguridad, la biometría, las notificaciones, la privacidad y la accesibilidad acompañan estos flujos. Las integré como soporte de las tareas principales, con presencia solo cuando una decisión las requiere.

## Cómo quiero probarlo

La primera prueba debe responder una pregunta concreta: ¿las personas entienden y aceptarían aportar antes del gasto?

El prototipo permite observar seis tareas:

1. Crear un fondo para una casa con tres integrantes.
2. Entender cuánto debe aportar cada persona.
3. Unirse y completar un aporte con Yape o Plin.
4. Identificar por qué un aporte continúa pendiente.
5. Pagar un servicio sin comprometer el siguiente recibo.
6. Salir del grupo y entender qué ocurrirá con el saldo.

También contrastaré la idea con personas que compartan vivienda. Esta iteración nació de mi experiencia; las entrevistas permitirán descubrir qué partes se repiten en otros hogares y cuáles responden solo a mi manera de organizarme.

## Estado del caso y siguiente paso

El resultado actual conecta la necesidad personal con una propuesta de producto, un flujo end-to-end y doce pantallas que representan el ciclo del fondo.

Todavía no existen resultados de usabilidad ni métricas de uso. La siguiente fase consiste en probar el prototipo y comprobar si el fondo previo se entiende, genera confianza y reduce la necesidad de recordar pagos.

Si esa hipótesis no se sostiene, retomaría la alternativa de recordatorios automáticos sin fondo compartido.

## Siguiente caso

### BBVA Perú

Diseñar un mailing de préstamo bajo restricciones de marca, canal y compliance.

- UX para email
- Salesforce Marketing Cloud
- Diseño responsive

CTA: Ver caso

Enlace: /casos/bbva
