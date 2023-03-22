export function currency(value: number, currency = '원'): string {
  return new Intl.NumberFormat('ko-KO').format(value) + currency;
}
