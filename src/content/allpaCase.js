export const ALLPA_CASE = {
  es: {
    pageTitle: 'Allpa — Diseño conductual para liquidez variable | Rodrigo Aquije',
    headerSubtitle: 'Caso de estudio · Allpa',
    nav: { discovery: 'Descubrimiento', definition: 'Definición', architecture: 'Arquitectura', prototype: 'Prototipo', validation: 'Validación' },
    hero: {
      eyebrow: 'Allpa · Behavioral finance · Sistema de producto',
      title: 'Diseñar para la volatilidad financiera antes de que el saldo se sienta disponible.',
      intro: 'Un concepto para trabajadores independientes que estructura cada ingreso en el momento en que llega: protege obligaciones futuras y muestra únicamente la liquidez realmente disponible.',
      disclosure: 'Proyecto conceptual independiente. Las cifras de impacto son hipótesis de validación, no resultados de producción.',
      meta: [['Rol', 'Product Designer end-to-end'], ['Método', 'Behavioral Design'], ['Plataformas', 'watchOS + iOS'], ['Año', '2026']],
      moment: '18:42 · Ingresa un pago de S/ 2,000',
      momentBody: 'En menos de cinco segundos, Allpa separa pagos fijos y colchón antes de que el sesgo de disponibilidad convierta el total en permiso para gastar.',
      problem: 'Las apps muestran el saldo bruto cuando el dinero llega. El usuario ve abundancia, no compromisos.',
      solution: 'Allpa aparta obligaciones en T+0 y convierte el saldo protagonista en “lo que puedes gastar”.'
    },
    discovery: {
      label: 'Descubrimiento conductual',
      title: 'El problema no era cuánto ingresaba. Era cuándo se interpretaba ese ingreso.',
      intro: 'Las herramientas financieras suelen explicar el gasto después de ocurrido. Allpa interviene en el instante anterior: cuando el dinero entra y todavía puede estructurarse sin quitarle al usuario la última palabra.',
      stat: '70%',
      statLabel: 'de la fuerza laboral peruana opera sin un ingreso mensual predecible.',
      source: 'Referencia del caso: INEI, empleo informal 2024.',
      researchNote: 'Este caso combina literatura conductual, datos públicos de mercado y patrones observados en productos financieros. Los arquetipos son hipótesis de diseño, no resultados de entrevistas.',
      biases: [
        { title: 'Sesgo de disponibilidad', body: 'Ver S/ 2,000 ahora hace que alquiler e impuestos futuros desaparezcan del cálculo mental.', response: 'Mostrar libre neto, no saldo bruto.' },
        { title: 'Sesgo del presente', body: 'Lo disponible hoy pesa más que una obligación conocida que vence en tres semanas.', response: 'Intervenir en T+0 del cobro.' },
        { title: 'Contabilidad mental', body: 'Sin separación, consumo diario y capital de trabajo compiten dentro de la misma bolsa.', response: 'Partición automática y reversible.' }
      ],
      principle: 'La interfaz no debía enseñar a presupuestar. Debía cambiar la decisión que aparece primero.'
    },
    definition: {
      label: 'Definición del usuario',
      title: 'Dos formas distintas de vivir la misma incertidumbre.',
      intro: 'Los arquetipos permiten probar si el sistema sirve tanto para ingresos personales variables como para flujos donde capital y utilidad conviven en la misma cuenta.',
      personas: [
        { name: 'Luis, 29', role: 'Freelancer digital', quote: '“Tengo buenos meses, pero nunca sé cuánto está realmente libre.”', goal: 'Que un buen ingreso no se diluya en gastos diarios.', friction: 'Posterga impuestos porque el saldo visible mezcla dinero libre y comprometido.', need: 'Saber de inmediato cuánto puede gastar sin tocar obligaciones.' },
        { name: 'Carla, 34', role: 'Emprendedora', quote: '“La venta entra, pero capital y utilidad siguen siendo el mismo número.”', goal: 'Separar operación del negocio y disponibilidad personal.', friction: 'Hace cuadraturas manuales para entender qué parte del saldo le pertenece.', need: 'Una partición automática, editable y siempre visible.' }
      ],
      hmw: '¿Cómo estructurar la liquidez en tiempo real antes de que el saldo bruto detone una decisión impulsiva?'
    },
    architecture: {
      label: 'Arquitectura de decisión',
      title: 'Del ingreso a la siguiente decisión, incluyendo las ramas incómodas.',
      intro: 'El flujo no termina en un happy path. Explica qué ocurre cuando el gasto cabe, cuándo amenaza la cobertura y cómo se conserva la autonomía mediante un override explícito.',
      steps: [
        { title: 'Llega un ingreso', body: 'El sistema detecta el evento y reconstruye el contexto financiero.' },
        { title: 'Partición automática', body: 'Pagos fijos y colchón se apartan por defecto, con una ventana para deshacer.' },
        { title: 'Liquidez neta visible', body: 'El saldo protagonista cambia de S/ 2,000 a S/ 571.' },
        { title: 'Nueva intención de pago', body: 'Antes de transferir, Allpa calcula el efecto sobre la cobertura.' },
        { title: 'Confirmar o proteger', body: 'Si alcanza, confirma. Si no, prioriza cancelar y deja el override como acción secundaria.' }
      ],
      tradeoffs: [
        ['Fricción intencional', 'Un paso adicional es válido cuando hace visible una consecuencia financiera antes del gasto.'],
        ['Wearable primero', 'El reloj atiende decisiones de segundos; el teléfono conserva profundidad y edición.'],
        ['Autonomía preservada', 'Allpa recomienda y estructura, pero nunca bloquea una compra por la fuerza.']
      ],
      audit: [
        ['Copy técnico', '“Liquidez neta” y “retención estructural” se reemplazaron por lenguaje cotidiano.'],
        ['Confirmación innecesaria', 'La primera versión pedía aceptar el ahorro; la corrección actúa por defecto y permite deshacer.'],
        ['Jerarquía riesgosa', '“Enviar de todas formas” dejó de ser botón principal y pasó a una acción deliberadamente discreta.']
      ]
    },
    prototype: {
      label: 'Prototipo dual',
      title: 'Intervención en el reloj. Comprensión y control en el teléfono.',
      intro: 'Cada dispositivo tiene una responsabilidad clara. watchOS reduce la decisión a un vistazo; iOS explica, proyecta y permite editar sin duplicar versiones del mismo dato.',
      platformWatch: 'watchOS', platformPhone: 'iOS', selector: 'Explorar pantalla',
      watch: [
        { id: 'income', tab: 'Ingreso', title: 'Te llegó un pago', amount: 'S/ 2,000', body: 'Ya separamos S/ 1,429 para tus pagos fijos y colchón.', action: 'Entendido', secondary: 'Deshacer o ajustar', tone: 'gold', rationale: 'Default nudge: el esfuerzo se coloca del lado de deshacer, no del lado de proteger.' },
        { id: 'available', tab: 'Disponible', title: 'Esto te queda para gastar', amount: 'S/ 571', body: 'Pagos fijos cubiertos. Tu colchón sigue seguro.', action: 'Ver detalle', secondary: '', tone: 'green', rationale: 'El sistema confirma cobertura con palabras antes de pedirle al usuario interpretar cifras.' },
        { id: 'payment', tab: 'Pago', title: '¿Vas a pagar esto?', amount: 'S/ 120', body: 'Después te quedan S/ 451 para el resto del mes.', action: 'Sí, pagar', secondary: 'No enviar', tone: 'gold', rationale: 'Una pausa positiva activa evaluación consciente antes de que el dinero salga.' },
        { id: 'critical', tab: 'Límite', title: 'Cuidado', amount: 'S/ 48', body: 'Si envías S/ 80, no te alcanzará antes del próximo ingreso.', action: 'Cancelar el pago', secondary: 'Enviar de todas formas', tone: 'coral', rationale: 'La opción segura recibe el mayor peso visual; el override sigue disponible sin competir.' }
      ],
      phone: [
        { id: 'home', tab: 'Inicio', title: 'Tienes esto para gastar', amount: 'S/ 571', body: 'Pagos fijos S/ 1,229 · Colchón S/ 200', action: 'Vas bien', secondary: 'Próximo pago: alquiler cubierto', tone: 'gold', rationale: 'El bruto nunca es protagonista. La pantalla se ancla en el saldo accionable.' },
        { id: 'split', tab: 'Detalle', title: 'Así se repartió tu dinero', amount: 'S/ 2,000', body: 'Pagos fijos 61% · Colchón 10% · Para gastar 29%', action: 'Ver próximos pagos', secondary: 'Todas las particiones son editables', tone: 'green', rationale: 'La transparencia progresiva sostiene confianza en una automatización que mueve dinero.' },
        { id: 'coverage', tab: '¿Alcanza?', title: 'Te alcanza con este ritmo', amount: '28 días', body: '17 días más de cobertura frente al patrón sin Allpa.', action: 'Revisar proyección', secondary: 'Basado en tu ritmo habitual', tone: 'gold', rationale: 'El valor se expresa como tranquilidad operativa, no como un gráfico abstracto.' },
        { id: 'history', tab: 'Movimientos', title: 'Lo que pasó hoy', amount: 'Martes 14', body: 'Ingreso · Apartado automático · Compra', action: 'Ver movimiento', secondary: 'Automático y voluntario nunca se confunden', tone: 'green', rationale: 'Distinguir acciones del sistema preserva la sensación de agencia.' }
      ],
      systemTitle: 'Un sistema visual con pocos roles y ninguna decoración gratuita.',
      tokens: [['Dorado', '#F5A623', 'Liquidez disponible y acción principal'], ['Verde', '#3ECF6E', 'Cobertura y confirmación'], ['Coral', '#FF5A5F', 'Riesgo crítico'], ['Arena', '#A8957E', 'Dinero comprometido']]
    },
    validation: {
      label: 'Validación y negocio',
      title: 'Lo que debería medirse antes de atribuir impacto.',
      intro: 'El concepto aún no tiene un piloto real. La evaluación se formula como hipótesis, límites y señales observables; no como porcentajes inventados.',
      risks: [
        ['Fatiga de intervención', 'Si una sugerencia se ignora repetidamente, el sistema reduce frecuencia y agrupa avisos.'],
        ['Efectivo invisible', 'Un retiro no puede clasificarse sin participación del usuario; el cálculo adopta el escenario conservador.'],
        ['Aprendizaje inicial', 'Durante los primeros 45 días las proyecciones tendrán menor precisión y deben comunicarlo.']
      ],
      metrics: [
        ['Aceptación de la partición', '¿La intervención llega con el timing y el lenguaje correctos?', 'Comparar aceptación, edición y reversión durante T+0.'],
        ['Tasa de override', '¿La alerta protege o empieza a cansar?', 'Medir cuántas personas continúan pese a una cobertura crítica.'],
        ['Persistencia de reservas', '¿Las obligaciones permanecen protegidas hasta su vencimiento?', 'Observar cuánto dura cada bucket antes de una edición o retiro.'],
        ['Estrés financiero declarado', '¿La persona hace menos cálculo mental cotidiano?', 'Seguimiento cualitativo y escala breve mes a mes.']
      ],
      business: [
        ['Base', 'Particiones y visibilidad del disponible.'],
        ['Pro', 'Pronósticos y auditorías de tendencia.'],
        ['B2B2C', 'Licenciamiento como capa conductual para instituciones financieras.']
      ],
      simulation: { title: 'Simular cobertura', body: 'Una demostración del modelo, no una predicción financiera.', day: 'Día', remaining: 'Disponible estimado', stable: 'Cobertura estable', warning: 'Alerta preventiva', critical: 'Límite crítico' },
      closing: 'El valor de Allpa no es ahorrar por el usuario. Es evitar que administrar su liquidez ocupe espacio mental todos los días.',
      next: 'Siguiente caso', nextTitle: 'BBVA Perú · Diseño financiero'
    },
    contact: 'Conectemos', contactTitle: 'Conversemos sobre decisiones financieras, comportamiento y sistemas.', linkedinNetwork: 'Red profesional', copied: 'Email copiado', footer: 'Diseñado y construido en Lima.'
  },
  en: {
    pageTitle: 'Allpa — Behavioral design for variable income | Rodrigo Aquije',
    headerSubtitle: 'Case study · Allpa',
    nav: { discovery: 'Discovery', definition: 'Definition', architecture: 'Architecture', prototype: 'Prototype', validation: 'Validation' },
    hero: {
      eyebrow: 'Allpa · Behavioral finance · Product system',
      title: 'Designing for financial volatility before a balance feels available.',
      intro: 'A concept for independent workers that structures each payment as it arrives, protects future obligations and shows only the liquidity that is actually available.',
      disclosure: 'Independent concept project. Impact figures are validation hypotheses, not production outcomes.',
      meta: [['Role', 'End-to-end Product Designer'], ['Method', 'Behavioral Design'], ['Platforms', 'watchOS + iOS'], ['Year', '2026']],
      moment: '6:42 PM · A S/ 2,000 payment arrives',
      momentBody: 'In under five seconds, Allpa separates bills and a safety buffer before availability bias turns the total into permission to spend.',
      problem: 'Finance apps show the gross balance when money arrives. People see abundance, not commitments.',
      solution: 'Allpa protects obligations at T+0 and makes “what you can spend” the primary balance.'
    },
    discovery: {
      label: 'Behavioral discovery', title: 'The problem was not how much arrived. It was when that income was interpreted.',
      intro: 'Financial tools usually explain spending after it happens. Allpa moves to the prior moment, when money arrives and can still be structured without removing the final decision from the user.',
      stat: '70%', statLabel: 'of Peru’s workforce operates without predictable monthly income.', source: 'Case reference: INEI, informal employment 2024.',
      researchNote: 'This concept combines behavioral literature, public market data and patterns observed in financial products. Personas are design hypotheses, not interview findings.',
      biases: [
        { title: 'Availability bias', body: 'Seeing S/ 2,000 now makes future rent and tax obligations disappear from the mental calculation.', response: 'Show net free cash, not gross balance.' },
        { title: 'Present bias', body: 'Money available today outweighs a known obligation due in three weeks.', response: 'Intervene at payment T+0.' },
        { title: 'Mental accounting', body: 'Without separation, daily consumption and working capital compete in one pool.', response: 'Automatic, reversible partitioning.' }
      ],
      principle: 'The interface did not need to teach budgeting. It needed to change which decision appeared first.'
    },
    definition: {
      label: 'User definition', title: 'Two different ways of living with the same uncertainty.',
      intro: 'The archetypes test whether the system works both for variable personal income and for accounts where working capital and profit coexist.',
      personas: [
        { name: 'Luis, 29', role: 'Digital freelancer', quote: '“I have good months, but I never know what is actually free.”', goal: 'Stop strong income months from dissolving into daily spending.', friction: 'Delays taxes because the balance mixes available and committed money.', need: 'Know immediately what can be spent without touching obligations.' },
        { name: 'Carla, 34', role: 'Entrepreneur', quote: '“The sale arrives, but capital and profit remain the same number.”', goal: 'Separate business operations from personal availability.', friction: 'Runs manual calculations to understand which part of the balance belongs to her.', need: 'Automatic, editable and always-visible partitioning.' }
      ],
      hmw: 'How might we structure liquidity in real time before the gross balance triggers an impulsive decision?'
    },
    architecture: {
      label: 'Decision architecture', title: 'From income to the next decision, including the uncomfortable branches.',
      intro: 'The flow does not end in a happy path. It explains what happens when a payment fits, when it threatens coverage and how an explicit override preserves autonomy.',
      steps: [
        { title: 'Income arrives', body: 'The system detects the event and reconstructs the financial context.' },
        { title: 'Automatic partition', body: 'Bills and buffer are separated by default, with an undo window.' },
        { title: 'Net liquidity appears', body: 'The primary balance changes from S/ 2,000 to S/ 571.' },
        { title: 'A new payment begins', body: 'Before transfer, Allpa calculates the effect on coverage.' },
        { title: 'Confirm or protect', body: 'If it fits, confirm. If not, prioritize cancel while keeping override secondary.' }
      ],
      tradeoffs: [['Intentional friction', 'An extra step is valid when it reveals a financial consequence before spending.'], ['Wearable first', 'The watch handles decisions in seconds; the phone preserves depth and editing.'], ['Autonomy preserved', 'Allpa recommends and structures but never blocks a purchase by force.']],
      audit: [['Technical copy', '“Net liquidity” and “structural retention” became everyday language.'], ['Unnecessary confirmation', 'The first version asked people to accept saving; the correction acts by default and allows undo.'], ['Risky hierarchy', '“Send anyway” stopped being the primary button and became a deliberately quiet action.']]
    },
    prototype: {
      label: 'Dual prototype', title: 'Intervention on the watch. Understanding and control on the phone.',
      intro: 'Each device has one clear responsibility. watchOS reduces the decision to a glance; iOS explains, projects and edits without creating two versions of the same data.',
      platformWatch: 'watchOS', platformPhone: 'iOS', selector: 'Explore screen',
      watch: [
        { id: 'income', tab: 'Income', title: 'A payment arrived', amount: 'S/ 2,000', body: 'We separated S/ 1,429 for bills and your buffer.', action: 'Got it', secondary: 'Undo or adjust', tone: 'gold', rationale: 'Default nudge: effort sits on the undo side, not the protection side.' },
        { id: 'available', tab: 'Available', title: 'This is what you can spend', amount: 'S/ 571', body: 'Bills covered. Your buffer remains safe.', action: 'View details', secondary: '', tone: 'green', rationale: 'Coverage is confirmed in words before people must interpret numbers.' },
        { id: 'payment', tab: 'Payment', title: 'Are you paying this?', amount: 'S/ 120', body: 'You will have S/ 451 left for the rest of the month.', action: 'Yes, pay', secondary: 'Do not send', tone: 'gold', rationale: 'Positive friction activates conscious evaluation before money leaves.' },
        { id: 'critical', tab: 'Limit', title: 'Careful', amount: 'S/ 48', body: 'Sending S/ 80 means you may run short before the next payment.', action: 'Cancel payment', secondary: 'Send anyway', tone: 'coral', rationale: 'The safe option gets the most visual weight; override remains available without competing.' }
      ],
      phone: [
        { id: 'home', tab: 'Home', title: 'This is what you can spend', amount: 'S/ 571', body: 'Bills S/ 1,229 · Buffer S/ 200', action: 'You are on track', secondary: 'Next payment: rent covered', tone: 'gold', rationale: 'Gross balance never leads. The screen is anchored in the actionable number.' },
        { id: 'split', tab: 'Details', title: 'How your money was split', amount: 'S/ 2,000', body: 'Bills 61% · Buffer 10% · Spending 29%', action: 'View upcoming payments', secondary: 'Every partition can be edited', tone: 'green', rationale: 'Progressive transparency sustains trust in an automation that moves money.' },
        { id: 'coverage', tab: 'Coverage', title: 'Your current pace lasts', amount: '28 days', body: '17 more days of coverage compared with the pattern without Allpa.', action: 'Review projection', secondary: 'Based on your usual pace', tone: 'gold', rationale: 'Value is expressed as operational calm, not an abstract chart.' },
        { id: 'history', tab: 'Activity', title: 'What happened today', amount: 'Tuesday 14', body: 'Income · Automatic partition · Purchase', action: 'View activity', secondary: 'Automatic and voluntary actions never blur', tone: 'green', rationale: 'Separating system actions preserves agency.' }
      ],
      systemTitle: 'A visual system with few roles and no decorative noise.',
      tokens: [['Gold', '#F5A623', 'Available cash and primary action'], ['Green', '#3ECF6E', 'Coverage and confirmation'], ['Coral', '#FF5A5F', 'Critical risk'], ['Sand', '#A8957E', 'Committed money']]
    },
    validation: {
      label: 'Validation and business', title: 'What must be measured before impact can be claimed.',
      intro: 'The concept has no real pilot yet. Evaluation is framed as hypotheses, limits and observable signals, never invented percentages.',
      risks: [['Intervention fatigue', 'If a suggestion is repeatedly ignored, the system reduces frequency and groups notices.'], ['Invisible cash', 'A withdrawal cannot be classified without user input, so the calculation adopts a conservative scenario.'], ['Initial learning', 'Projections will be less accurate during the first 45 days and must say so.']],
      metrics: [['Partition acceptance', 'Does the intervention arrive with the right timing and language?', 'Compare acceptance, editing and reversal during T+0.'], ['Override rate', 'Does the alert protect or start to fatigue?', 'Measure how many people continue despite critical coverage.'], ['Reserve persistence', 'Do obligations remain protected until due?', 'Observe how long each bucket lasts before an edit or withdrawal.'], ['Self-reported stress', 'Does the person perform less daily mental accounting?', 'Qualitative follow-up and a short monthly scale.']],
      business: [['Base', 'Partitions and spendable-balance visibility.'], ['Pro', 'Forecasts and trend audits.'], ['B2B2C', 'Licensing as a behavioral layer for financial institutions.']],
      simulation: { title: 'Simulate coverage', body: 'A demonstration of the model, not a financial prediction.', day: 'Day', remaining: 'Estimated available', stable: 'Stable coverage', warning: 'Preventive alert', critical: 'Critical limit' },
      closing: 'Allpa’s value is not saving for people. It is keeping liquidity management from occupying mental space every day.',
      next: 'Next case', nextTitle: 'BBVA Peru · Financial design'
    },
    contact: 'Let’s connect', contactTitle: 'Let’s discuss financial decisions, behavior and systems.', linkedinNetwork: 'Professional network', copied: 'Email copied', footer: 'Designed and built in Lima.'
  }
};
