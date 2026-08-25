export const YAPE_CASE = {
  es: {
    pageTitle: 'Yape — Arquitectura de estados | Rodrigo Aquije',
    loader: 'Yape · Caso conceptual',
    headerSubtitle: 'Caso de estudio · Yape',
    nav: {
      audit: 'Auditoría',
      evidence: 'Evidencia',
      system: 'Sistema',
      prototype: 'Prototipo',
      impact: 'Impacto'
    },
    hero: {
      eyebrow: 'YAPE · BEHAVIORAL UX · ARQUITECTURA DE ESTADOS',
      title: 'Cómo hablarle al usuario cuando el sistema aún no tiene respuesta.',
      intro: 'Rediseño conceptual del momento más incierto de una transferencia: cuando la operación no confirma si el dinero llegó y el silencio empuja a intentarlo otra vez.',
      disclosure: 'Proyecto conceptual independiente. No fue encargado por Yape ni por BCP.',
      meta: [
        ['Rol', 'Product Designer'],
        ['Método', 'Lean UX'],
        ['Duración', '3 semanas'],
        ['Año', '2025']
      ],
      problem: 'El error genérico no explica el estado real de la operación.',
      consequence: 'La incertidumbre puede convertirse en un reintento y un pago duplicado.',
      response: 'Un estado “En revisión” conserva el contexto y evita pedirle al usuario que adivine.',
      before: 'Respuesta actual',
      after: 'Propuesta',
      beforeTitle: 'Ups, algo salió mal.',
      beforeBody: 'Cierra la aplicación y vuelve a intentarlo.',
      beforeAction: 'Aceptar',
      afterState: 'En revisión',
      afterTitle: 'Estamos verificando tu operación.',
      afterBody: 'Puede tardar unos minutos. No es necesario reenviar.',
      afterAction: 'Entendido'
    },
    audit: {
      label: 'Auditoría',
      title: 'El mensaje de error no solo informaba poco. También sugería la acción más riesgosa.',
      intro: 'La revisión heurística mostró una ruptura entre lo que el sistema sabía y lo que la persona necesitaba decidir. El problema no era una caída técnica: era la ausencia de un estado accionable.',
      findings: [
        { key: 'status', title: 'Estado invisible', heuristic: 'Visibilidad del sistema', body: '“Algo salió mal” no distingue entre una caída, una demora o una operación que sigue procesándose.' },
        { key: 'action', title: 'Acción riesgosa', heuristic: 'Prevención de errores', body: 'Pedir que se intente nuevamente puede duplicar la transferencia cuando el primer envío continúa en curso.' },
        { key: 'recovery', title: 'Sin recuperación', heuristic: 'Control y libertad', body: 'Aceptar cierra la alerta, elimina el contexto y no ofrece una vía rápida para comprobar qué ocurrió.' }
      ],
      costLabel: 'Consecuencia para el negocio',
      cost: ['Estado ambiguo', 'Reintento', 'Pago duplicado', 'Reclamo', 'Soporte'],
      preserveTitle: 'Lo que no necesitaba cambiar',
      preserve: 'El soporte directo y las confirmaciones ya resolvían sus tareas. La intervención debía aparecer antes del reclamo, justo cuando comienza la incertidumbre.',
      output: 'Hallazgo: el diseño estaba convirtiendo una demora técnica en una decisión de riesgo.'
    },
    evidence: {
      label: 'Evidencia',
      title: 'La frustración no empezaba con la falla. Empezaba al quedarse sin una respuesta.',
      intro: 'Para delimitar el problema real contrasté una entrevista exploratoria con comentarios públicos en Play Store. Es evidencia direccional, no una muestra concluyente.',
      steps: [
        ['Envía el dinero', 'Confianza'],
        ['La conexión falla', 'Alerta'],
        ['Recibe un error genérico', 'Duda'],
        ['Considera reenviar', 'Riesgo'],
        ['Ve el estado real', 'Certeza']
      ],
      interviewLabel: 'Entrevista exploratoria · Lima, 31 años',
      interview: '“Yapié y no sé si llegó. No sé si lo mando de nuevo o espero. Si lo mando dos veces me van a odiar.”',
      reviewLabel: 'Reseña pública · Play Store',
      review: '“Me depositaron y no aparece. Llevo dos horas intentando y solo dice que algo salió mal.”',
      opportunityLabel: 'Oportunidad de diseño',
      opportunity: 'Intervenir en el hueco de información posterior a la falla. Mostrar que la operación continúa en revisión antes de que la persona reintente o busque soporte.'
    },
    system: {
      label: 'Sistema',
      title: 'Un estado nuevo debía sentirse nativo, legible y difícil de malinterpretar.',
      intro: 'La solución se construyó dentro del modelo mental existente: una arquitectura de tres estados, una caja de contexto y reglas de texto que funcionan juntas.',
      selector: 'Explorar estado',
      states: [
        { id: 'complete', name: 'Completado', description: 'La operación terminó y el destino recibió el dinero.', message: 'Tu yapeo se completó correctamente.', action: 'Ver detalle', rationale: 'Cierre directo. El color acompaña, pero el texto confirma el resultado.' },
        { id: 'review', name: 'En revisión', description: 'El sistema conserva la operación mientras valida su resultado.', message: 'Estamos verificando tu operación. No es necesario reenviar.', action: 'Entendido', rationale: 'El amarillo comunica actividad sin competir con el rojo usado para egresos.' },
        { id: 'canceled', name: 'Cancelada', description: 'La operación no se completó y el dinero volvió a la cuenta.', message: 'No se pudo completar. Tu dinero ya está de vuelta.', action: 'Entendido', rationale: 'El estado fallido usa un tratamiento neutro para no parecer un nuevo débito.' }
      ],
      copyTitle: 'Las palabras también forman parte del componente',
      avoid: ['Vuelve a intentarlo', 'Cierra la aplicación', 'Inténtalo en 15 minutos'],
      prefer: ['No es necesario reenviar', 'Estamos verificando tu pago', 'Te avisaremos por aquí'],
      accessibility: 'Cada cambio se comunica con color, nombre y descripción. En producción también debería anunciarse a tecnologías de asistencia.',
      output: 'Sistema: estado, expectativa y siguiente acción permanecen sincronizados.'
    },
    prototype: {
      label: 'Prototipo',
      title: 'Dos recorridos cubren tanto la demora como la falla confirmada.',
      intro: 'El prototipo no añade pasos. Inserta claridad en los lugares donde la persona ya busca una respuesta: confirmación, historial y detalle de operación.',
      delayed: 'Cuando la operación sigue procesándose',
      failed: 'Cuando la operación finalmente falla',
      screens: [
        { id: 'prevent', branch: 'delayed', tab: 'Prevención', title: 'Confirmación preventiva', state: 'En revisión', body: 'La operación quedó registrada. No es necesario reenviar.', rationale: 'Detiene el impulso de repetir el pago inmediatamente.' },
        { id: 'history', branch: 'delayed', tab: 'Historial', title: 'Movimiento visible', state: 'En revisión', body: 'El historial conserva monto, persona, hora y estado.', rationale: 'Permite comprobar que el sistema reconoce la transferencia.' },
        { id: 'detail', branch: 'delayed', tab: 'Detalle', title: 'Contexto persistente', state: 'En revisión', body: 'La última actualización y la expectativa de espera permanecen accesibles.', rationale: 'Sustituye el limbo por información que puede volver a consultarse.' },
        { id: 'connection', branch: 'failed', tab: 'Falla', title: 'Falla informada', state: 'Verificando', body: 'No cierres la aplicación. Estamos verificando tu operación.', rationale: 'El sistema reconoce el problema sin inducir un nuevo envío.' },
        { id: 'returned', branch: 'failed', tab: 'Cierre', title: 'Resultado transparente', state: 'Cancelada', body: 'Tu dinero ya está de vuelta en tu cuenta.', rationale: 'La experiencia termina confirmando qué pasó con el dinero.' }
      ]
    },
    impact: {
      label: 'Impacto',
      title: 'La propuesta desplaza la ayuda desde el reclamo hacia la prevención.',
      intro: 'El chatbot sigue siendo útil. La arquitectura de estados actúa antes: responde en el momento de la falla para que una duda evitable no llegue a convertirse en un ticket.',
      reactive: { title: 'Soporte reactivo', body: 'La persona debe reconocer el problema, buscar ayuda y explicar una operación que la interfaz no pudo aclarar.' },
      preventive: { title: 'Información preventiva', body: 'El sistema muestra el estado real, desaconseja el reintento y mantiene disponible el contexto de la transferencia.' },
      metrics: [
        { direction: 'down', title: 'Reintentos durante los primeros 5 minutos', hypothesis: '“En revisión” reduce la repetición inmediata del mismo pago.', test: 'Prueba A/B comparando reenvíos al mismo destinatario y por el mismo monto.' },
        { direction: 'down', title: 'Tickets sobre pagos inciertos', hypothesis: 'El historial resuelve la duda antes de abrir soporte.', test: 'Comparar contactos asociados a operaciones pendientes antes y después del cambio.' },
        { direction: 'up', title: 'Percepción de claridad', hypothesis: 'Conocer el estado genera más confianza que recibir un error genérico.', test: 'Encuesta breve posterior a la interacción y prueba de comprensión del estado.' }
      ],
      disclaimer: 'Caso conceptual: estas son hipótesis y métodos de validación, no resultados de producción.',
      output: 'Hipótesis: menos reintentos, menos consultas evitables y mayor comprensión del estado.'
    },
    learnings: {
      label: 'Cierre',
      title: 'Tres decisiones que sostienen la propuesta.',
      items: [
        ['Respetar el modelo mental', 'El rojo ya comunica salida de dinero. Reutilizarlo para una falla habría creado una segunda interpretación.'],
        ['Diseñar el estado intermedio', 'La espera deja de sentirse como silencio cuando el sistema explica qué ocurre y qué debe hacer la persona.'],
        ['Escribir para prevenir', '“No es necesario reenviar” no adorna la interfaz: evita una acción con consecuencias financieras.']
      ],
      closing: 'En productos financieros, la confianza también se diseña durante los segundos en que el sistema todavía no tiene una respuesta.',
      next: 'Volver a proyectos',
      nextTitle: 'Explorar los otros casos'
    },
    contact: 'Conectemos',
    contactTitle: 'Conversemos sobre estados, confianza y decisiones financieras.',
    linkedinNetwork: 'Red profesional',
    copied: 'Email copiado',
    footer: 'Diseñado y construido en Lima.'
  },
  en: {
    pageTitle: 'Yape — State architecture | Rodrigo Aquije',
    loader: 'Yape · Concept project',
    headerSubtitle: 'Case study · Yape',
    nav: { audit: 'Audit', evidence: 'Evidence', system: 'System', prototype: 'Prototype', impact: 'Impact' },
    hero: {
      eyebrow: 'YAPE · BEHAVIORAL UX · STATE ARCHITECTURE',
      title: 'How to talk to people when the system does not have an answer yet.',
      intro: 'A conceptual redesign of the most uncertain moment in a transfer: when the operation cannot confirm whether the money arrived and silence encourages another attempt.',
      disclosure: 'Independent concept project. Not commissioned by Yape or BCP.',
      meta: [['Role', 'Product Designer'], ['Method', 'Lean UX'], ['Duration', '3 weeks'], ['Year', '2025']],
      problem: 'The generic error does not explain the real state of the operation.',
      consequence: 'Uncertainty can turn into a retry and a duplicate payment.',
      response: 'An “Under review” state preserves context and removes the need to guess.',
      before: 'Current response', after: 'Proposal', beforeTitle: 'Something went wrong.', beforeBody: 'Close the app and try again.', beforeAction: 'Accept', afterState: 'Under review',
      afterTitle: 'We are verifying your operation.', afterBody: 'This may take a few minutes. You do not need to send it again.', afterAction: 'Got it'
    },
    audit: {
      label: 'Audit', title: 'The error message did more than explain too little. It suggested the riskiest action.',
      intro: 'The heuristic review exposed a gap between what the system knew and what the person needed to decide. The issue was not a technical outage; it was the absence of an actionable state.',
      findings: [
        { key: 'status', title: 'Invisible status', heuristic: 'System visibility', body: '“Something went wrong” does not distinguish an outage, a delay or an operation that is still processing.' },
        { key: 'action', title: 'Risky action', heuristic: 'Error prevention', body: 'Asking people to try again can duplicate a transfer while the original payment continues.' },
        { key: 'recovery', title: 'No recovery path', heuristic: 'Control and freedom', body: 'Accept closes the alert, removes context and offers no quick path to verify what happened.' }
      ],
      costLabel: 'Business consequence', cost: ['Ambiguous state', 'Retry', 'Duplicate payment', 'Complaint', 'Support'],
      preserveTitle: 'What did not need to change', preserve: 'Direct support and confirmations already served their purpose. The intervention had to appear before the complaint, at the start of uncertainty.',
      output: 'Finding: the interface was turning a technical delay into a risky decision.'
    },
    evidence: {
      label: 'Evidence', title: 'Frustration did not start with the failure. It started when no answer followed.',
      intro: 'To define the real problem, I compared one exploratory interview with public Play Store comments. This is directional evidence, not a conclusive sample.',
      steps: [['Sends money', 'Confidence'], ['Connection fails', 'Alert'], ['Sees a generic error', 'Doubt'], ['Considers retrying', 'Risk'], ['Sees the real state', 'Certainty']],
      interviewLabel: 'Exploratory interview · Lima, age 31', interview: '“I sent it and do not know if it arrived. I do not know whether to send it again or wait.”',
      reviewLabel: 'Public review · Play Store', review: '“They sent me money and it does not appear. I have tried for two hours and it only says something went wrong.”',
      opportunityLabel: 'Design opportunity', opportunity: 'Intervene in the information gap after a failure. Show that the operation remains under review before the person retries or looks for support.'
    },
    system: {
      label: 'System', title: 'A new state had to feel native, legible and difficult to misinterpret.',
      intro: 'The solution works within the existing mental model: a three-state architecture, a context box and writing rules that operate together.', selector: 'Explore state',
      states: [
        { id: 'complete', name: 'Completed', description: 'The operation finished and the recipient got the money.', message: 'Your payment was completed successfully.', action: 'View details', rationale: 'A direct ending. Color supports the message, but text confirms the result.' },
        { id: 'review', name: 'Under review', description: 'The system preserves the operation while validating the result.', message: 'We are verifying your operation. You do not need to send it again.', action: 'Got it', rationale: 'Yellow communicates activity without competing with the red used for outgoing money.' },
        { id: 'canceled', name: 'Canceled', description: 'The operation did not complete and the money returned to the account.', message: 'It could not be completed. Your money is already back.', action: 'Got it', rationale: 'The failed state uses a neutral treatment so it does not resemble another debit.' }
      ],
      copyTitle: 'Words are part of the component too', avoid: ['Try again', 'Close the application', 'Try again in 15 minutes'], prefer: ['You do not need to resend', 'We are verifying your payment', 'We will notify you here'],
      accessibility: 'Every change is communicated through color, name and description. In production it should also be announced to assistive technologies.',
      output: 'System: status, expectation and next action remain synchronized.'
    },
    prototype: {
      label: 'Prototype', title: 'Two journeys cover both a delay and a confirmed failure.',
      intro: 'The prototype does not add steps. It inserts clarity where people already look for an answer: confirmation, history and operation details.',
      delayed: 'While the operation is still processing', failed: 'When the operation ultimately fails',
      screens: [
        { id: 'prevent', branch: 'delayed', tab: 'Prevention', title: 'Preventive confirmation', state: 'Under review', body: 'The operation was registered. You do not need to send it again.', rationale: 'Stops the urge to repeat the payment immediately.' },
        { id: 'history', branch: 'delayed', tab: 'History', title: 'Visible movement', state: 'Under review', body: 'History preserves the amount, person, time and state.', rationale: 'Confirms that the system recognizes the transfer.' },
        { id: 'detail', branch: 'delayed', tab: 'Details', title: 'Persistent context', state: 'Under review', body: 'The latest update and expected wait remain available.', rationale: 'Replaces limbo with information that can be revisited.' },
        { id: 'connection', branch: 'failed', tab: 'Failure', title: 'Explained failure', state: 'Verifying', body: 'Do not close the app. We are verifying your operation.', rationale: 'Acknowledges the problem without encouraging another transfer.' },
        { id: 'returned', branch: 'failed', tab: 'Closure', title: 'Transparent outcome', state: 'Canceled', body: 'Your money is already back in your account.', rationale: 'The experience ends by confirming what happened to the money.' }
      ]
    },
    impact: {
      label: 'Impact', title: 'The proposal moves help from complaint to prevention.',
      intro: 'The chatbot remains useful. State architecture acts earlier: it answers at the moment of failure so an avoidable doubt does not become a support ticket.',
      reactive: { title: 'Reactive support', body: 'The person must identify the problem, look for help and explain an operation the interface failed to clarify.' },
      preventive: { title: 'Preventive information', body: 'The system shows the real state, discourages retries and keeps the transfer context available.' },
      metrics: [
        { direction: 'down', title: 'Retries within the first 5 minutes', hypothesis: '“Under review” reduces immediate repetition of the same payment.', test: 'A/B test comparing resends to the same recipient for the same amount.' },
        { direction: 'down', title: 'Tickets about uncertain payments', hypothesis: 'History resolves uncertainty before opening support.', test: 'Compare contacts linked to pending operations before and after the change.' },
        { direction: 'up', title: 'Perceived clarity', hypothesis: 'Knowing the state builds more confidence than a generic error.', test: 'Short post-interaction survey and a comprehension check.' }
      ],
      disclaimer: 'Concept project: these are hypotheses and validation methods, not production results.',
      output: 'Hypothesis: fewer retries, fewer avoidable questions and stronger state comprehension.'
    },
    learnings: {
      label: 'Closing', title: 'Three decisions support the proposal.',
      items: [
        ['Respect the mental model', 'Red already communicates money leaving the account. Reusing it for failure would create a second interpretation.'],
        ['Design the intermediate state', 'Waiting stops feeling like silence when the system explains what is happening and what the person should do.'],
        ['Write to prevent', '“You do not need to resend” is not decoration; it prevents an action with financial consequences.']
      ],
      closing: 'In financial products, trust is also designed during the seconds when the system still has no answer.', next: 'Back to projects', nextTitle: 'Explore the other cases'
    },
    contact: 'Let’s connect', contactTitle: 'Let’s discuss states, trust and financial decisions.', linkedinNetwork: 'Professional network', copied: 'Email copied', footer: 'Designed and built in Lima.'
  }
};
