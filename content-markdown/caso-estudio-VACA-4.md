---
title: "Vaca — Fondo compartido para roommates | Rodrigo Aquije"
description: "Caso conceptual de FinTech social sobre un fondo prepagado para roommates que elimina adelantos personales y la fricción de cobrar reembolsos."
slug: "/casos/vaca"
---

# El fondo compartido que reemplaza al “me debes”.

## Navegación

- Rodrigo Aquije
- Caso de estudio · Vaca
- Empatizar
- Definir
- Idear
- Prototipar
- Testear
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

Vaca · Producto especulativo · FinTech social

Una experiencia para roommates que mueve el dinero antes del gasto: todos aportan a un fondo común y los servicios de la casa se pagan desde ahí, sin convertir a una persona en cobrador informal.

Proyecto conceptual independiente. El modelo financiero y regulatorio requeriría validación especializada antes de un piloto.

### Ficha del proyecto

- Rol: Product Designer · Solo
- Duración: 3 semanas
- Herramientas: Figma · React/CSS
- Alcance: Flujo core · 8 pantallas

### Problema: después del gasto

Alguien paga, registra la deuda, espera y finalmente recuerda al grupo que transfiera.

### Solución: antes del gasto

Todos aportan al inicio; el fondo paga y nadie queda debiendo a otra persona.

### Texto del demo del fondo

- VACA
- Fondo del depa
- Balance compartido
- S/ 320
- 2/3 aportes listos
- Rodrigo · Aportó S/ 160
- Caro · Aportó S/ 160
- Diego · Aporte pendiente
- Prueba el fondo: activa o retira cada aporte.

Alt text propuesto: Demo interactivo del fondo compartido Vaca con aportes de Rodrigo y Caro, un aporte pendiente de Diego y balance de S/ 320.

## Proceso

El caso sigue cinco fases de Design Thinking: Empatizar, Definir, Idear, Prototipar y Testear.

## Empatizar con la fricción social

## La matemática estaba resuelta. La ejecución seguía incomodando.

Cuatro conversaciones informales con personas que viven con roommates confirmaron un patrón: registrar una deuda no elimina el mensaje incómodo, la espera ni el rol involuntario de “tesorero del depa”.

### Conversaciones

> “Uso una app para dividir, pero igual termino mandando un audio para que me transfieran.”

Roommate · 25 años

> “No me molesta tanto que se demoren como tener que recordarles cada mes.”

Roommate · 27 años

> “Preferiría que la plata ya esté puesta antes, así nadie tiene que pedir nada.”

Roommate · 23 años

### Sofía, 26

Diseñadora freelance

“No quiero ser la tesorera del departamento.”

- Contexto: Ingresos variables; prefiere aportar cuando recibe un pago y no en una fecha fija.
- Fricción: Carga con los recordatorios y teme que cobrar se lea como desconfianza.

### Diego, 29

Ingeniero de software

“Quiero que la casa se pague sola.”

- Contexto: Sueldo fijo; abandonó las apps de deuda porque aún debía acordarse de transferir.
- Fricción: El software calcula el monto, pero él sigue ejecutando la acción todos los meses.

### Viaje actual

1. Ocurre el gasto. Alguien adelanta de su bolsillo. Estado emocional: Neutral.
2. Se registra. El grupo ve quién debe cuánto. Estado emocional: Neutral.
3. Pasan los días. La transferencia no ocurre. Estado emocional: Duda.
4. Se recuerda. Aparece el mensaje incómodo. Estado emocional: Tensión.
5. Se resuelve. Todos quedan al día hasta el próximo gasto. Estado emocional: Alivio.

El punto de dolor no es calcular una deuda. Es tener que activar socialmente el reembolso.

## Definir la secuencia correcta

## Si el dinero llega primero, el cobro deja de existir.

La hipótesis invierte el orden habitual. Vaca no registra una deuda después del pago; crea disponibilidad compartida antes de que exista el gasto.

### Pregunta de diseño

¿Cómo podríamos pagar los gastos del hogar sin que una persona tenga que adelantar dinero ni perseguir reembolsos?

### Flujo propuesto

1. Crear o unirse al fondo. Un link conecta a todos los roommates con una misma cuenta de grupo.
2. Aportar una parte inicial. Cada miembro recarga con un método familiar y ve su contribución.
3. Activar el fondo. El balance queda visible para todos y reemplaza las deudas individuales.
4. Pagar desde el fondo. El gasto descuenta del saldo común y se registra automáticamente.
5. Reponer y cerrar el mes. El sistema alerta por umbral y deja una lectura transparente del ciclo.

### Arquitectura de información

- Onboarding: Crear fondo · Unirse con link
- Inicio: Balance · Movimientos
- Fondo: Aportar · Registrar gasto · Reglas
- Grupo: Miembros · Invitaciones · Alertas

## Idear con restricciones reales

## Tres decisiones definieron el producto y también sus riesgos.

El concepto solo funciona si sostiene confianza, baja la fricción de adopción y explica con honestidad dónde vive el dinero.

### Fondo prepagado, no deuda posterior

Exige confianza inicial y capital por adelantado, pero elimina el cobro recurrente y la espera.

### Recarga con hábitos locales

Usar métodos de transferencia ya conocidos reduce aprendizaje, aunque limita el producto a un ecosistema regional.

### Balance como protagonista

Sacrifica detalle inmediato a cambio de transparencia: todos ven cuánto existe antes de gastar.

### Una promesa compartida necesita una arquitectura financiera creíble.

Para un MVP, Vaca no debería custodiar fondos directamente ni convertir la cuenta de un roommate en cuenta del grupo. El modelo conceptual requiere un partner regulado que mantenga el dinero segregado y un ledger que represente cada fondo.

