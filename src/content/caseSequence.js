export const CASE_SEQUENCE = {
  bbva: {
    next: 'yape',
    href: '/casos/yape',
    es: { title: 'Yape', subtitle: 'Arquitectura de estados para la incertidumbre transaccional.', description: 'Rediseño conductual del estado “en revisión” para evitar reintentos, pagos duplicados y dudas que terminan en soporte.', tags: ['Behavioral UX', 'State Systems', 'Microcopy'] },
    en: { title: 'Yape', subtitle: 'State architecture for transactional uncertainty.', description: 'A behavioral redesign of the under-review state to prevent retries, duplicate payments and uncertainty that becomes support demand.', tags: ['Behavioral UX', 'State Systems', 'Microcopy'] }
  },
  yape: {
    next: 'allpa',
    href: '/casos/allpa',
    es: { title: 'Allpa', subtitle: 'Diseño conductual para proteger la liquidez variable.', description: 'Un sistema para watchOS e iOS que estructura cada ingreso antes de que el saldo bruto se convierta en permiso para gastar.', tags: ['Behavioral Finance', 'watchOS + iOS', 'Cash-flow UX'] },
    en: { title: 'Allpa', subtitle: 'Behavioral design for protecting variable cash flow.', description: 'A watchOS and iOS system that structures each payment before gross balance becomes permission to spend.', tags: ['Behavioral Finance', 'watchOS + iOS', 'Cash-flow UX'] }
  },
  allpa: {
    next: 'vaca',
    href: '/casos/vaca',
    es: { title: 'Vaca', subtitle: 'Un fondo compartido que reemplaza al “me debes”.', description: 'Producto conceptual para roommates: todos aportan antes del gasto y la casa paga desde un balance común.', tags: ['Social FinTech', 'Wallet UX', 'Design Thinking'] },
    en: { title: 'Vaca', subtitle: 'A shared fund that replaces “you owe me.”', description: 'A concept for roommates: everyone contributes before spending and the household pays from one shared balance.', tags: ['Social FinTech', 'Wallet UX', 'Design Thinking'] }
  },
  vaca: {
    next: 'bbva',
    href: '/casos/bbva',
    es: { title: 'BBVA Perú', subtitle: 'Convertir una oferta de crédito en una experiencia clara.', description: 'Diseño e implementación de comunicaciones CRM con jerarquía, personalización dinámica y compliance bancario.', tags: ['Email UX', 'Salesforce MC', 'Design Engineering'] },
    en: { title: 'BBVA Peru', subtitle: 'Turning a credit offer into a clear experience.', description: 'Design and implementation of CRM communications balancing hierarchy, dynamic personalization and bank compliance.', tags: ['Email UX', 'Salesforce MC', 'Design Engineering'] }
  }
};
