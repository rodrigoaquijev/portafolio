---
title: "BBVA Perú — CRM & Email UX | Rodrigo Aquije"
description: "Caso de estudio sobre el diseño e implementación de comunicaciones CRM para BBVA Perú, con foco en jerarquía, compliance y personalización en Salesforce Marketing Cloud."
slug: "/casos/bbva"
---

# Convertir una oferta de crédito en una experiencia clara.

## Navegación

- Rodrigo Aquije
- Caso de estudio · BBVA Perú
- Discover
- Define
- Develop
- Deliver
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

BBVA Perú · CRM & Email UX · 2024–2025

Diseño y desarrollo end-to-end de comunicaciones CRM para BBVA Perú: jerarquía visual, compliance regulatorio y personalización dinámica, implementados directamente en Salesforce Marketing Cloud.

Por confidencialidad, algunos nombres y datos fueron modificados. La implementación técnica y las decisiones de diseño son reales.

### Ficha del proyecto

- Rol: UX/UI Designer · CRM
- Cliente: BBVA Perú · Agencia Amsterdam
- Plataforma: Salesforce Marketing Cloud
- Periodo: 2024–2025

### Problema

Un correo que se leía como documento legal, no como una oferta.

### Solución

Reordenar la jerarquía para que el beneficio aparezca primero, sin alterar el bloque de compliance.

### Rol

UX/UI e implementación técnica end-to-end en Salesforce Marketing Cloud.

## Proceso

### Cómo se abordó

## Cuatro fases, un mismo hilo conductor.

Double Diamond separa dos momentos de exploración y dos de decisión. El caso avanza desde el contexto real de lectura hasta un sistema listo para producción.

### Discover

Entender el brief, las restricciones y el contexto real.

### Define

Acordar el orden de la información antes de diseñar.

### Develop

Explorar UI, copy y nudges dentro del brand system.

### Deliver

Resolver personalización, responsive, dark mode y medición.

## Discover · El contexto real

## Una oferta financiera que se leía como documento legal.

El objetivo era aumentar los desembolsos del Préstamo de Libre Disponibilidad comunicando que el cliente ya tenía liquidez a la mano. Sin embargo, el peso visual de los textos regulatorios y una jerarquía débil convertían el beneficio en carga cognitiva.

El reto no era embellecer el email. Era lograr que alguien que lo abre en movimiento y con atención fragmentada entienda en segundos que tiene dinero disponible.

### Restricciones

#### Brand system cerrado

Tipografía, paleta, componentes y espaciados definidos globalmente por BBVA.

#### Compliance ASBANC / SBS

TCEA, condiciones y disclaimers obligatorios; podían jerarquizarse, no eliminarse.

#### Sin JavaScript

La percepción de interactividad debía resolverse con HTML y CSS estático, table-based.

#### Render multicliente

Gmail, Outlook, Apple Mail, Samsung Mail y vista web debían conservar la intención.

### El problema no era solo el diseño. Era el contexto de lectura.

#### Mobile, en segundos

La mayoría de aperturas ocurre desde el teléfono y en tránsito. La jerarquía define si el mensaje sobrevive el primer vistazo.

#### “Preaprobado” cambia la ecuación

El cliente no empieza una solicitud desde cero; activa algo que ya está disponible. La comunicación debía confirmar, no suplicar.

## Define · Arquitectura de información

## Primero el valor. Después la evidencia y las condiciones.

Antes de trabajar color o tipografía se definieron blockframes: cajas sin estilo para acordar jerarquía, proporción y secuencia de lectura.

### Orden de la información

1. Header: reconocimiento inmediato de la entidad.
2. Monto protagonista: el beneficio se entiende en el primer vistazo.
3. CTA: la acción queda unida a la oferta, sin scroll intermedio.
4. Beneficios: respaldan una decisión que ya se comprende.
5. Bloque legal: cierra con la información regulatoria completa e inalterada.

### Patrones de lectura

#### Patrón Z

Logo, titular y botón organizan el banner de apertura.

#### Patrón F

El cuerpo permite escanear bloques de valor de arriba hacia abajo.

La posición final del bloque de TCEA no busca ocultarlo. Busca evitar que todos los niveles de información compitan simultáneamente, manteniendo las condiciones accesibles y completas.

## Develop · UI craft y nudges

## Cuatro decisiones cambian cómo se interpreta la oferta.

El margen de diseño no estaba en cambiar la marca o reducir los legales. Estaba en controlar atención, expectativa y lenguaje dentro de esas restricciones.

### Barra de avance al 82%

Un fill estático comunica que falta una acción, no que el trámite recién empieza. Se resolvió solo con CSS.

### Monto como ancla visual

El máximo gana tamaño y color; el mínimo mantiene presencia sin competir por atención.

### Compliance después de la acción

Las condiciones permanecen completas, pero dejan de interrumpir la comprensión inicial del beneficio.

### De solicitar a activar

