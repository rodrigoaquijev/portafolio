import { defineCaseStudy } from './caseStudyContract.js';

const states = {
  es: [
    { id: 's13', tab: 'Aporte pendiente', title: 'Tu aporte va en camino.', body: 'Muestra los pasos y el tiempo habitual de confirmación. El saldo no cambia hasta que el proveedor confirma.', rule: 'No ofrece reenviar: un segundo envío duplicaría el aporte.' },
    { id: 's14', tab: 'Aporte fallido', title: 'Tu aporte rebotó.', body: 'Antes que la causa, responde la duda real: la plata sigue en tu cuenta y el fondo no cambió.', rule: 'El reintento aparece porque el rechazo está confirmado.' },
    { id: 's20', tab: 'Falta un aporte', title: 'A la vaca le falta una mancha.', body: 'Las manchas de la vaca son los integrantes. La de Ana aparece punteada porque su aporte no llegó.', rule: 'El recordatorio nombra monto y fecha; nadie aparece en rojo.' },
    { id: 's16', tab: 'Pago en proceso', title: 'Llevando el pago a WIN.', body: 'El saldo sigue sin descontar y el indicador muestra en qué paso está la operación.', rule: 'Mientras el resultado es incierto, no se puede pagar otra vez.' },
    { id: 's17', tab: 'Pago fallido', title: 'No se descontó nada del fondo.', body: 'El título dice qué pasó con la plata; la causa del rechazo y el código usado van después.', rule: 'Sin pago, no hay constancia; el dinero apartado sigue intacto.' },
    { id: 's18', tab: 'Fondo insuficiente', title: 'Faltan S/ 19 para la compra del mes.', body: 'Solo cuenta el dinero sin asignar. Lo apartado para internet y luz no se toca.', rule: 'Un bloqueo se convierte en una cifra accionable.' },
    { id: 's15', tab: 'Pago por aprobar', title: 'Falta un visto bueno.', body: 'Sobre S/ 200, el pago espera a otro integrante. Basta una aprobación de Luz o Ana.', rule: 'El fondo no cambia hasta que el pago se procese.' },
    { id: 's19', tab: 'Invitación vencida', title: 'Esta invitación ya venció.', body: 'Un código vencido no permite entrar. La salida es pedir un enlace nuevo a quien invitó.', rule: 'Unirse es aceptar reglas sobre dinero; no ocurre con un enlace viejo.' },
    { id: 's21', tab: 'Cambio de regla', title: 'Luz propone subir el límite.', body: 'La regla vigente y la propuesta se comparan lado a lado, con el voto de cada integrante.', rule: 'La regla anterior sigue aplicando hasta completar los votos.' },
  ],
  en: [
    { id: 's13', tab: 'Pending contribution', title: 'Your contribution is on its way.', body: 'It shows the steps and the usual confirmation time. The balance does not change until the provider confirms.', rule: 'It never offers to resend: a second transfer would duplicate the contribution.' },
    { id: 's14', tab: 'Failed contribution', title: 'Your contribution bounced.', body: 'Before the cause, it answers the real question: the money is still in your account and the fund did not change.', rule: 'Retry appears because the rejection is confirmed.' },
    { id: 's20', tab: 'Missing contribution', title: 'The cow is missing a spot.', body: 'The cow’s spots are the members. Ana’s is dotted because her contribution has not arrived.', rule: 'The reminder names amount and date; nobody is shown in red.' },
    { id: 's16', tab: 'Payment in progress', title: 'Taking the payment to WIN.', body: 'The balance stays untouched and the indicator shows which step the operation is on.', rule: 'While the result is uncertain, paying again is not possible.' },
    { id: 's17', tab: 'Failed payment', title: 'Nothing was taken from the fund.', body: 'The title says what happened to the money; the rejection cause and the code used come after.', rule: 'No payment, no receipt; reserved money stays intact.' },
    { id: 's18', tab: 'Insufficient fund', title: 'S/ 19 short for the monthly groceries.', body: 'Only unassigned money counts. Money reserved for internet and electricity is not touched.', rule: 'A block becomes an actionable number.' },
    { id: 's15', tab: 'Payment awaiting approval', title: 'One approval missing.', body: 'Above S/ 200, the payment waits for another member. One approval from Luz or Ana is enough.', rule: 'The fund does not change until the payment is processed.' },
    { id: 's19', tab: 'Expired invitation', title: 'This invitation has expired.', body: 'An expired code does not let anyone in. The way out is asking the inviter for a new link.', rule: 'Joining means accepting rules about money; it does not happen with an old link.' },
    { id: 's21', tab: 'Rule change', title: 'Luz proposes raising the limit.', body: 'The current rule and the proposal are compared side by side, with each member’s vote.', rule: 'The previous rule applies until all votes are in.' },
  ],
};

