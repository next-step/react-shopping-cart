export function currency(value: number, currency = '원'): string {
  const digitsRE = /(\d{3})(?=\d)/g;
  return value.toString().replace(digitsRE, '$1,') + currency;
}