1. Aporte. El usuario transfiere desde su cuenta personal.
2. Ledger Vaca. La app registra cuánto corresponde a cada grupo.
3. Partner regulado. Procesa el dinero y mantiene la custodia.
4. Fondo del grupo. El saldo queda respaldado y separado de una persona individual.

Hipótesis de arquitectura. La operación, licencias, custodia y compliance deben validarse con especialistas antes de construir.

## Prototipar el ciclo completo

## Ocho pantallas, una misma promesa: todos ven la misma plata.

El prototipo cubre la creación, el aporte, el gasto, la reposición y el cierre. Las pantallas se exploran como un sistema vivo, no como una galería estática.

Explorar pantalla

### Crear

#### Arma tu fondo

- Nombre: Depa San Isidro
- Mensaje: Invita a tus roommates y define cómo funcionará el fondo.
- CTA: Crear fondo
- Detalle: Todos aportan · El fondo paga · Todos ven
- Decisión: Explica el modelo antes de pedir un compromiso financiero.

### Inicio

#### Fondo del depa

- Saldo: S/ 480
- Mensaje: S/ 85 gastados · S/ 395 disponibles
- CTA: Aportar
- Detalle: Movimientos visibles para todo el grupo
- Decisión: La confianza empieza con un balance compartido, legible y siempre visible.

### Aportar

#### Recargar fondo

- Monto: S/ 50
- Mensaje: El fondo pasará de S/ 430 a S/ 480.
- CTA: Confirmar aporte
- Detalle: Método habitual de transferencia
- Decisión: El antes y después evita que el monto quede aislado de su efecto real.

### Gasto

#### Nuevo gasto

- Monto: S/ 99
- Mensaje: Internet · El fondo quedará en S/ 381.
- CTA: Pagar desde el fondo
- Detalle: Nadie adelanta dinero personal
- Decisión: La consecuencia aparece antes de confirmar, sin abrir una deuda entre personas.

### Invitar

#### Invita a tu depa

- Código: VACA-8F2K
- Mensaje: 2 de 4 roommates confirmados.
- CTA: Copiar invitación
- Detalle: Andrea invitada · Bruno pendiente
- Decisión: El progreso de activación hace visible qué falta para poner el fondo en marcha.

### Alerta

#### Fondo bajo

- Saldo: S/ 40
- Mensaje: No alcanza para internet y luz de los próximos días.
- CTA: Aportar ahora
- Detalle: Necesidad mensual estimada: S/ 165
- Decisión: La alerta conecta el saldo con compromisos concretos, no con miedo abstracto.

### Reglas

#### Quién aporta cuánto

- Aporte: S/ 160 × 3
- Mensaje: Rodrigo · Caro · Diego aportan partes iguales.
- CTA: Guardar cambios
- Detalle: Recordatorio automático activo
- Decisión: Una barra proporcional comunica equidad más rápido que una lista de números.

### Cierre

#### Cierre de julio

- Saldo: S/ 480
- Mensaje: Aportes completos y gastos visibles para el grupo.
- CTA: Ver detalle
- Detalle: Comparación con mayo y junio
- Decisión: El cierre cuenta una historia del fondo sin convertirse en una hoja contable.

### Navegación de los mockups

- vaca
- 9:41
- •••
- Inicio
- Fondo
- Grupo
- Una decisión principal por pantalla

Alt text propuesto: Prototipo móvil de Vaca con ocho estados del ciclo del fondo: creación, inicio, aporte, gasto, invitación, alerta, reglas y cierre mensual.

### Sistema visual

## El sistema se construye desde lo que se repite.

- Cream · #F1EBDC · Superficie base
- Green 900 · #16352A · Acción y confianza
- Gold · #D9A438 · Aportes y logros
- Alert · #C15B3B · Atención con contexto

### Componentes

- Tab bar: 8 pantallas
- Botón: 7 pantallas · Primary, Ghost, Alert
- Movimiento: 3 pantallas · Normal y alerta
- Barra comparativa: 4 pantallas · Saldo antes/después

## Métricas y resultados

## La asunción más grande todavía está abierta.

El concepto no fue validado con un piloto. El siguiente paso es comprobar si los grupos realmente prefieren aportar por adelantado y si el fondo reduce la tensión sin crear una nueva desconfianza.

### Asunciones

#### Confianza inicial

¿Las personas pondrían dinero antes de que exista un gasto?

#### Gobernanza

¿Qué ocurre cuando alguien se muda, discrepa o quiere retirar su aporte?

#### Transparencia

¿El balance compartido reduce dudas o genera vigilancia entre roommates?

### Señales para medir

#### Fondos activos en el segundo mes

La reposición mensual indica que el modelo sobrevivió a la novedad inicial.

#### Tiempo entre gasto y pago

El objetivo es pasar de días de espera a una operación inmediata desde el fondo.

#### Recordatorios en el chat

La señal humana más clara: que desaparezca el mensaje “¿ya depositaste?”.

### Siguiente experimento

Prototipo clicable con 3 o 4 hogares reales durante dos ciclos mensuales, incluyendo escenarios de aporte incompleto y desacuerdo.

Vaca no busca que dividir gastos sea más eficiente. Busca que compartir una casa necesite menos negociación cotidiana.

## Siguiente caso

### BBVA Perú

Convertir una oferta de crédito en una experiencia clara.

Diseño e implementación de comunicaciones CRM con jerarquía, personalización dinámica y compliance bancario.

- Email UX
- Salesforce MC
- Design Engineering

CTA: Ver caso

Enlace: /casos/bbva

## Pie de página

- © 2026 Rodrigo Aquije
- Diseñado y construido en Lima.
- Email
- LinkedIn