export const VACA_CASE = defineCaseStudy({
  slug: 'vaca',
  name: 'Vaca',
  methodology: 'Double Diamond',
  phases: ['discover', 'define', 'develop', 'deliver'],
  translations: {
    es: {
      pageTitle: 'Vaca — Product design | Rodrigo Aquije',
      headerSubtitle: 'Caso de estudio · Vaca',
      nav: { discover: 'Discover', define: 'Define', develop: 'Develop', deliver: 'Deliver' },
      hero: {
        eyebrow: 'Vaca · Product design · Proyecto conceptual · 2026',
        title: 'Quería compartir gastos sin convertirme en el cobrador del grupo.',
        intro: 'En una casa compartida, alguien paga el recibo completo y después persigue a los demás. Diseñé Vaca para mover ese momento: el grupo aporta a un fondo común antes del gasto y los pagos salen de ahí.',
        disclosure: 'Proyecto conceptual. Los datos del escenario son ficticios.',
        meta: [['Rol', 'Product Designer · único diseñador'], ['Tipo', 'Proyecto conceptual'], ['Herramientas', 'Mobbin · Brilliant · Claude Design · Three.js'], ['Entregables', '21 pantallas · prototipo navegable']],
        problem: 'Las apps para dividir cuentas registran la deuda, pero el adelanto sigue saliendo de un solo bolsillo.',
        solution: 'Un fondo común con dinero apartado por gasto y reglas visibles para todo el grupo.',
        role: 'Benchmark, journey map, definición, user flows, arquitectura, modelo de estados, UI kit, 21 pantallas y prototipo.'
      },
      method: {
        label: 'Cómo trabajé',
        title: 'Cuatro fases, un artefacto real en cada una.',
        intro: 'Usé el Double Diamond como estructura. Cada fase produjo una pieza concreta que cambió una decisión de producto.',
        phases: [['Discover', 'Journey map del recorrido actual y benchmark de 4 productos.'], ['Define', 'Jobs to be Done, How Might We y mapa de supuestos.'], ['Develop', '3 user flows, arquitectura de información y modelo de estados.'], ['Deliver', 'UI kit, 21 pantallas, prototipo navegable y plan de pruebas.']]
      },
      discover: {
        label: 'Discover · El recorrido actual',
        title: 'El cálculo toma un minuto. Cobrar puede tomar días.',
        intro: 'Reconstruí cómo se paga hoy un gasto compartido a partir de mi experiencia en una casa de tres personas, y lo contrasté con cómo lo resuelven los productos existentes.',
        quote: 'El momento más bajo llega al final, cuando quien adelantó el dinero tiene que perseguir a los demás.',
        journeyAlt: 'Journey map del recorrido actual en cinco etapas: llega el recibo, alguien paga todo, calcula y avisa, espera y persigue. La curva emocional cae hasta el final.',
        benchmarkTitle: 'Cuatro productos, dos preguntas: cuándo se mueve el dinero y quién lo tiene.',
        benchmarkAlt: 'Matriz comparativa de Splitwise, Monzo Split, Cash App Pools y Revolut Pockets, con un mapa de posicionamiento.',
        findings: [['Las apps de deudas', 'Splitwise y Monzo ordenan el «me debes», pero el adelanto ya ocurrió.'], ['Las colectas', 'Cash App Pools junta el dinero antes, pero lo concentra en un organizador.'], ['Los pockets', 'Revolut aparta dinero por tipo de pago, pero es individual.'], ['El espacio libre', 'Ninguno combina fondo previo grupal, dinero apartado por gasto y reglas compartidas.']]
      },
      define: {
        label: 'Define · Problema y supuestos',
        title: 'Un trabajo concreto y cuatro supuestos que podrían tumbar la idea.',
        intro: 'Convertí el recorrido en un Job to be Done y ordené los supuestos por criticidad y evidencia. Los más riesgosos definen qué resolver primero.',
        jtbd: 'Cuando llega un gasto de la casa, quiero que se pague con la plata de todos, para no adelantar dinero ni perseguir a nadie.',
        hmw: '¿Cómo podríamos pagar los gastos de una casa compartida sin que una persona adelante el dinero y tenga que cobrarlo después?',
        assumptions: [['Aportar antes', 'Las personas aceptarían poner su parte antes de que llegue el gasto.'], ['Confianza', 'Confiarían en un fondo custodiado por una entidad regulada.'], ['Vocabulario', 'Entienden la diferencia entre «apartado» y «sin asignar».'], ['Espera', 'Unos minutos de confirmación no provocan aportes duplicados.']],
        constraints: [['Sin proveedor real', 'Diseñé la interfaz de un fondo custodiado por una entidad regulada y lo declaro como hipótesis.'], ['Tres velocidades', 'Yape, Plin y la transferencia bancaria confirman en tiempos distintos; el saldo cambia solo con confirmación.'], ['Marca juguetona, dinero ajeno', 'La regla: jugar alrededor del dinero, nunca con el dinero.'], ['Tres semanas', 'Prioricé crear, aportar y pagar con sus fallas. La salida de un integrante quedó fuera.']],
        definitionAlt: 'Job to be Done, How Might We, criterios de éxito y mapa de supuestos ordenados por criticidad y evidencia.'
      },
      develop: {
        label: 'Develop · Decisiones',
        title: 'Diseñé las ramas antes que las pantallas.',
        intro: 'Dibujé los tres flujos con todas sus ramas y modelé los estados del dinero antes de diseñar una sola pantalla de error. Con el modelo aparecieron nueve situaciones que el flujo feliz escondía.',
        decisions: [['Aportar antes de gastar', 'Comparé registrar deudas, recordatorios automáticos y un fondo previo. Solo el fondo eliminaba el adelanto; a cambio, el producto tiene que ganarse la confianza para custodiar dinero.'], ['Una sola lectura del dinero', 'Mis primeras versiones usaban «libre», «reservado», «protegido» y «disponible» para dos conceptos. Los reduje a una ecuación que la interfaz nunca rompe.'], ['Estados que no mienten', 'Mientras un resultado es incierto, la interfaz no ofrece repetir la operación. Separé «rechaza» de «aún no» porque piden acciones opuestas.'], ['Cuatro destinos, cuatro preguntas', 'Inicio dice cuánto hay; Fondo, cómo se reparte; Actividad, qué pasó; Grupo, quién decide. Aportar y pagar son acciones, no destinos.']],
        equation: { total: 'Saldo total', reserved: 'Apartado', free: 'Sin asignar', note: 'Un pago desde lo apartado no toca el dinero sin asignar. Un fondo insuficiente puede decir exactamente cuánto falta.' },
        flowsLabel: 'Artefactos de desarrollo',
        flows: [
          { id: 'pagar', tab: 'Pagar un gasto', src: 'p04', caption: 'Cuatro puntos de decisión: si alcanza el dinero, si supera el límite del grupo, si alguien aprueba y si el proveedor confirma.' },
          { id: 'aportar', tab: 'Aportar', src: 'p05', caption: 'Tres salidas en la confirmación: confirmado, pendiente y rechazado. Reintentar solo tiene sentido en la última.' },
          { id: 'unirse', tab: 'Crear o unirse', src: 'p06', caption: 'Dos actores, un mismo acuerdo. Quien se une ve aporte, fecha y reglas antes de aceptar.' },
          { id: 'estados', tab: 'Modelo de estados', src: 'p08', caption: 'Qué puede pasar con un aporte, un pago y una regla. Solo «Confirmado» y «Pagado» modifican el saldo.' },
          { id: 'ia', tab: 'Arquitectura', src: 'p07', caption: 'Onboarding y cuatro destinos de navegación. Los estados críticos son transversales.' },
        ],
        discarded: [['La mascota en errores graves', 'Aparece en esperas y errores recuperables, nunca junto a una cifra que alguien deba verificar.'], ['Señalar a quien no aportó', 'El recordatorio nombra monto y fecha, sin exponer a nadie.'], ['«Reintentar» en cualquier fallo', 'Solo aparece cuando el rechazo está confirmado.']]
      },
      deliver: {
        label: 'Deliver · Solución',
        title: 'Nueve estados críticos, una misma estructura.',
        intro: 'La ilustración 3D cambia según el estado; la hoja de datos repite siempre el mismo orden: estado, título, explicación, cifra principal y una sola acción primaria.',
        statesLabel: 'Elegir estado',
        states: states.es,
        mainFlowTitle: 'El flujo principal: doce pantallas, de la bienvenida a las reglas del grupo.',
        mainFlowAlt: 'Las doce pantallas del flujo principal de Vaca.',
        systemTitle: 'Un UI kit con base de sistema de diseño, nombrado con precisión.',
        systemAlt: 'UI kit de Vaca con color, tipografía, componentes, estados y overlays, junto a sus Design Tokens.',
        system: [['Lo que existe', '9 componentes base con sus estados, 43 Design Tokens en formato DTCG, patrones financieros y reglas de voz y accesibilidad.'], ['Siguiente versión', 'Tokenizar todos los colores en uso, sumar tokens de componente, sincronizar la librería con código y definir versionado y gobernanza.'], ['Una regla del sistema', 'El primario lima con relieve es para acciones cotidianas. Después de un error, el primario es tinta y sin relieve, para leer con calma.']],
        writing: [['Error en el pago', 'No se descontó nada del fondo.'], ['Procesando…', 'Llevando el pago a WIN. No lo pagues otra vez.'], ['Saldo insuficiente', 'Faltan S/ 19 para la compra del mes.']],
        writingLabel: 'UX writing · mensaje genérico frente a Vaca',
        aiTitle: 'Producción con IA, decisiones propias.',
        ai: [['Mobbin', 'Benchmark de flujos reales.'], ['Brilliant', 'Pantallas del flujo principal.'], ['Claude Code', 'Estados críticos, artefactos de proceso y prototipo navegable.'], ['Three.js', 'Ilustraciones 3D modeladas y renderizadas con código.']],
        aiNote: 'Definí el problema, el modelo del dinero, los flujos, los estados y el sistema, y revisé cada iteración. La IA aceleró la producción.',
        pilotTitle: 'Iteración: un recorrido cognitivo por las cinco tareas.',
        pilotIntro: 'Recorrí cada tarea del prototipo paso a paso desde perfiles distintos: quien suele pagar primero, quien devuelve apenas le avisan y quien comparte casa por primera vez. Encontré cuatro fricciones y las corregí.',
        pilotAlt: 'Antes y después: Inicio con la plata para gastos nuevos como cifra principal y un aviso de aprobación que aclara que hay saldo.',
        pilot: [['El total se leía como disponible', 'Inicio ahora destaca lo que se puede usar para gastos nuevos.'], ['La espera no decía si Yape debitó', 'El estado pendiente muestra pasos y tiempo habitual.'], ['El error tapaba la buena noticia', 'El título del pago fallido dice que no se descontó nada.'], ['El límite parecía falta de saldo', 'El aviso aclara que hay saldo y que es una regla del grupo.']],
        testTitle: 'Criterios de validación.',
        tests: [['Leer el fondo', 'Distingue «apartado» de «sin asignar» sin ayuda.'], ['Aporte pendiente', 'No intenta reenviarlo.'], ['Pagar internet', 'Completa el pago desde lo apartado.'], ['Pago fallido', 'Explica que la plata no salió del fondo.'], ['Pago sobre el límite', 'Nombra la regla del límite.']],
        rules: 'Reglas de decisión: si menos de 4 de 5 distinguen «apartado» de «sin asignar», cambio los nombres; si alguien reenvía un aporte pendiente, rediseño ese estado; si la mayoría rechaza aportar por adelantado, vuelvo a la alternativa de recordatorios.',
        learnings: [['El vocabulario es modelo de datos', 'Mientras el producto tuvo cuatro nombres para el dinero, ninguna pantalla podía ser clara.'], ['Las ramas definen la confianza', 'Un fondo compartido se gana o se pierde en el minuto en que un pago no confirma.'], ['Mi experiencia como punto de partida', 'Me dio velocidad; el benchmark me obligó a separar mi forma de organizarme de lo que resuelven los productos existentes.']]
      },
      footer: 'Diseñado y construido en Lima.'
    },
    en: {
      pageTitle: 'Vaca — Product design | Rodrigo Aquije',
      headerSubtitle: 'Case study · Vaca',
      nav: { discover: 'Discover', define: 'Define', develop: 'Develop', deliver: 'Deliver' },
      hero: {
        eyebrow: 'Vaca · Product design · Concept project · 2026',
        title: 'I wanted to share expenses without becoming the group’s debt collector.',
        intro: 'In a shared home, someone pays the full bill and then chases everyone else. I designed Vaca to move that moment: the group contributes to a shared fund before the expense, and payments come out of it.',
        disclosure: 'Concept project. Scenario data is fictional.',
        meta: [['Role', 'Product Designer · sole designer'], ['Type', 'Concept project'], ['Tools', 'Mobbin · Brilliant · Claude Design · Three.js'], ['Deliverables', '21 screens · clickable prototype']],
        problem: 'Bill-splitting apps record the debt, but the upfront payment still comes out of one person’s pocket.',
        solution: 'A shared fund with money reserved per expense and rules visible to the whole group.',
        role: 'Benchmark, journey map, problem definition, user flows, architecture, state model, UI kit, 21 screens and prototype.'
      },
      method: {
        label: 'How I worked',
        title: 'Four phases, one real artifact in each.',
        intro: 'I used the Double Diamond as structure. Each phase produced a concrete piece that changed a product decision.',
        phases: [['Discover', 'Current-state journey map and a benchmark of 4 products.'], ['Define', 'Jobs to be Done, How Might We and an assumption map.'], ['Develop', '3 user flows, information architecture and a state model.'], ['Deliver', 'UI kit, 21 screens, clickable prototype and test plan.']]
      },
      discover: {
        label: 'Discover · The current journey',
        title: 'Splitting takes a minute. Collecting can take days.',
        intro: 'I reconstructed how a shared expense is paid today from my own experience in a three-person home, and contrasted it with how existing products solve it.',
        quote: 'The lowest point comes at the end, when whoever paid upfront has to chase everyone else.',
        journeyAlt: 'Current-state journey map in five stages: the bill arrives, someone pays it all, splits and notifies, waits and chases. The emotional curve drops until the end.',
        benchmarkTitle: 'Four products, two questions: when money moves and who holds it.',
        benchmarkAlt: 'Comparison matrix of Splitwise, Monzo Split, Cash App Pools and Revolut Pockets, with a positioning map.',
        findings: [['Debt apps', 'Splitwise and Monzo organize “you owe me”, but the upfront payment already happened.'], ['Collections', 'Cash App Pools gathers money first, but concentrates it with one organizer.'], ['Pockets', 'Revolut reserves money per payment type, but it is individual.'], ['The open space', 'None combines a group fund before spending, money reserved per expense and shared rules.']]
      },
      define: {
        label: 'Define · Problem and assumptions',
        title: 'One concrete job and four assumptions that could sink the idea.',
        intro: 'I turned the journey into a Job to be Done and ranked assumptions by how critical they are and how much evidence supports them. The riskiest ones decide what to solve first.',
        jtbd: 'When a household bill arrives, I want it paid with everyone’s money, so I don’t front the cash or chase anyone.',
        hmw: 'How might we pay a shared home’s expenses without one person fronting the money and collecting it later?',
        assumptions: [['Paying first', 'People would accept contributing before the expense arrives.'], ['Trust', 'They would trust a fund held by a regulated entity.'], ['Vocabulary', 'They understand the difference between “reserved” and “unassigned”.'], ['Waiting', 'A few minutes of confirmation do not cause duplicate contributions.']],
        constraints: [['No real provider', 'I designed the interface for a fund held by a regulated entity and state it as a hypothesis.'], ['Three speeds', 'Yape, Plin and bank transfers confirm at different times; the balance changes only on confirmation.'], ['Playful brand, other people’s money', 'The rule: play around money, never with money.'], ['Three weeks', 'I prioritized creating, contributing and paying, with their failures. A member leaving was left out.']],
        definitionAlt: 'Job to be Done, How Might We, success criteria and an assumption map ranked by criticality and evidence.'
      },
      develop: {
        label: 'Develop · Decisions',
        title: 'I designed the branches before the screens.',
        intro: 'I drew the three flows with every branch and modeled the money states before designing a single error screen. The model surfaced nine situations the happy path was hiding.',
        decisions: [['Contribute before spending', 'I compared tracking debts, automatic reminders and a prepaid fund. Only the fund removed the upfront payment; in exchange, the product has to earn trust to hold money.'], ['One reading of the money', 'My first versions used “free”, “reserved”, “protected” and “available” for two concepts. I reduced them to one equation the interface never breaks.'], ['States that don’t lie', 'While a result is uncertain, the interface never offers to repeat the operation. I separated “rejected” from “not yet” because they call for opposite actions.'], ['Four destinations, four questions', 'Home says how much there is; Fund, how it is split; Activity, what happened; Group, who decides. Contributing and paying are actions, not destinations.']],
        equation: { total: 'Total balance', reserved: 'Reserved', free: 'Unassigned', note: 'A payment from reserved money does not touch unassigned money. An insufficient fund can say exactly how much is missing.' },
        flowsLabel: 'Development artifacts',
        flows: [
          { id: 'pagar', tab: 'Pay an expense', src: 'p04', caption: 'Four decision points: whether the money is enough, whether it exceeds the group limit, whether someone approves and whether the provider confirms.' },
          { id: 'aportar', tab: 'Contribute', src: 'p05', caption: 'Three outcomes on confirmation: confirmed, pending and rejected. Retrying only makes sense for the last one.' },
          { id: 'unirse', tab: 'Create or join', src: 'p06', caption: 'Two actors, one agreement. Whoever joins sees the contribution, date and rules before accepting.' },
          { id: 'estados', tab: 'State model', src: 'p08', caption: 'What can happen to a contribution, a payment and a rule. Only “Confirmed” and “Paid” change the balance.' },
          { id: 'ia', tab: 'Architecture', src: 'p07', caption: 'Onboarding and four navigation destinations. Critical states cut across all of them.' },
        ],
        discarded: [['The mascot in serious errors', 'It appears in waits and recoverable errors, never next to a figure someone needs to verify.'], ['Pointing at who didn’t pay', 'The reminder names amount and date without exposing anyone.'], ['“Retry” on every failure', 'It only appears when the rejection is confirmed.']]
      },
      deliver: {
        label: 'Deliver · Solution',
        title: 'Nine critical states, one shared structure.',
        intro: 'The 3D illustration changes with each state; the data sheet always repeats the same order: status, title, explanation, key figure and a single primary action.',
        statesLabel: 'Choose a state',
        states: states.en,
        mainFlowTitle: 'The main flow: twelve screens, from welcome to group rules.',
        mainFlowAlt: 'The twelve main-flow screens of Vaca.',
        systemTitle: 'A UI kit with a design-system foundation, named precisely.',
        systemAlt: 'Vaca UI kit with color, typography, components, states and overlays, next to its Design Tokens.',
        system: [['What exists', '9 base components with their states, 43 Design Tokens in DTCG format, financial patterns and voice and accessibility rules.'], ['Next version', 'Tokenize every color in use, add component tokens, sync the library with code and define versioning and governance.'], ['A system rule', 'The raised lime primary is for everyday actions. After an error, the primary is ink and flat, so the next step reads calmly.']],
        writing: [['Payment error', 'Nothing was taken from the fund.'], ['Processing…', 'Taking the payment to WIN. Don’t pay it again.'], ['Insufficient balance', 'S/ 19 short for the monthly groceries.']],
        writingLabel: 'UX writing · generic message versus Vaca',
        aiTitle: 'Produced with AI, decided by me.',
        ai: [['Mobbin', 'Benchmark of real flows.'], ['Brilliant', 'Main-flow screens.'], ['Claude Code', 'Critical states, process artifacts and clickable prototype.'], ['Three.js', '3D illustrations modeled and rendered in code.']],
        aiNote: 'I defined the problem, the money model, the flows, the states and the system, and reviewed every iteration. AI sped up production.',
        pilotTitle: 'Iteration: a cognitive walkthrough of the five tasks.',
        pilotIntro: 'I walked through each prototype task step by step from different profiles: the one who usually pays first, the one who pays back right away and the first-time housemate. I found four friction points and fixed them.',
        pilotAlt: 'Before and after: Home with money for new expenses as the key figure, and an approval notice clarifying that there is enough balance.',
        pilot: [['The total read as available', 'Home now leads with what can be used for new expenses.'], ['Waiting didn’t say if Yape charged', 'The pending state shows steps and usual time.'], ['The error hid the good news', 'The failed-payment title says nothing was taken.'], ['The limit looked like low balance', 'The notice clarifies there is balance and it is a group rule.']],
        testTitle: 'Validation criteria.',
        tests: [['Reading the fund', 'Tells “reserved” from “unassigned” without help.'], ['Pending contribution', 'Does not try to resend it.'], ['Paying internet', 'Completes the payment from reserved money.'], ['Failed payment', 'Explains the money never left the fund.'], ['Payment over the limit', 'Names the limit rule.']],
        rules: 'Decision rules: if fewer than 4 of 5 tell “reserved” from “unassigned”, I rename them; if anyone resends a pending contribution, I redesign that state; if most reject paying upfront, I return to the reminders alternative.',
        learnings: [['Vocabulary is a data model', 'While the product had four names for money, no screen could be clear.'], ['Branches define trust', 'A shared fund is won or lost in the minute a payment doesn’t confirm.'], ['My experience as a starting point', 'It gave me speed; the benchmark forced me to separate how I organize myself from what existing products solve.']]
      },
      footer: 'Designed and built in Lima.'
    }
  }
});
