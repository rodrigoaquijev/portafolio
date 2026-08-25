import { defineCaseStudy } from './caseStudyContract.js';

export const VACA_CASE = defineCaseStudy({
  slug: 'vaca',
  name: 'Vaca',
  methodology: 'Design Thinking',
  phases: ['empathize', 'define', 'ideate', 'prototype', 'test'],
  translations: {
  es: {
    pageTitle: 'Vaca — Fondo compartido para roommates | Rodrigo Aquije',
    headerSubtitle: 'Caso de estudio · Vaca',
    nav: { empathize: 'Empatizar', define: 'Definir', ideate: 'Idear', prototype: 'Prototipar', test: 'Testear' },
    hero: {
      eyebrow: 'Vaca · Producto especulativo · FinTech social',
      title: 'El fondo compartido que reemplaza al “me debes”.',
      intro: 'Una experiencia para roommates que mueve el dinero antes del gasto: todos aportan a un fondo común y los servicios de la casa se pagan desde ahí, sin convertir a una persona en cobrador informal.',
      disclosure: 'Proyecto conceptual independiente. El modelo financiero y regulatorio requeriría validación especializada antes de un piloto.',
      meta: [['Rol', 'Product Designer · Solo'], ['Duración', '3 semanas'], ['Herramientas', 'Figma · React/CSS'], ['Alcance', 'Flujo core · 8 pantallas']],
      current: 'Después del gasto', currentBody: 'Alguien paga, registra la deuda, espera y finalmente recuerda al grupo que transfiera.',
      proposal: 'Antes del gasto', proposalBody: 'Todos aportan al inicio; el fondo paga y nadie queda debiendo a otra persona.'
    },
    empathize: {
      label: 'Empatizar con la fricción social',
      title: 'La matemática estaba resuelta. La ejecución seguía incomodando.',
      intro: 'Cuatro conversaciones informales con personas que viven con roommates confirmaron un patrón: registrar una deuda no elimina el mensaje incómodo, la espera ni el rol involuntario de “tesorero del depa”.',
      quotes: [
        ['“Uso una app para dividir, pero igual termino mandando un audio para que me transfieran.”', 'Roommate · 25 años'],
        ['“No me molesta tanto que se demoren como tener que recordarles cada mes.”', 'Roommate · 27 años'],
        ['“Preferiría que la plata ya esté puesta antes, así nadie tiene que pedir nada.”', 'Roommate · 23 años']
      ],
      personas: [
        { name: 'Sofía, 26', role: 'Diseñadora freelance', quote: '“No quiero ser la tesorera del departamento.”', context: 'Ingresos variables; prefiere aportar cuando recibe un pago y no en una fecha fija.', friction: 'Carga con los recordatorios y teme que cobrar se lea como desconfianza.' },
        { name: 'Diego, 29', role: 'Ingeniero de software', quote: '“Quiero que la casa se pague sola.”', context: 'Sueldo fijo; abandonó las apps de deuda porque aún debía acordarse de transferir.', friction: 'El software calcula el monto, pero él sigue ejecutando la acción todos los meses.' }
      ],
      journey: [
        ['Ocurre el gasto', 'Alguien adelanta de su bolsillo', 'Neutral'],
        ['Se registra', 'El grupo ve quién debe cuánto', 'Neutral'],
        ['Pasan los días', 'La transferencia no ocurre', 'Duda'],
        ['Se recuerda', 'Aparece el mensaje incómodo', 'Tensión'],
        ['Se resuelve', 'Todos quedan al día hasta el próximo gasto', 'Alivio']
      ],
      insight: 'El punto de dolor no es calcular una deuda. Es tener que activar socialmente el reembolso.'
    },
    define: {
      label: 'Definir la secuencia correcta',
      title: 'Si el dinero llega primero, el cobro deja de existir.',
      intro: 'La hipótesis invierte el orden habitual. Vaca no registra una deuda después del pago; crea disponibilidad compartida antes de que exista el gasto.',
      hmw: '¿Cómo podríamos pagar los gastos del hogar sin que una persona tenga que adelantar dinero ni perseguir reembolsos?',
      steps: [
        { title: 'Crear o unirse al fondo', body: 'Un link conecta a todos los roommates con una misma cuenta de grupo.' },
        { title: 'Aportar una parte inicial', body: 'Cada miembro recarga con un método familiar y ve su contribución.' },
        { title: 'Activar el fondo', body: 'El balance queda visible para todos y reemplaza las deudas individuales.' },
        { title: 'Pagar desde el fondo', body: 'El gasto descuenta del saldo común y se registra automáticamente.' },
        { title: 'Reponer y cerrar el mes', body: 'El sistema alerta por umbral y deja una lectura transparente del ciclo.' }
      ],
      architecture: [['Onboarding', 'Crear fondo · Unirse con link'], ['Inicio', 'Balance · Movimientos'], ['Fondo', 'Aportar · Registrar gasto · Reglas'], ['Grupo', 'Miembros · Invitaciones · Alertas']]
    },
    ideate: {
      label: 'Idear con restricciones reales',
      title: 'Tres decisiones definieron el producto y también sus riesgos.',
      intro: 'El concepto solo funciona si sostiene confianza, baja la fricción de adopción y explica con honestidad dónde vive el dinero.',
      decisions: [
        ['Fondo prepagado, no deuda posterior', 'Exige confianza inicial y capital por adelantado, pero elimina el cobro recurrente y la espera.'],
        ['Recarga con hábitos locales', 'Usar métodos de transferencia ya conocidos reduce aprendizaje, aunque limita el producto a un ecosistema regional.'],
        ['Balance como protagonista', 'Sacrifica detalle inmediato a cambio de transparencia: todos ven cuánto existe antes de gastar.']
      ],
      moneyTitle: 'Una promesa compartida necesita una arquitectura financiera creíble.',
      moneyIntro: 'Para un MVP, Vaca no debería custodiar fondos directamente ni convertir la cuenta de un roommate en cuenta del grupo. El modelo conceptual requiere un partner regulado que mantenga el dinero segregado y un ledger que represente cada fondo.',
      moneyFlow: [
        ['Aporte', 'El usuario transfiere desde su cuenta personal.'],
        ['Ledger Vaca', 'La app registra cuánto corresponde a cada grupo.'],
        ['Partner regulado', 'Procesa el dinero y mantiene la custodia.'],
        ['Fondo del grupo', 'El saldo queda respaldado y separado de una persona individual.']
      ],
      scope: 'Hipótesis de arquitectura. La operación, licencias, custodia y compliance deben validarse con especialistas antes de construir.'
    },
    prototype: {
      label: 'Prototipar el ciclo completo',
      title: 'Ocho pantallas, una misma promesa: todos ven la misma plata.',
      intro: 'El prototipo cubre la creación, el aporte, el gasto, la reposición y el cierre. Las pantallas se exploran como un sistema vivo, no como una galería estática.',
      selector: 'Explorar pantalla',
      screens: [
        { id: 'onboarding', tab: 'Crear', title: 'Arma tu fondo', amount: 'Depa San Isidro', body: 'Invita a tus roommates y define cómo funcionará el fondo.', action: 'Crear fondo', detail: 'Todos aportan · El fondo paga · Todos ven', tone: 'green', rationale: 'Explica el modelo antes de pedir un compromiso financiero.' },
        { id: 'home', tab: 'Inicio', title: 'Fondo del depa', amount: 'S/ 480', body: 'S/ 85 gastados · S/ 395 disponibles', action: 'Aportar', detail: 'Movimientos visibles para todo el grupo', tone: 'gold', rationale: 'La confianza empieza con un balance compartido, legible y siempre visible.' },
        { id: 'topup', tab: 'Aportar', title: 'Recargar fondo', amount: 'S/ 50', body: 'El fondo pasará de S/ 430 a S/ 480.', action: 'Confirmar aporte', detail: 'Método habitual de transferencia', tone: 'gold', rationale: 'El antes y después evita que el monto quede aislado de su efecto real.' },
        { id: 'expense', tab: 'Gasto', title: 'Nuevo gasto', amount: 'S/ 99', body: 'Internet · El fondo quedará en S/ 381.', action: 'Pagar desde el fondo', detail: 'Nadie adelanta dinero personal', tone: 'green', rationale: 'La consecuencia aparece antes de confirmar, sin abrir una deuda entre personas.' },
        { id: 'invite', tab: 'Invitar', title: 'Invita a tu depa', amount: 'VACA-8F2K', body: '2 de 4 roommates confirmados.', action: 'Copiar invitación', detail: 'Andrea invitada · Bruno pendiente', tone: 'gold', rationale: 'El progreso de activación hace visible qué falta para poner el fondo en marcha.' },
        { id: 'low', tab: 'Alerta', title: 'Fondo bajo', amount: 'S/ 40', body: 'No alcanza para internet y luz de los próximos días.', action: 'Aportar ahora', detail: 'Necesidad mensual estimada: S/ 165', tone: 'alert', rationale: 'La alerta conecta el saldo con compromisos concretos, no con miedo abstracto.' },
        { id: 'rules', tab: 'Reglas', title: 'Quién aporta cuánto', amount: 'S/ 160 × 3', body: 'Rodrigo · Caro · Diego aportan partes iguales.', action: 'Guardar cambios', detail: 'Recordatorio automático activo', tone: 'green', rationale: 'Una barra proporcional comunica equidad más rápido que una lista de números.' },
        { id: 'close', tab: 'Cierre', title: 'Cierre de julio', amount: 'S/ 480', body: 'Aportes completos y gastos visibles para el grupo.', action: 'Ver detalle', detail: 'Comparación con mayo y junio', tone: 'gold', rationale: 'El cierre cuenta una historia del fondo sin convertirse en una hoja contable.' }
      ],
      systemTitle: 'El sistema se construye desde lo que se repite.',
      tokens: [['Cream', '#F1EBDC', 'Superficie base'], ['Green 900', '#16352A', 'Acción y confianza'], ['Gold', '#D9A438', 'Aportes y logros'], ['Alert', '#C15B3B', 'Atención con contexto']],
      components: [['Tab bar', '8 pantallas'], ['Botón', '7 pantallas · Primary, Ghost, Alert'], ['Movimiento', '3 pantallas · Normal y alerta'], ['Barra comparativa', '4 pantallas · Saldo antes/después']]
    },
    test: {
      label: 'Testear la confianza, no solo la usabilidad',
      title: 'La asunción más grande todavía está abierta.',
      intro: 'El concepto no fue validado con un piloto. El siguiente paso es comprobar si los grupos realmente prefieren aportar por adelantado y si el fondo reduce la tensión sin crear una nueva desconfianza.',
      assumptions: [
        ['Confianza inicial', '¿Las personas pondrían dinero antes de que exista un gasto?'],
        ['Gobernanza', '¿Qué ocurre cuando alguien se muda, discrepa o quiere retirar su aporte?'],
        ['Transparencia', '¿El balance compartido reduce dudas o genera vigilancia entre roommates?']
      ],
      signals: [
        ['Fondos activos en el segundo mes', 'La reposición mensual indica que el modelo sobrevivió a la novedad inicial.'],
        ['Tiempo entre gasto y pago', 'El objetivo es pasar de días de espera a una operación inmediata desde el fondo.'],
        ['Recordatorios en el chat', 'La señal humana más clara: que desaparezca el mensaje “¿ya depositaste?”.']
      ],
      nextStep: 'Prototipo clicable con 3 o 4 hogares reales durante dos ciclos mensuales, incluyendo escenarios de aporte incompleto y desacuerdo.',
      closing: 'Vaca no busca que dividir gastos sea más eficiente. Busca que compartir una casa necesite menos negociación cotidiana.',
      next: 'Volver a proyectos', nextTitle: 'Explorar los otros casos'
    },
    contact: 'Conectemos', contactTitle: 'Conversemos sobre productos financieros, confianza y comportamiento social.', linkedinNetwork: 'Red profesional', copied: 'Email copiado', footer: 'Diseñado y construido en Lima.'
  },
  en: {
    pageTitle: 'Vaca — A shared fund for roommates | Rodrigo Aquije',
    headerSubtitle: 'Case study · Vaca',
    nav: { empathize: 'Empathize', define: 'Define', ideate: 'Ideate', prototype: 'Prototype', test: 'Test' },
    hero: {
      eyebrow: 'Vaca · Speculative product · Social FinTech', title: 'The shared fund that replaces “you owe me.”',
      intro: 'An experience for roommates that moves money before spending happens: everyone contributes to a shared fund and household bills are paid from it, without turning one person into the group’s informal collector.',
      disclosure: 'Independent concept project. The financial and regulatory model would require specialist validation before any pilot.',
      meta: [['Role', 'Solo Product Designer'], ['Duration', '3 weeks'], ['Tools', 'Figma · React/CSS'], ['Scope', 'Core flow · 8 screens']],
      current: 'After spending', currentBody: 'Someone pays, records the debt, waits and eventually reminds the group to transfer.',
      proposal: 'Before spending', proposalBody: 'Everyone contributes first; the fund pays and nobody owes another person.'
    },
    empathize: {
      label: 'Empathize with social friction', title: 'The math was solved. Execution was still uncomfortable.',
      intro: 'Four informal conversations with people living with roommates confirmed one pattern: recording debt does not remove the awkward message, the wait or the involuntary “house treasurer” role.',
      quotes: [['“I use a splitting app, but I still end up sending a voice note asking for the transfer.”', 'Roommate · age 25'], ['“The delay bothers me less than having to remind them every month.”', 'Roommate · age 27'], ['“I would rather have the money there beforehand, so nobody has to ask.”', 'Roommate · age 23']],
      personas: [
        { name: 'Sofía, 26', role: 'Freelance designer', quote: '“I do not want to be the apartment treasurer.”', context: 'Variable income; prefers contributing when a payment arrives instead of on a fixed date.', friction: 'Carries the reminders and worries that collecting will be read as distrust.' },
        { name: 'Diego, 29', role: 'Software engineer', quote: '“I want the house to pay for itself.”', context: 'Fixed salary; left debt-splitting apps because he still had to remember the transfer.', friction: 'Software calculates the amount, but he still executes the action every month.' }
      ],
      journey: [['The expense happens', 'Someone pays personally', 'Neutral'], ['It is recorded', 'The group sees who owes what', 'Neutral'], ['Days pass', 'The transfer does not happen', 'Doubt'], ['Someone reminds', 'The awkward message appears', 'Tension'], ['It is resolved', 'Everyone is even until next time', 'Relief']],
      insight: 'The pain is not calculating debt. It is socially activating reimbursement.'
    },
    define: {
      label: 'Define the right sequence', title: 'When money arrives first, collecting disappears.',
      intro: 'The hypothesis reverses the usual order. Vaca does not record debt after payment; it creates shared availability before the expense exists.',
      hmw: 'How might household expenses be paid without one person advancing money or chasing reimbursements?',
      steps: [{ title: 'Create or join a fund', body: 'A link connects every roommate to one group account.' }, { title: 'Make an initial contribution', body: 'Each member tops up through a familiar method and sees their share.' }, { title: 'Activate the fund', body: 'The balance becomes visible to everyone and replaces individual debts.' }, { title: 'Pay from the fund', body: 'The expense reduces the shared balance and is recorded automatically.' }, { title: 'Replenish and close the month', body: 'Threshold alerts and a transparent monthly view keep the cycle healthy.' }],
      architecture: [['Onboarding', 'Create fund · Join with link'], ['Home', 'Balance · Activity'], ['Fund', 'Contribute · Add expense · Rules'], ['Group', 'Members · Invitations · Alerts']]
    },
    ideate: {
      label: 'Ideate with real constraints', title: 'Three decisions defined the product and its risks.',
      intro: 'The concept only works if it sustains trust, lowers adoption friction and honestly explains where the money lives.',
      decisions: [['Prepaid fund, not later debt', 'Requires initial trust and money upfront, but removes recurring collection and waiting.'], ['Top up through local habits', 'Familiar transfer methods reduce learning while tying the product to a regional ecosystem.'], ['Balance as the protagonist', 'Sacrifices immediate detail for transparency: everyone sees what exists before spending.']],
      moneyTitle: 'A shared promise needs credible financial architecture.',
      moneyIntro: 'For an MVP, Vaca should not directly hold funds or turn one roommate’s account into the group account. The concept requires a regulated partner that keeps money segregated and a ledger representing each fund.',
      moneyFlow: [['Contribution', 'The user transfers from a personal account.'], ['Vaca ledger', 'The app records what belongs to each group.'], ['Regulated partner', 'Processes the money and maintains custody.'], ['Group fund', 'The balance is backed and separated from any individual.']],
      scope: 'Architecture hypothesis. Operations, licensing, custody and compliance require specialist validation before building.'
    },
    prototype: {
      label: 'Prototype the full cycle', title: 'Eight screens, one promise: everyone sees the same money.',
      intro: 'The prototype covers creation, contribution, spending, replenishment and close. Screens are explored as a living system, not a static gallery.', selector: 'Explore screen',
      screens: [
        { id: 'onboarding', tab: 'Create', title: 'Build your fund', amount: 'San Isidro apartment', body: 'Invite your roommates and define how the fund will work.', action: 'Create fund', detail: 'Everyone contributes · The fund pays · Everyone sees', tone: 'green', rationale: 'Explains the model before asking for a financial commitment.' },
        { id: 'home', tab: 'Home', title: 'Apartment fund', amount: 'S/ 480', body: 'S/ 85 spent · S/ 395 available', action: 'Contribute', detail: 'Activity visible to the whole group', tone: 'gold', rationale: 'Trust starts with a shared, legible and persistent balance.' },
        { id: 'topup', tab: 'Top up', title: 'Add to the fund', amount: 'S/ 50', body: 'The fund will move from S/ 430 to S/ 480.', action: 'Confirm contribution', detail: 'A familiar transfer method', tone: 'gold', rationale: 'Before and after keeps the amount connected to its real effect.' },
        { id: 'expense', tab: 'Expense', title: 'New expense', amount: 'S/ 99', body: 'Internet · The fund will have S/ 381 left.', action: 'Pay from fund', detail: 'Nobody advances personal money', tone: 'green', rationale: 'The consequence appears before confirmation without opening debt between people.' },
        { id: 'invite', tab: 'Invite', title: 'Invite your apartment', amount: 'VACA-8F2K', body: '2 of 4 roommates confirmed.', action: 'Copy invitation', detail: 'Andrea invited · Bruno pending', tone: 'gold', rationale: 'Activation progress shows what remains before the fund can start.' },
        { id: 'low', tab: 'Alert', title: 'Fund is low', amount: 'S/ 40', body: 'Not enough for internet and electricity due soon.', action: 'Contribute now', detail: 'Estimated monthly need: S/ 165', tone: 'alert', rationale: 'The alert connects balance to concrete commitments, not abstract fear.' },
        { id: 'rules', tab: 'Rules', title: 'Who contributes what', amount: 'S/ 160 × 3', body: 'Rodrigo · Caro · Diego contribute equal shares.', action: 'Save changes', detail: 'Automatic reminder enabled', tone: 'green', rationale: 'A proportional bar communicates fairness faster than a list of numbers.' },
        { id: 'close', tab: 'Close', title: 'July close', amount: 'S/ 480', body: 'Complete contributions and expenses visible to the group.', action: 'View details', detail: 'Compared with May and June', tone: 'gold', rationale: 'The close tells the fund’s story without becoming an accounting sheet.' }
      ],
      systemTitle: 'The system starts with what repeats.',
      tokens: [['Cream', '#F1EBDC', 'Base surface'], ['Green 900', '#16352A', 'Action and trust'], ['Gold', '#D9A438', 'Contributions and wins'], ['Alert', '#C15B3B', 'Attention with context']],
      components: [['Tab bar', '8 screens'], ['Button', '7 screens · Primary, Ghost, Alert'], ['Activity item', '3 screens · Normal and alert'], ['Comparison bar', '4 screens · Balance before/after']]
    },
    test: {
      label: 'Test trust, not only usability', title: 'The biggest assumption remains open.',
      intro: 'The concept has not been validated in a pilot. The next step is to learn whether groups genuinely prefer contributing upfront and whether the fund reduces tension without creating new distrust.',
      assumptions: [['Initial trust', 'Would people contribute before an expense exists?'], ['Governance', 'What happens when someone moves out, disagrees or wants their share back?'], ['Transparency', 'Does the shared balance reduce doubt or create surveillance between roommates?']],
      signals: [['Funds active in month two', 'Monthly replenishment shows the model survived its initial novelty.'], ['Time from expense to payment', 'Move from days of waiting to an immediate operation from the fund.'], ['Reminders in group chat', 'The clearest human signal: “did you transfer yet?” disappears.']],
      nextStep: 'A clickable prototype with 3–4 real households across two monthly cycles, including incomplete contributions and disagreement scenarios.',
      closing: 'Vaca does not aim to make splitting bills more efficient. It aims to make sharing a home require less daily negotiation.',
      next: 'Back to projects', nextTitle: 'Explore the other cases'
    },
    contact: 'Let’s connect', contactTitle: 'Let’s discuss financial products, trust and social behavior.', linkedinNetwork: 'Professional network', copied: 'Email copied', footer: 'Designed and built in Lima.'
  }
  }
});
