export const CASE_SEQUENCE = {
  bbva: {
    next: 'banco-nacion',
    mark: 'nación',
    href: '/casos/banco-nacion',
    es: { title: 'Banco de la Nación', subtitle: 'Un sistema de diseño para la app del banco.', description: 'Tokens primitivos y semánticos, foundations, 22 componentes documentados y una transferencia a celular construida solo con la biblioteca.', tags: ['Design system', 'Tokens', 'Documentación'] },
    en: { title: 'Banco de la Nación', subtitle: 'A design system for the bank’s app.', description: 'Primitive and semantic tokens, foundations, 22 documented components and a phone transfer built only with the library.', tags: ['Design system', 'Tokens', 'Documentation'] }
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
    es: { title: 'Vaca', subtitle: 'Un fondo compartido que reemplaza al “me debes”.', description: 'Producto conceptual para roommates: todos aportan antes del gasto y la casa paga desde un fondo común.', tags: ['Product design', 'User flows', 'Prototipo navegable'] },
    en: { title: 'Vaca', subtitle: 'A shared fund that replaces “you owe me.”', description: 'A concept for roommates: everyone contributes before spending and the household pays from one shared fund.', tags: ['Product design', 'User flows', 'Clickable prototype'] }
  },
  'banco-nacion': {
    next: 'vaca',
    href: '/casos/vaca',
    es: { title: 'Vaca', subtitle: 'Un fondo compartido que reemplaza al “me debes”.', description: 'Producto conceptual para roommates: todos aportan antes del gasto y la casa paga desde un fondo común.', tags: ['Product design', 'User flows', 'Prototipo navegable'] },
    en: { title: 'Vaca', subtitle: 'A shared fund that replaces “you owe me.”', description: 'A concept for roommates: everyone contributes before spending and the household pays from one shared fund.', tags: ['Product design', 'User flows', 'Clickable prototype'] }
  },
  vaca: {
    next: 'bbva',
    href: '/casos/bbva',
    es: { title: 'BBVA Perú', subtitle: 'Convertir una oferta de crédito en una experiencia clara.', description: 'Diseño e implementación de comunicaciones CRM con jerarquía, personalización dinámica y compliance bancario.', tags: ['Email UX', 'Salesforce MC', 'Diseño responsive'] },
    en: { title: 'BBVA Peru', subtitle: 'Turning a credit offer into a clear experience.', description: 'Design and implementation of CRM communications balancing hierarchy, dynamic personalization and bank compliance.', tags: ['Email UX', 'Salesforce MC', 'Responsive design'] }
  }
};
