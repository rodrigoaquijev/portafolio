---
title: "Yape — Arquitectura de estados | Rodrigo Aquije"
description: "Caso conceptual de Behavioral UX sobre cómo comunicar una transferencia que sigue en revisión y prevenir reintentos, pagos duplicados y consultas evitables."
slug: "/casos/yape"
---

# Cómo hablarle al usuario cuando el sistema aún no tiene respuesta.

## Navegación

- Rodrigo Aquije
- Caso de estudio · Yape
- Auditoría
- Evidencia
- Sistema
- Prototipo
- Impacto
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

Yape · Behavioral UX · Arquitectura de estados

Rediseño conceptual del momento más incierto de una transferencia: cuando la operación no confirma si el dinero llegó y el silencio empuja a intentarlo otra vez.

Proyecto conceptual independiente. No fue encargado por Yape ni por BCP.

### Ficha del proyecto

- Rol: Product Designer
- Método: Lean UX
- Duración: 3 semanas
- Año: 2025

### Problema

El error genérico no explica el estado real de la operación.

### Consecuencia

La incertidumbre puede convertirse en un reintento y un pago duplicado.

### Solución

Un estado “En revisión” conserva el contexto y evita pedirle al usuario que adivine.

### Antes: respuesta actual

#### Ups, algo salió mal.

Cierra la aplicación y vuelve a intentarlo.

CTA: Aceptar

### Después: propuesta

Estado: En revisión

#### Estamos verificando tu operación.

Puede tardar unos minutos. No es necesario reenviar.

CTA: Entendido

Alt text propuesto: Comparación entre el mensaje genérico de error de Yape y la propuesta de estado “En revisión”, que explica la demora y desaconseja reenviar el pago.

## Proceso

El caso se organiza en cinco puntos de navegación: Auditoría, Evidencia, Sistema, Prototipo e Impacto.

## Auditoría

## El mensaje de error no solo informaba poco. También sugería la acción más riesgosa.

La revisión heurística mostró una ruptura entre lo que el sistema sabía y lo que la persona necesitaba decidir. El problema no era una caída técnica: era la ausencia de un estado accionable.

### Estado invisible

- Heurística: Visibilidad del sistema
- Hallazgo: “Algo salió mal” no distingue entre una caída, una demora o una operación que sigue procesándose.

### Acción riesgosa

- Heurística: Prevención de errores
- Hallazgo: Pedir que se intente nuevamente puede duplicar la transferencia cuando el primer envío continúa en curso.

### Sin recuperación

- Heurística: Control y libertad
- Hallazgo: Aceptar cierra la alerta, elimina el contexto y no ofrece una vía rápida para comprobar qué ocurrió.

### Consecuencia para el negocio

1. Estado ambiguo
2. Reintento
3. Pago duplicado
4. Reclamo
5. Soporte

### Lo que no necesitaba cambiar

El soporte directo y las confirmaciones ya resolvían sus tareas. La intervención debía aparecer antes del reclamo, justo cuando comienza la incertidumbre.

Hallazgo: el diseño estaba convirtiendo una demora técnica en una decisión de riesgo.

### Texto del mockup auditado

- yape
- 5:00
- Ups, algo salió mal.
- Cierra la aplicación y vuelve a intentarlo.
- Aceptar
- Necesito ayuda

Alt text propuesto: Pantalla de Yape con el mensaje “Ups, algo salió mal”, el CTA “Aceptar” y la opción “Necesito ayuda”.

## Evidencia

## La frustración no empezaba con la falla. Empezaba al quedarse sin una respuesta.

Para delimitar el problema real contrasté una entrevista exploratoria con comentarios públicos en Play Store. Es evidencia direccional, no una muestra concluyente.

### Recorrido emocional

1. Envía el dinero — Confianza
2. La conexión falla — Alerta
3. Recibe un error genérico — Duda
4. Considera reenviar — Riesgo
5. Ve el estado real — Certeza

### Entrevista exploratoria · Lima, 31 años

“Yapié y no sé si llegó. No sé si lo mando de nuevo o espero. Si lo mando dos veces me van a odiar.”

### Reseña pública · Play Store

“Me depositaron y no aparece. Llevo dos horas intentando y solo dice que algo salió mal.”

### Oportunidad de diseño

Intervenir en el hueco de información posterior a la falla. Mostrar que la operación continúa en revisión antes de que la persona reintente o busque soporte.

## Sistema

## Un estado nuevo debía sentirse nativo, legible y difícil de malinterpretar.

La solución se construyó dentro del modelo mental existente: una arquitectura de tres estados, una caja de contexto y reglas de texto que funcionan juntas.

Explorar estado

### Completado

La operación terminó y el destino recibió el dinero.

Mensaje: Tu yapeo se completó correctamente.

CTA: Ver detalle

Decisión: Cierre directo. El color acompaña, pero el texto confirma el resultado.

### En revisión

El sistema conserva la operación mientras valida su resultado.

Mensaje: Estamos verificando tu operación. No es necesario reenviar.

CTA: Entendido

Decisión: El amarillo comunica actividad sin competir con el rojo usado para egresos.

