export function numberFormatter(value: number): string {
  return new Intl.NumberFormat().format(value);
}
