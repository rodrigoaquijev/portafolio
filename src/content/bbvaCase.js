import { defineCaseStudy } from './caseStudyContract.js';

export const BBVA_CASE = defineCaseStudy({
  slug: 'bbva',
  name: 'BBVA Perú',
  methodology: 'Double Diamond',
  phases: ['discover', 'define', 'develop', 'deliver'],
  translations: {
    es: {
      pageTitle: 'BBVA Perú — CRM & Email UX | Rodrigo Aquije',
      headerSubtitle: 'Caso de estudio · BBVA Perú',
      nav: { discover: 'Discover', define: 'Define', develop: 'Develop', deliver: 'Deliver' },
      hero: {
        eyebrow: 'BBVA Perú · CRM & Email UX · 2024–2025',
        title: 'Convertir una oferta de crédito en una experiencia clara.',
        intro: 'Diseño y desarrollo end-to-end de comunicaciones CRM para BBVA Perú: jerarquía visual, compliance regulatorio y personalización dinámica, implementados directamente en Salesforce Marketing Cloud.',
        disclosure: 'Por confidencialidad, algunos nombres y datos fueron modificados. La implementación técnica y las decisiones de diseño son reales.',
        meta: [['Rol', 'UX/UI Designer · CRM'], ['Cliente', 'BBVA Perú · Agencia Amsterdam'], ['Plataforma', 'Salesforce Marketing Cloud'], ['Periodo', '2024–2025']],
        problem: 'Un correo que se leía como documento legal, no como una oferta.',
        solution: 'Reordenar la jerarquía para que el beneficio aparezca primero, sin alterar el bloque de compliance.',
        role: 'UX/UI e implementación técnica end-to-end en Salesforce Marketing Cloud.'
      },
      method: {
        label: 'Cómo se abordó',
        title: 'Cuatro fases, un mismo hilo conductor.',
        intro: 'Double Diamond separa dos momentos de exploración y dos de decisión. El caso avanza desde el contexto real de lectura hasta un sistema listo para producción.',
        phases: [['Discover', 'Entender el brief, las restricciones y el contexto real.'], ['Define', 'Acordar el orden de la información antes de diseñar.'], ['Develop', 'Explorar UI, copy y nudges dentro del brand system.'], ['Deliver', 'Resolver personalización, responsive, dark mode y medición.']]
      },
      discover: {
        label: 'Discover · El contexto real',
        title: 'Una oferta financiera que se leía como documento legal.',
        intro: 'El objetivo era aumentar los desembolsos del Préstamo de Libre Disponibilidad comunicando que el cliente ya tenía liquidez a la mano. Sin embargo, el peso visual de los textos regulatorios y una jerarquía débil convertían el beneficio en carga cognitiva.',
        brief: 'El reto no era embellecer el email. Era lograr que alguien que lo abre en movimiento y con atención fragmentada entienda en segundos que tiene dinero disponible.',
        constraints: [
          ['Brand system cerrado', 'Tipografía, paleta, componentes y espaciados definidos globalmente por BBVA.'],
          ['Compliance ASBANC / SBS', 'TCEA, condiciones y disclaimers obligatorios; podían jerarquizarse, no eliminarse.'],
          ['Sin JavaScript', 'La percepción de interactividad debía resolverse con HTML y CSS estático, table-based.'],
          ['Render multicliente', 'Gmail, Outlook, Apple Mail, Samsung Mail y vista web debían conservar la intención.']
        ],
        contextTitle: 'El problema no era solo el diseño. Era el contexto de lectura.',
        context: [
          ['Mobile, en segundos', 'La mayoría de aperturas ocurre desde el teléfono y en tránsito. La jerarquía define si el mensaje sobrevive el primer vistazo.'],
          ['“Preaprobado” cambia la ecuación', 'El cliente no empieza una solicitud desde cero; activa algo que ya está disponible. La comunicación debía confirmar, no suplicar.']
        ]
      },
      define: {
        label: 'Define · Arquitectura de información',
        title: 'Primero el valor. Después la evidencia y las condiciones.',
        intro: 'Antes de trabajar color o tipografía se definieron blockframes: cajas sin estilo para acordar jerarquía, proporción y secuencia de lectura.',
        order: [['Header', 'Reconocimiento inmediato de la entidad.'], ['Monto protagonista', 'El beneficio se entiende en el primer vistazo.'], ['CTA', 'La acción queda unida a la oferta, sin scroll intermedio.'], ['Beneficios', 'Respaldan una decisión que ya se comprende.'], ['Bloque legal', 'Cierra con la información regulatoria completa e inalterada.']],
        patterns: [['Patrón Z', 'Logo, titular y botón organizan el banner de apertura.'], ['Patrón F', 'El cuerpo permite escanear bloques de valor de arriba hacia abajo.']],
        nonNegotiable: 'La posición final del bloque de TCEA no busca ocultarlo. Busca evitar que todos los niveles de información compitan simultáneamente, manteniendo las condiciones accesibles y completas.'
      },
      develop: {
        label: 'Develop · UI craft y nudges',
        title: 'Cuatro decisiones cambian cómo se interpreta la oferta.',
        intro: 'El margen de diseño no estaba en cambiar la marca o reducir los legales. Estaba en controlar atención, expectativa y lenguaje dentro de esas restricciones.',
        decisions: [
          ['Barra de avance al 82%', 'Un fill estático comunica que falta una acción, no que el trámite recién empieza. Se resolvió solo con CSS.'],
          ['Monto como ancla visual', 'El máximo gana tamaño y color; el mínimo mantiene presencia sin competir por atención.'],
          ['Compliance después de la acción', 'Las condiciones permanecen completas, pero dejan de interrumpir la comprensión inicial del beneficio.'],
          ['De solicitar a activar', '“Solicita tu préstamo” cambia por una narrativa coherente con una oferta ya preaprobada.']
        ],
        before: 'Solicita tu préstamo',
        after: 'Ya está aprobado para ti. Solo actívalo.',
        prototypeLabel: 'Oferta preaprobada',
        prototypeAmount: 'S/ 34,600',
        prototypeAction: 'Empezar aquí'
      },
      deliver: {
        label: 'Deliver · Sistema listo para producción',
        title: 'Un template, cinco aperturas y una estructura estable.',
        intro: 'AMPScript adapta banner, mensaje central y propuesta de valor según el perfil. El cuerpo, la acción y los legales permanecen iguales para evitar cinco piezas independientes.',
        segments: [
          { id: 'stability', tab: 'Estabilidad', title: 'Tu sueldo merece un beneficio real.', profile: 'Cuenta Sueldo activa', body: 'Reconoce la recurrencia del ingreso y presenta la oferta como consecuencia de la relación con el banco.', tone: 'Reconocimiento', action: 'Accede ahora' },
          { id: 'experiences', tab: 'Experiencias', title: 'Tus próximas aventuras empiezan hoy.', profile: 'Viajes y ocio', body: 'El préstamo funciona como habilitador de una experiencia pendiente, no como protagonista del mensaje.', tone: 'Aspiracional', action: 'Planifica tu viaje' },
          { id: 'learning', tab: 'Formación', title: 'Invierte en lo que más importa: tú.', profile: 'Desarrollo personal', body: 'Posiciona el financiamiento como inversión en formación y crecimiento profesional.', tone: 'Crecimiento', action: 'Empieza a crecer' },
          { id: 'home', tab: 'Hogar', title: 'Tu hogar, tal como lo imaginas.', profile: 'Mejora del hogar', body: 'Conecta con gastos de equipamiento y presenta la liquidez como continuidad de un proyecto existente.', tone: 'Realización', action: 'Mejora tu hogar' },
          { id: 'business', tab: 'Emprendimiento', title: 'Haz crecer lo que ya construiste.', profile: 'Actividad independiente', body: 'Habla de capital de trabajo y de avance, con un tono de socio financiero.', tone: 'Impulso', action: 'Impulsa tu negocio' }
        ],
        engineering: [['Mobile', 'Columnas apiladas, CTA full-width y touch targets de al menos 44 px.'], ['Desktop', 'Dos columnas fluidas y más aire sin añadir contenido.'], ['Datos dinámicos', 'Nombre, monto, TCEA y cuota personalizados por registro.']],
        modesTitle: 'El mismo email debe sobrevivir dos entornos de lectura.',
        modes: [['Contraste contextual', 'El azul corporativo oscuro se sustituye por un azul claro cuando el fondo lo exige.'], ['Banner profundo', 'En dark mode el gradiente baja luminosidad para integrarse con el cliente de correo.'], ['CTA estable', 'El amarillo BBVA conserva contraste suficiente en ambos modos.']],
        metricsTitle: 'Qué observar cuando la pieza sale al aire.',
        metrics: [['Delivered y Bounce Rate', 'Validan que el HTML llegue y no falle antes de interpretar cualquier otra señal.'], ['Open Rate', 'Evalúa asunto y preview text; todavía no el diseño del cuerpo.'], ['CTR del CTA', 'Comprueba si la secuencia monto–acción dirige el clic.'], ['Unsubscribe Rate', 'Advierte si la comunicación se percibe invasiva o manipuladora.']],
        measurement: 'Journey Builder puede cruzar estas señales con la Data Extension de desembolsos para cerrar el ciclo hasta conversión. El caso no presenta porcentajes sin resultados auditables.',
        learnings: [['El dominio importa', 'Comprender PLD, TCEA y la percepción de “preaprobado” mejora decisiones que no son solamente visuales.'], ['Las restricciones revelan criterio', 'Un sistema cerrado obliga a identificar con precisión dónde sí existe margen de acción.'], ['Email UX tiene consecuencias', 'Una comunicación financiera clara puede facilitar o bloquear una decisión económica real.']]
      },
      footer: 'Diseñado y construido en Lima.'
    },
    en: {
      pageTitle: 'BBVA Peru — CRM & Email UX | Rodrigo Aquije',
      headerSubtitle: 'Case study · BBVA Peru',
      nav: { discover: 'Discover', define: 'Define', develop: 'Develop', deliver: 'Deliver' },
      hero: {
        eyebrow: 'BBVA Peru · CRM & Email UX · 2024–2025',
        title: 'Turning a credit offer into a clear experience.',
        intro: 'End-to-end design and development of CRM communications for BBVA Peru: visual hierarchy, regulatory compliance and dynamic personalization implemented directly in Salesforce Marketing Cloud.',
        disclosure: 'Some names and data were modified for confidentiality. The implementation and design decisions are real.',
        meta: [['Role', 'UX/UI Designer · CRM'], ['Client', 'BBVA Peru · Amsterdam Agency'], ['Platform', 'Salesforce Marketing Cloud'], ['Period', '2024–2025']],
        problem: 'An email that read like a legal document rather than an offer.',
        solution: 'Reorder hierarchy so the benefit comes first without changing compliance content.',
        role: 'End-to-end UX/UI and technical implementation in Salesforce Marketing Cloud.'
      },
      method: {
        label: 'The approach', title: 'Four phases, one continuous thread.',
        intro: 'Double Diamond separates two moments of exploration and two of decision. The case moves from the real reading context to a production-ready system.',
        phases: [['Discover', 'Understand the brief, constraints and real context.'], ['Define', 'Agree on information order before styling.'], ['Develop', 'Explore UI, copy and nudges within the brand system.'], ['Deliver', 'Resolve personalization, responsive behavior, dark mode and measurement.']]
      },
      discover: {
        label: 'Discover · The real context', title: 'A financial offer that read like a legal document.',
        intro: 'The business goal was to increase disbursement of pre-approved personal loans by communicating that liquidity was already available. Regulatory weight and weak hierarchy turned the benefit into cognitive load.',
        brief: 'The challenge was not making the email prettier. It was helping someone opening it while moving and distracted understand the available money in seconds.',
        constraints: [['Closed brand system', 'Typography, palette, components and spacing defined globally by BBVA.'], ['ASBANC / SBS compliance', 'APR, conditions and disclaimers were mandatory; they could be ordered, not removed.'], ['No JavaScript', 'Perceived interaction had to be built with static, table-based HTML and CSS.'], ['Multi-client rendering', 'Gmail, Outlook, Apple Mail, Samsung Mail and web view had to preserve intent.']],
        contextTitle: 'The problem was not only design. It was the reading context.',
        context: [['Mobile, in seconds', 'Most opens happen on a phone and in transit. Hierarchy decides whether the message survives the first glance.'], ['“Pre-approved” changes the equation', 'The customer is not starting a request from zero; they activate what is already available. Communication should confirm, not plead.']]
      },
      define: {
        label: 'Define · Information architecture', title: 'Value first. Evidence and conditions follow.',
        intro: 'Before color or type, blockframes established hierarchy, proportion and reading sequence.',
        order: [['Header', 'Immediate bank recognition.'], ['Hero amount', 'The benefit is understood at first glance.'], ['CTA', 'Action remains attached to the offer without an intermediate scroll.'], ['Benefits', 'Support a decision that is already clear.'], ['Legal block', 'Complete, unchanged regulatory information closes the sequence.']],
        patterns: [['Z pattern', 'Logo, headline and button structure the opening banner.'], ['F pattern', 'The body supports scanning through value blocks.']],
        nonNegotiable: 'Placing APR information last does not hide it. It stops every information level from competing at once while keeping conditions complete and accessible.'
      },
      develop: {
        label: 'Develop · UI craft and nudges', title: 'Four decisions change how the offer is interpreted.',
        intro: 'The design margin was not changing the brand or reducing legal copy. It was controlling attention, expectation and language within those constraints.',
        decisions: [['82% progress bar', 'A static fill suggests one remaining action rather than a process beginning from zero. It uses CSS only.'], ['Amount as visual anchor', 'The maximum gains scale and color while the minimum remains present without competing.'], ['Compliance after action', 'Conditions remain complete but stop interrupting initial understanding of value.'], ['From requesting to activating', '“Request your loan” becomes language aligned with an already pre-approved offer.']],
        before: 'Request your loan', after: 'It is already approved for you. Just activate it.', prototypeLabel: 'Pre-approved offer', prototypeAmount: 'S/ 34,600', prototypeAction: 'Start here'
      },
      deliver: {
        label: 'Deliver · Production-ready system', title: 'One template, five openings and one stable structure.',
        intro: 'AMPScript adapts the banner, central message and value proposition by profile. Body, action and legal content remain unchanged instead of maintaining five separate builds.',
        segments: [
          { id: 'stability', tab: 'Stability', title: 'Your salary deserves a real benefit.', profile: 'Active salary account', body: 'Recognizes recurring income and frames the offer as a benefit earned through the banking relationship.', tone: 'Recognition', action: 'Access now' },
          { id: 'experiences', tab: 'Experiences', title: 'Your next adventure starts today.', profile: 'Travel and leisure', body: 'The loan becomes the enabler of a pending experience rather than the message’s protagonist.', tone: 'Aspirational', action: 'Plan your trip' },
          { id: 'learning', tab: 'Learning', title: 'Invest in what matters most: you.', profile: 'Personal development', body: 'Frames financing as an investment in education and professional growth.', tone: 'Growth', action: 'Start growing' },
          { id: 'home', tab: 'Home', title: 'Your home, as you imagine it.', profile: 'Home improvement', body: 'Connects with equipment and improvement spending and presents liquidity as continuity.', tone: 'Achievement', action: 'Improve your home' },
          { id: 'business', tab: 'Business', title: 'Grow what you have already built.', profile: 'Independent activity', body: 'Speaks of working capital and momentum with a financial-partner tone.', tone: 'Momentum', action: 'Grow your business' }
        ],
        engineering: [['Mobile', 'Stacked columns, full-width CTA and touch targets of at least 44 px.'], ['Desktop', 'Two fluid columns and more breathing room without additional content.'], ['Dynamic data', 'Name, amount, APR and installment personalized per record.']],
        modesTitle: 'The same email must survive two reading environments.',
        modes: [['Contextual contrast', 'Dark corporate blue becomes a lighter blue where the background requires it.'], ['Deeper banner', 'Dark mode lowers gradient luminance to blend with the email client.'], ['Stable CTA', 'BBVA yellow keeps sufficient contrast in both modes.']],
        metricsTitle: 'What to observe when the campaign goes live.',
        metrics: [['Delivered and Bounce Rate', 'Validate that HTML arrives before interpreting any other signal.'], ['Open Rate', 'Evaluates subject and preview text, not yet the body design.'], ['CTA click-through rate', 'Tests whether the amount-to-action sequence drives the click.'], ['Unsubscribe Rate', 'Signals if communication feels invasive or manipulative.']],
        measurement: 'Journey Builder can connect these signals with disbursement data to close the loop through conversion. This case does not claim percentages without auditable results.',
        learnings: [['Domain knowledge matters', 'Understanding loans, APR and the perception of “pre-approved” improves decisions beyond visuals.'], ['Constraints reveal judgment', 'A closed system forces precise identification of where meaningful action remains possible.'], ['Email UX has consequences', 'Clear financial communication can enable or block a real economic decision.']]
      },
      footer: 'Designed and built in Lima.'
    }
  }
});
