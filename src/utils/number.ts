import { isNil } from './utils';

export function convertToNumberSafe(string?: string | null) {
  if (isNil(string)) return null;

  return Number(string);
}
