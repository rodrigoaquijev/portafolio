export const SCENARIOS = {
  comfortable: { label: 'Cobro holgado', income: 120000, payments: 50000, buffer: 12000, rent: 50000 },
  shortfall: { label: 'Faltante', income: 35000, payments: 35000, buffer: 0, rent: 50000 },
  adjustment: { label: 'Reajuste voluntario', income: 120000, payments: 50000, buffer: 0, rent: 50000 },
};

export const money = (cents) => new Intl.NumberFormat('es-PE', {
  style: 'currency', currency: 'PEN', minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  maximumFractionDigits: 2,
}).format(cents / 100);

export function derive(draft) {
  return {
    available: draft.income - draft.payments - draft.buffer,
    shortfall: Math.max(0, draft.rent - draft.payments),
  };
}

export function changeAllocation(draft, category, value) {
  const other = category === 'payments' ? 'buffer' : 'payments';
  const max = Math.min(draft.income - draft[other], category === 'payments' ? draft.rent : draft.income);
  return { ...draft, [category]: Math.max(0, Math.min(max, Math.round(value))) };
}

export function validRecord(record) {
  if (!record || !SCENARIOS[record.scenario]) return false;
  const scenario = SCENARIOS[record.scenario];
  return record.income === scenario.income && record.rent === scenario.rent &&
    ['income', 'rent', 'payments', 'buffer'].every(k => Number.isSafeInteger(record[k]) && record[k] >= 0) &&
    record.payments <= record.rent && record.payments + record.buffer <= record.income;
}

export function sameAllocation(a, b) {
  return !!a && !!b && ['scenario', 'income', 'payments', 'buffer', 'rent'].every(k => a[k] === b[k]);
}

export function terracePath(w, h) {
  const rx = w * .22, ry = h * .65, r = h * .18;
  return `M ${rx} 0 H ${w - rx} A ${rx} ${ry} 0 0 1 ${w} ${ry} V ${h - r} A ${r} ${r} 0 0 1 ${w - r} ${h} H ${r} A ${r} ${r} 0 0 1 0 ${h - r} V ${ry} A ${rx} ${ry} 0 0 1 ${rx} 0 Z`;
}
