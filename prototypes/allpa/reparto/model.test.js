import test from 'node:test';
import assert from 'node:assert/strict';
import { SCENARIOS, changeAllocation, derive, validRecord } from './model.js';

test('specified scenarios preserve the money and report the actual shortfall', () => {
  assert.deepEqual(derive(SCENARIOS.comfortable), { available: 58000, shortfall: 0 });
  assert.deepEqual(derive(SCENARIOS.shortfall), { available: 0, shortfall: 15000 });
  assert.deepEqual(derive(SCENARIOS.adjustment), { available: 70000, shortfall: 0 });
});
test('edits cannot allocate more than received or change the other allocation', () => {
  for (const scenario of Object.values(SCENARIOS)) {
    let draft = scenario;
    for (const key of ['payments', 'buffer', 'payments', 'buffer']) {
      for (const value of [-100, 0, 12300, 50000, 999999]) {
        const other = key === 'payments' ? 'buffer' : 'payments';
        const next = changeAllocation(draft, key, value);
        assert.equal(next[other], draft[other]);
        const result = derive(next);
        assert.ok(result.available >= 0);
        assert.equal(next.payments + next.buffer + result.available, next.income);
        assert.ok(next.payments <= next.rent);
        draft = next;
      }
    }
  }
});
test('zero buffer is voluntary and restored records reject invalid money', () => {
  const draft = changeAllocation(SCENARIOS.comfortable, 'buffer', 0);
  assert.equal(derive(draft).available, 70000);
  assert.ok(validRecord({ ...draft, scenario: 'comfortable' }));
  assert.equal(validRecord({ ...draft, scenario: 'comfortable', buffer: 90000 }), false);
  assert.equal(validRecord({ ...draft, scenario: 'comfortable', income: 35000 }), false);
  assert.equal(validRecord(null), false);
});