“Solicita tu préstamo” cambia por una narrativa coherente con una oferta ya preaprobada.

#### Antes

Solicita tu préstamo

#### Después

Ya está aprobado para ti. Solo actívalo.

### Texto del prototipo

- BBVA
- Oferta preaprobada
- Hasta
- S/ 34,600
- Empezar aquí
- TCEA y condiciones siempre accesibles

Alt text propuesto: Previsualización de un email de BBVA Perú con una oferta preaprobada de hasta S/ 34,600 y el CTA “Empezar aquí”.

## Deliver · Sistema listo para producción

## Un template, cinco aperturas y una estructura estable.

AMPScript adapta banner, mensaje central y propuesta de valor según el perfil. El cuerpo, la acción y los legales permanecen iguales para evitar cinco piezas independientes.

Seleccionar segmento

### Estabilidad

#### Tu sueldo merece un beneficio real.

- Perfil: Cuenta Sueldo activa
- Descripción: Reconoce la recurrencia del ingreso y presenta la oferta como consecuencia de la relación con el banco.
- Tono: Reconocimiento
- CTA: Accede ahora

### Experiencias

#### Tus próximas aventuras empiezan hoy.

- Perfil: Viajes y ocio
- Descripción: El préstamo funciona como habilitador de una experiencia pendiente, no como protagonista del mensaje.
- Tono: Aspiracional
- CTA: Planifica tu viaje

### Formación

#### Invierte en lo que más importa: tú.

- Perfil: Desarrollo personal
- Descripción: Posiciona el financiamiento como inversión en formación y crecimiento profesional.
- Tono: Crecimiento
- CTA: Empieza a crecer

### Hogar

#### Tu hogar, tal como lo imaginas.

- Perfil: Mejora del hogar
- Descripción: Conecta con gastos de equipamiento y presenta la liquidez como continuidad de un proyecto existente.
- Tono: Realización
- CTA: Mejora tu hogar

### Emprendimiento

#### Haz crecer lo que ya construiste.

- Perfil: Actividad independiente
- Descripción: Habla de capital de trabajo y de avance, con un tono de socio financiero.
- Tono: Impulso
- CTA: Impulsa tu negocio

### Texto del mockup de segmentación

- mail.bbva.pe
- BBVA
- Hola Julia
- Tienes una oferta preaprobada y disponible para activar.
- Hasta
- S/ 34,600
- TCEA 24.90% · Ver condiciones

Alt text propuesto: Email personalizado de BBVA Perú para Julia con una oferta preaprobada, monto de S/ 34,600, condiciones y un CTA adaptado a su segmento.

### Implementación

Ejecución técnica

## El mismo diseño en cada pantalla.

#### Mobile

Columnas apiladas, CTA full-width y touch targets de al menos 44 px.

#### Desktop

Dos columnas fluidas y más aire sin añadir contenido.

#### Datos dinámicos

Nombre, monto, TCEA y cuota personalizados por registro.

### El mismo email debe sobrevivir dos entornos de lectura.

#### Contraste contextual

El azul corporativo oscuro se sustituye por un azul claro cuando el fondo lo exige.

#### Banner profundo

En dark mode el gradiente baja luminosidad para integrarse con el cliente de correo.

#### CTA estable

El amarillo BBVA conserva contraste suficiente en ambos modos.

Alt text propuesto: Comparación del email de BBVA Perú en modo claro y modo oscuro, con el monto de S/ 34,600 y el CTA “Empezar aquí”.

## Métricas y resultados

Instrumentación

## Qué observar cuando la pieza sale al aire.

### Delivered y Bounce Rate

Validan que el HTML llegue y no falle antes de interpretar cualquier otra señal.

### Open Rate

Evalúa asunto y preview text; todavía no el diseño del cuerpo.

### CTR del CTA

Comprueba si la secuencia monto–acción dirige el clic.

### Unsubscribe Rate

Advierte si la comunicación se percibe invasiva o manipuladora.

Journey Builder puede cruzar estas señales con la Data Extension de desembolsos para cerrar el ciclo hasta conversión. El caso no presenta porcentajes sin resultados auditables.

## Aprendizajes

Reflexión

### El dominio importa

Comprender PLD, TCEA y la percepción de “preaprobado” mejora decisiones que no son solamente visuales.

### Las restricciones revelan criterio

Un sistema cerrado obliga a identificar con precisión dónde sí existe margen de acción.

### Email UX tiene consecuencias

Una comunicación financiera clara puede facilitar o bloquear una decisión económica real.

## Siguiente caso

### Yape

Arquitectura de estados para la incertidumbre transaccional.

Rediseño conductual del estado “en revisión” para evitar reintentos, pagos duplicados y dudas que terminan en soporte.

- Behavioral UX
- State Systems
- Microcopy

CTA: Ver caso

Enlace: /casos/yape

## Pie de página

- © 2026 Rodrigo Aquije
- Diseñado y construido en Lima.
- Email
- LinkedIn
