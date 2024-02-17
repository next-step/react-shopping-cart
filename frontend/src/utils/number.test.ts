import { expect, test } from 'vitest';

import { numberFormatter } from '@/utils/number';

test('numberFormatter', () => {
  expect(numberFormatter(0)).toBe('0');
  expect(numberFormatter(100)).toBe('100');
  expect(numberFormatter(1_000)).toBe('1,000');
  expect(numberFormatter(1_000_000)).toBe('1,000,000');
});
