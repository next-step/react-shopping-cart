export function currency(value: number, currency = '원'): string {
  return new Intl.NumberFormat('ko-KR').format(value) + currency;
}
