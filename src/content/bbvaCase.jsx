export const BBVA_CASE = {
  es: {
    back: 'Volver al portafolio',
    eyebrow: 'BBVA PERÚ · FINANCIAL DESIGN · SALESFORCE MC',
    title: <>Hacer que una oferta de crédito se sienta <em>clara antes que urgente.</em></>,
    intro: 'Sistema de comunicación para campañas de préstamos preaprobados: una arquitectura capaz de sostener conversión, lectura móvil y compliance bancario sin competir por la atención.',
    meta: [['ROL', 'UX/UI · Email design'], ['CONTEXTO', 'Banca · CRM'], ['PLATAFORMA', 'Salesforce MC'], ['ALCANCE', 'Sistema escalable']],
    challengeLabel: '01 · CONTEXTO DE NEGOCIO',
    challengeTitle: <>La campaña no era una pieza. Era un <em>sistema de decisión.</em></>,
    challengeBody: 'Cada envío debía traducir una oferta financiera variable —monto, tasa, plazo y vigencia— en una decisión comprensible. Al mismo tiempo, el equipo necesitaba producir a escala, preservar requisitos legales y evitar que cada nueva campaña reiniciara el trabajo de diseño.',
    business: [
      ['OBJETIVO', 'Aumentar la progresión hacia la solicitud sin recurrir a presión visual.'],
      ['RESTRICCIÓN', 'Mantener visibles las condiciones regulatorias y la trazabilidad de la oferta.'],
      ['OPERACIÓN', 'Reducir variaciones manuales con módulos compatibles con Salesforce MC.']
    ],
    behaviorLabel: '02 · PROBLEMA CONDUCTUAL',
    behaviorTitle: <>La abundancia de información estaba elevando el <em>costo de decidir.</em></>,
    behaviorBody: 'En crédito, ocultar información erosiona confianza; mostrarla toda con el mismo peso también. El problema central era ordenar la atención: primero reconocer la oferta, luego entender su valor y finalmente revisar sus condiciones antes de actuar.',
    frictions: [
      ['Sobrecarga', 'Monto, tasa, plazo, beneficios y legales compitiendo en el primer vistazo.'],
      ['Ambigüedad', 'CTAs genéricos sin anticipar qué ocurría después del clic.'],
      ['Desconfianza', 'Urgencia promocional por encima de las condiciones de la oferta.']
    ],
    principle: '“La claridad no reduce la conversión: reduce la ansiedad que bloquea la conversión.”',
    wireLabel: '03 · WIREFRAMES & ARQUITECTURA',
    wireTitle: <>Una secuencia de lectura para pasar de <em>oferta a evidencia.</em></>,
    wireBody: 'El wireframe se organizó como una progresión vertical y modular. Cada bloque responde una sola pregunta y puede activarse según el segmento sin romper la jerarquía.',
    uiLabel: '04 · SISTEMA UI',
    uiTitle: <>Modular por operación. <em>Editorial por jerarquía.</em></>,
    uiBody: 'Los componentes separan contenido variable de reglas visuales: espaciado, escala tipográfica, contraste, botones y legales permanecen consistentes. La oferta puede cambiar sin convertir cada campaña en una excepción.',
    impactLabel: '05 · IMPACTO & MEDICIÓN',
    impactTitle: <>El impacto se define antes de <em>atribuirlo.</em></>,
    impactBody: 'Sin acceso en este portafolio a resultados auditables de producción, no presento porcentajes como hechos. El sistema deja listo un marco de medición para comparar plantilla base y variante, separando entrega, comprensión y conversión.',
    metrics: [
      ['CTR hacia solicitud', 'Señal primaria', 'Capacidad del mensaje para mover a la siguiente etapa.'],
      ['Conversión post-clic', 'Resultado de negocio', 'Solicitudes iniciadas o desembolsos atribuidos a la campaña.'],
      ['Tiempo de producción', 'Eficiencia operativa', 'Horas desde brief aprobado hasta QA y programación.'],
      ['Errores de QA', 'Calidad del sistema', 'Incidencias de contenido, render o compliance por envío.']
    ],
    closing: 'Diseñar para banca no es hacer que el usuario actúe más rápido. Es darle suficiente claridad para actuar con confianza.',
    next: 'Siguiente caso',
    nextTitle: 'Yape · Arquitectura de estados'
  },
  en: {
    back: 'Back to portfolio', eyebrow: 'BBVA PERU · FINANCIAL DESIGN · SALESFORCE MC',
    title: <>Making a credit offer feel <em>clear before urgent.</em></>,
    intro: 'A communication system for pre-approved loan campaigns: designed to support conversion, mobile readability and bank compliance without competing for attention.',
    meta: [['ROLE', 'UX/UI · Email design'], ['CONTEXT', 'Banking · CRM'], ['PLATFORM', 'Salesforce MC'], ['SCOPE', 'Scalable system']],
    challengeLabel: '01 · BUSINESS CONTEXT', challengeTitle: <>The campaign was not a piece. It was a <em>decision system.</em></>,
    challengeBody: 'Each send had to translate a variable financial offer—amount, rate, term and validity—into an understandable decision. The team also needed to produce at scale, preserve legal requirements and avoid restarting the design process for every campaign.',
    business: [['OBJECTIVE', 'Increase progression to application without visual pressure.'], ['CONSTRAINT', 'Keep regulatory terms and offer traceability visible.'], ['OPERATIONS', 'Reduce manual variation with Salesforce MC-ready modules.']],
    behaviorLabel: '02 · BEHAVIORAL PROBLEM', behaviorTitle: <>Too much information was raising the <em>cost of deciding.</em></>,
    behaviorBody: 'In credit, hiding information erodes trust; giving everything equal weight does too. The task was to order attention: recognize the offer, understand its value, then review its terms before acting.',
    frictions: [['Overload', 'Amount, rate, term, benefits and legal copy competing at first glance.'], ['Ambiguity', 'Generic CTAs that did not explain what followed the click.'], ['Distrust', 'Promotional urgency outweighing the offer conditions.']],
    principle: '“Clarity does not reduce conversion; it reduces the anxiety that blocks it.”',
    wireLabel: '03 · WIREFRAMES & ARCHITECTURE', wireTitle: <>A reading sequence from <em>offer to evidence.</em></>,
    wireBody: 'The wireframe follows a vertical, modular progression. Each block answers one question and can be activated by segment without breaking hierarchy.',
    uiLabel: '04 · UI SYSTEM', uiTitle: <>Modular in operation. <em>Editorial in hierarchy.</em></>,
    uiBody: 'Components separate variable content from visual rules. Spacing, type scale, contrast, buttons and legal content stay consistent while the offer changes.',
    impactLabel: '05 · IMPACT & MEASUREMENT', impactTitle: <>Impact is defined before it is <em>claimed.</em></>,
    impactBody: 'Because auditable production results are not available in this portfolio, percentages are not presented as facts. The system establishes a measurement framework to compare baseline and variant across delivery, comprehension and conversion.',
    metrics: [['CTR to application', 'Primary signal', 'Ability to move people to the next stage.'], ['Post-click conversion', 'Business outcome', 'Applications started or disbursements attributed to the campaign.'], ['Production time', 'Operational efficiency', 'Hours from approved brief to QA and scheduling.'], ['QA errors', 'System quality', 'Content, rendering or compliance incidents per send.']],
    closing: 'Designing for banking is not about making people act faster. It is about giving them enough clarity to act with confidence.',
    next: 'Next case', nextTitle: 'Yape · State architecture'
  }
};