### Cancelada

La operación no se completó y el dinero volvió a la cuenta.

Mensaje: No se pudo completar. Tu dinero ya está de vuelta.

CTA: Entendido

Decisión: El estado fallido usa un tratamiento neutro para no parecer un nuevo débito.

### Las palabras también forman parte del componente

#### Evitar

- Vuelve a intentarlo
- Cierra la aplicación
- Inténtalo en 15 minutos

#### Preferir

- No es necesario reenviar
- Estamos verificando tu pago
- Te avisaremos por aquí

### Accesibilidad

Cada cambio se comunica con color, nombre y descripción. En producción también debería anunciarse a tecnologías de asistencia.

Sistema: estado, expectativa y siguiente acción permanecen sincronizados.

## Prototipo

## Dos recorridos cubren tanto la demora como la falla confirmada.

El prototipo no añade pasos. Inserta claridad en los lugares donde la persona ya busca una respuesta: confirmación, historial y detalle de operación.

### Cuando la operación sigue procesándose

#### Prevención · Confirmación preventiva

- Estado: En revisión
- Mensaje: La operación quedó registrada. No es necesario reenviar.
- Decisión: Detiene el impulso de repetir el pago inmediatamente.

#### Historial · Movimiento visible

- Estado: En revisión
- Mensaje: El historial conserva monto, persona, hora y estado.
- Decisión: Permite comprobar que el sistema reconoce la transferencia.

#### Detalle · Contexto persistente

- Estado: En revisión
- Mensaje: La última actualización y la expectativa de espera permanecen accesibles.
- Decisión: Sustituye el limbo por información que puede volver a consultarse.

### Cuando la operación finalmente falla

#### Falla · Falla informada

- Estado: Verificando
- Mensaje: No cierres la aplicación. Estamos verificando tu operación.
- Decisión: El sistema reconoce el problema sin inducir un nuevo envío.

#### Cierre · Resultado transparente

- Estado: Cancelada
- Mensaje: Tu dinero ya está de vuelta en tu cuenta.
- Decisión: La experiencia termina confirmando qué pasó con el dinero.

### Texto de los mockups

- 10:30
- yape
- Mis movimientos
- Hoy
- Juan P. · − S/ 50.00 · Completado
- María R. · − S/ 150.00 · En revisión
- Pedro R. · S/ 20.00 · Cancelada
- 10:28
- Monto
- S/ 150.00
- Para María Rodríguez
- Entendido

Alt text propuesto: Secuencia de pantallas de Yape con una transferencia de S/ 150 a María Rodríguez visible en el historial y marcada como “En revisión”.

## Métricas y resultados

## La propuesta desplaza la ayuda desde el reclamo hacia la prevención.

El chatbot sigue siendo útil. La arquitectura de estados actúa antes: responde en el momento de la falla para que una duda evitable no llegue a convertirse en un ticket.

### Soporte reactivo

La persona debe reconocer el problema, buscar ayuda y explicar una operación que la interfaz no pudo aclarar.

### Información preventiva

El sistema muestra el estado real, desaconseja el reintento y mantiene disponible el contexto de la transferencia.

### Reintentos durante los primeros 5 minutos

- Dirección esperada: bajar
- Hipótesis: “En revisión” reduce la repetición inmediata del mismo pago.
- Cómo comprobarlo: Prueba A/B comparando reenvíos al mismo destinatario y por el mismo monto.

### Tickets sobre pagos inciertos

- Dirección esperada: bajar
- Hipótesis: El historial resuelve la duda antes de abrir soporte.
- Cómo comprobarlo: Comparar contactos asociados a operaciones pendientes antes y después del cambio.

### Percepción de claridad

- Dirección esperada: subir
- Hipótesis: Conocer el estado genera más confianza que recibir un error genérico.
- Cómo comprobarlo: Encuesta breve posterior a la interacción y prueba de comprensión del estado.

Caso conceptual: estas son hipótesis y métodos de validación, no resultados de producción.

Hipótesis: menos reintentos, menos consultas evitables y mayor comprensión del estado.

## Aprendizajes

## Tres decisiones que sostienen la propuesta.

### Respetar el modelo mental

El rojo ya comunica salida de dinero. Reutilizarlo para una falla habría creado una segunda interpretación.

### Diseñar el estado intermedio

La espera deja de sentirse como silencio cuando el sistema explica qué ocurre y qué debe hacer la persona.

### Escribir para prevenir

“No es necesario reenviar” no adorna la interfaz: evita una acción con consecuencias financieras.

En productos financieros, la confianza también se diseña durante los segundos en que el sistema todavía no tiene una respuesta.

## Siguiente caso

### Allpa

Diseño conductual para proteger la liquidez variable.

Un sistema para watchOS e iOS que estructura cada ingreso antes de que el saldo bruto se convierta en permiso para gastar.

- Behavioral Finance
- watchOS + iOS
- Cash-flow UX

CTA: Ver caso

Enlace: /casos/allpa

## Pie de página

- © 2026 Rodrigo Aquije
- Diseñado y construido en Lima.
- Email
- LinkedIn
