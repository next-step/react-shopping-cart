export function numberFormatter(value: number) {
  return new Intl.NumberFormat().format(value);
}
