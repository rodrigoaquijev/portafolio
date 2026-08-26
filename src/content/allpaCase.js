import { defineCaseStudy } from './caseStudyContract.js';

export const ALLPA_CASE = defineCaseStudy({
  slug: 'allpa',
  name: 'Allpa',
  methodology: 'Behavioral Design',
  phases: ['discovery', 'definition', 'architecture', 'prototype', 'validation'],
  translations: {
  es: {
    pageTitle: 'Allpa — Diseño conductual para liquidez variable | Rodrigo Aquije',
    headerSubtitle: 'Caso de estudio · Allpa',
    nav: { discovery: 'Descubrimiento', definition: 'Definición', architecture: 'Arquitectura', prototype: 'Prototipo', validation: 'Validación' },
    hero: {
      eyebrow: 'Allpa · Behavioral Design · Sistema de producto',
      title: 'Convertir un ingreso variable en una decisión clara sobre cuánto gastar.',
      intro: 'Concepto para profesionales independientes urbanos que cobran digitalmente, administran obligaciones recurrentes y ya utilizan un iPhone.',
      disclosure: 'Proyecto conceptual independiente. Las cifras de contexto provienen de fuentes públicas; los indicadores de producto definen cómo validaría la propuesta.',
      meta: [['Rol', 'Product Designer · concepto'], ['Método', 'Behavioral Design'], ['Plataformas', 'iOS · watchOS opcional'], ['Año', '2026']],
      moment: '18:42 · Ingresa un pago de S/ 2,000',
      momentBody: 'Las reglas configuradas separan S/ 1.229 para pagos próximos y S/ 200 para la reserva. La interfaz muestra S/ 571 disponibles y enlaza al cálculo completo.',
      problem: 'El saldo total reúne consumo diario, impuestos, capital de trabajo y pagos próximos en una sola cifra.',
      solution: 'Allpa traslada el cálculo a la interfaz y lo presenta antes de la siguiente decisión de gasto.'
    },
    discovery: {
      label: 'Descubrimiento conductual',
      title: 'La primera interpretación del saldo define la siguiente decisión.',
      intro: 'El proyecto parte de una conducta específica: interpretar el saldo total como dinero disponible y reconstruir después qué parte ya estaba comprometida.',
      stat: '43%',
      statLabel: 'de microempresarios separaba adecuadamente las cuentas personales y del negocio.',
      source: 'SBS y PRODUCE · Encuesta nacional de capacidades financieras, 2021.',
      researchNote: 'La primera versión apunta a profesionales independientes urbanos que cobran digitalmente, ya utilizan iPhone y separan sus obligaciones mediante notas, hojas de cálculo, cuentas distintas o cálculo mental.',
      biases: [
        { title: 'Saliencia del saldo total', body: 'Ver S/ 2.000 concentra la atención mientras alquiler e impuestos futuros quedan fuera de la lectura principal.', response: 'Convertir el disponible en la cifra protagonista.' },
        { title: 'Sesgo del presente', body: 'Lo disponible hoy pesa más que una obligación conocida que vence en tres semanas.', response: 'Intervenir en T+0 del cobro.' },
        { title: 'Contabilidad mental', body: 'Sin separación, consumo diario y capital de trabajo compiten dentro de la misma bolsa.', response: 'Partición automática y reversible.' }
      ],
      principle: 'El disponible aparece con su cálculo, sus supuestos y una vía directa para corregir la regla.'
    },
    definition: {
      label: 'Definición del usuario',
      title: 'Una audiencia definida por su comportamiento financiero.',
      intro: 'Los arquetipos representan situaciones de uso pendientes de contraste mediante investigación con profesionales independientes bancarizados que ya utilizan iPhone.',
      personas: [
        { name: 'Luis, 32', role: 'Consultor independiente', quote: '“Cobro por proyectos y separo impuestos en una hoja de cálculo.”', goal: 'Reconocer cuánto puede gastar cuando un cliente paga en una fecha variable.', friction: 'Pagos próximos y dinero corriente comparten el saldo.', need: 'Un disponible explicado y fácil de corregir.' },
        { name: 'Carla, 36', role: 'Directora de estudio creativo', quote: '“Capital de trabajo, impuestos y dinero personal comparten la cuenta.”', goal: 'Diferenciar operación y disponibilidad personal.', friction: 'La distribución cambia según la carga de proyectos.', need: 'Reglas editables que conserven el origen de cada monto.' }
      ],
      hmw: '¿Cómo puede una interfaz influir en la primera interpretación del saldo sin quitarle control a la persona?'
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
        ['Jerarquía de plataformas', 'El iPhone contiene el flujo completo; el reloj añade intervenciones breves y opcionales.'],
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
      title: 'El flujo completo vive en iPhone; el reloj interviene en momentos breves.',
      intro: 'iOS contiene configuración, cálculo, edición, proyección e historial. watchOS añade ingresos y alertas accionables sin convertirse en una condición de uso.',
      platformWatch: 'watchOS', platformPhone: 'iOS', selector: 'Explorar pantalla',
      watch: [
        { id: 'income', tab: 'Ingreso', title: 'Ingreso y resultado', tone: 'gold', rationale: 'La notificación reúne monto recibido, disponible calculado y origen de la distribución en una lectura breve.' },
        { id: 'available', tab: 'Disponible', title: 'Distribución breve', tone: 'green', rationale: 'Pagos y reserva acompañan al disponible para que la cifra conserve contexto aun en la pantalla pequeña.' },
        { id: 'payment', tab: 'Pago cubierto', title: 'Consecuencia del pago', tone: 'gold', rationale: 'La confirmación traduce el pago a dinero restante y comprueba que las categorías protegidas siguen cubiertas.' },
        { id: 'critical', tab: 'Usa reserva', title: 'Alerta de dinero protegido', tone: 'coral', rationale: 'La interfaz nombra los S/ 32 que saldrían de la reserva y da mayor peso a cancelar.' }
      ],
      phone: [
        { id: 'connection', tab: 'Conexión', title: 'Permisos con contexto', rationale: 'La solicitud explica para qué se leerán los movimientos, qué puede hacer Allpa y cómo retirar el acceso.' },
        { id: 'payments', tab: 'Pagos', title: 'Confirmar lo que se protege', rationale: 'La persona revisa los pagos detectados y decide cuáles formarán parte de su disponible.' },
        { id: 'reserve', tab: 'Reserva', title: 'Una regla que se puede ajustar', rationale: 'El control muestra porcentaje y equivalente en soles para evitar que la configuración quede abstracta.' },
        { id: 'preview', tab: 'Vista previa', title: 'Comprobar antes de activar', rationale: 'El ejemplo anticipa la ecuación completa y permite corregir la regla antes de automatizarla.' },
        { id: 'home', tab: 'Inicio', title: 'Disponible con contexto', rationale: 'La cifra accionable se vincula con el ingreso que la originó y abre directamente su cálculo.' },
        { id: 'calculation', tab: 'Cálculo', title: 'Una cifra trazable', rationale: 'Ingreso, pagos, reserva, alcance de datos y última actualización aparecen en el mismo recorrido.' },
        { id: 'edit', tab: 'Editar', title: 'Control después de automatizar', rationale: 'Pagos y reserva siguen editables; los cambios declaran cuándo entrarán en vigor.' },
        { id: 'coverage', tab: 'Proyección', title: 'Estimación y supuestos', rationale: 'Los 28 días se presentan junto con las variables que producen la proyección.' },
        { id: 'history', tab: 'Movimientos', title: 'Agencia visible', rationale: 'Cada evento diferencia las acciones de Allpa de aquellas confirmadas por la persona.' },
        { id: 'protected', tab: 'Protegido', title: 'Fricción con consecuencia explícita', rationale: 'Continuar exige confirmar el monto exacto que saldrá de la reserva; cancelar mantiene la jerarquía principal.' }
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
        ['Datos incompletos', 'El cálculo cambia a “Disponible por revisar” cuando existen movimientos sin clasificar o una cuenta pierde conexión.']
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
      closing: 'Allpa busca reducir el espacio mental que ocupa administrar una liquidez variable todos los días.',
      next: 'Siguiente caso', nextTitle: 'BBVA Perú · Diseño financiero'
    },
    contact: 'Conectemos', contactTitle: 'Conversemos sobre decisiones financieras, comportamiento y sistemas.', linkedinNetwork: 'Red profesional', copied: 'Email copiado', footer: 'Diseñado y construido en Lima.'
  },
  en: {
    pageTitle: 'Allpa — Behavioral design for variable income | Rodrigo Aquije',
    headerSubtitle: 'Case study · Allpa',
    nav: { discovery: 'Discovery', definition: 'Definition', architecture: 'Architecture', prototype: 'Prototype', validation: 'Validation' },
    hero: {
      eyebrow: 'Allpa · Behavioral Design · Product system',
      title: 'Turning variable income into a clear decision about what to spend.',
      intro: 'A concept for urban independent professionals who get paid digitally, manage recurring obligations and already use an iPhone.',
      disclosure: 'Independent concept project. Context figures come from public sources; product indicators describe how I would validate the proposal.',
      meta: [['Role', 'Product Designer · concept'], ['Method', 'Behavioral Design'], ['Platforms', 'iOS · optional watchOS'], ['Year', '2026']],
      moment: '6:42 PM · A S/ 2,000 payment arrives',
      momentBody: 'Configured rules set aside S/ 1,229 for upcoming bills and S/ 200 for the reserve. The interface shows S/ 571 available and links to the full calculation.',
      problem: 'The total balance combines daily spending, taxes, working capital and upcoming payments in one figure.',
      solution: 'Allpa moves that calculation into the interface and presents it before the next spending decision.'
    },
    discovery: {
      label: 'Behavioral discovery', title: 'The first reading of a balance shapes the next decision.',
      intro: 'The project starts from a specific behavior: reading the total balance as available money and reconstructing commitments afterwards.',
      stat: '43%', statLabel: 'of micro-entrepreneurs adequately separated personal and business accounts.', source: 'SBS and PRODUCE · National financial-capabilities survey, 2021.',
      researchNote: 'The first version targets urban independent professionals who get paid digitally, already use iPhone and currently separate obligations with notes, spreadsheets, multiple accounts or mental calculation.',
      biases: [
        { title: 'Total-balance salience', body: 'Seeing S/ 2,000 captures attention while future rent and tax obligations remain outside the primary view.', response: 'Make available money the primary figure.' },
        { title: 'Present bias', body: 'Money available today outweighs a known obligation due in three weeks.', response: 'Intervene at payment T+0.' },
        { title: 'Mental accounting', body: 'Without separation, daily consumption and working capital compete in one pool.', response: 'Automatic, reversible partitioning.' }
      ],
      principle: 'Available money appears with its calculation, assumptions and a direct route to correct the rule.'
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
      tradeoffs: [['Intentional friction', 'An extra step is valid when it reveals a financial consequence before spending.'], ['Platform hierarchy', 'iPhone contains the complete flow; the watch adds brief, optional interventions.'], ['Autonomy preserved', 'Allpa recommends and structures but never blocks a purchase by force.']],
      audit: [['Technical copy', '“Net liquidity” and “structural retention” became everyday language.'], ['Unnecessary confirmation', 'The first version asked people to accept saving; the correction acts by default and allows undo.'], ['Risky hierarchy', '“Send anyway” stopped being the primary button and became a deliberately quiet action.']]
    },
    prototype: {
      label: 'Dual prototype', title: 'The full flow lives on iPhone; the watch handles brief moments.',
      intro: 'iOS contains setup, calculation, editing, forecasts and history. watchOS adds income events and actionable alerts without becoming a requirement.',
      platformWatch: 'watchOS', platformPhone: 'iOS', selector: 'Explore screen',
      watch: [
        { id: 'income', tab: 'Income', title: 'Income and result', tone: 'gold', rationale: 'The notification combines incoming amount, calculated availability and allocation source in one short read.' },
        { id: 'available', tab: 'Available', title: 'Compact allocation', tone: 'green', rationale: 'Bills and reserve remain next to available money so the figure keeps its context on a small screen.' },
        { id: 'payment', tab: 'Covered payment', title: 'Payment consequence', tone: 'gold', rationale: 'Confirmation translates the payment into money remaining and verifies protected categories stay covered.' },
        { id: 'critical', tab: 'Uses reserve', title: 'Protected-money warning', tone: 'coral', rationale: 'The UI names the S/ 32 that would leave the reserve and gives cancellation greater visual weight.' }
      ],
      phone: [
        { id: 'connection', tab: 'Connection', title: 'Permissions with context', rationale: 'The request explains why movements are read, what Allpa can do and how access can be removed.' },
        { id: 'payments', tab: 'Bills', title: 'Confirm what gets protected', rationale: 'People review detected bills and choose which ones become part of the available-money calculation.' },
        { id: 'reserve', tab: 'Reserve', title: 'An adjustable rule', rationale: 'The control shows both percentage and soles so the setting remains concrete.' },
        { id: 'preview', tab: 'Preview', title: 'Check before activation', rationale: 'The example reveals the full equation and supports correction before automation begins.' },
        { id: 'home', tab: 'Home', title: 'Available money in context', rationale: 'The actionable figure is tied to its source payment and opens its calculation directly.' },
        { id: 'calculation', tab: 'Calculation', title: 'A traceable figure', rationale: 'Income, bills, reserve, data scope and last update appear in one journey.' },
        { id: 'edit', tab: 'Edit', title: 'Control after automation', rationale: 'Bills and reserve remain editable, and changes state when they take effect.' },
        { id: 'coverage', tab: 'Forecast', title: 'Estimate and assumptions', rationale: 'The 28-day estimate appears beside the variables that produce it.' },
        { id: 'history', tab: 'Activity', title: 'Visible agency', rationale: 'Each event distinguishes Allpa actions from decisions confirmed by the person.' },
        { id: 'protected', tab: 'Protected', title: 'Friction with an explicit consequence', rationale: 'Continuing requires confirmation of the exact reserve amount affected; cancel remains primary.' }
      ],
      systemTitle: 'A visual system with few roles and no decorative noise.',
      tokens: [['Gold', '#F5A623', 'Available cash and primary action'], ['Green', '#3ECF6E', 'Coverage and confirmation'], ['Coral', '#FF5A5F', 'Critical risk'], ['Sand', '#A8957E', 'Committed money']]
    },
    validation: {
      label: 'Validation and business', title: 'What must be measured before impact can be claimed.',
      intro: 'The concept has no real pilot yet. Evaluation is framed as hypotheses, limits and observable signals, never invented percentages.',
      risks: [['Intervention fatigue', 'If a suggestion is repeatedly ignored, the system reduces frequency and groups notices.'], ['Invisible cash', 'A withdrawal cannot be classified without user input, so the calculation adopts a conservative scenario.'], ['Incomplete data', 'The status changes to “Available for review” when movements remain unclassified or an account loses connection.']],
      metrics: [['Partition acceptance', 'Does the intervention arrive with the right timing and language?', 'Compare acceptance, editing and reversal during T+0.'], ['Override rate', 'Does the alert protect or start to fatigue?', 'Measure how many people continue despite critical coverage.'], ['Reserve persistence', 'Do obligations remain protected until due?', 'Observe how long each bucket lasts before an edit or withdrawal.'], ['Self-reported stress', 'Does the person perform less daily mental accounting?', 'Qualitative follow-up and a short monthly scale.']],
      business: [['Base', 'Partitions and spendable-balance visibility.'], ['Pro', 'Forecasts and trend audits.'], ['B2B2C', 'Licensing as a behavioral layer for financial institutions.']],
      simulation: { title: 'Simulate coverage', body: 'A conceptual demonstration of how the model responds over time.', day: 'Day', remaining: 'Estimated available', stable: 'Stable coverage', warning: 'Preventive alert', critical: 'Critical limit' },
      closing: 'Allpa’s value is not saving for people. It is keeping liquidity management from occupying mental space every day.',
      next: 'Next case', nextTitle: 'BBVA Peru · Financial design'
    },
    contact: 'Let’s connect', contactTitle: 'Let’s discuss financial decisions, behavior and systems.', linkedinNetwork: 'Professional network', copied: 'Email copied', footer: 'Designed and built in Lima.'
  }
  }
});
