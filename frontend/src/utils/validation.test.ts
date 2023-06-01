import { expect, test } from 'vitest';

import { assert } from '@/utils/validation';

test('assert', () => {
  expect(assert(true, 'message')).toBeUndefined();
  expect(() => assert(false, 'message')).toThrowError('message');
});
