export const priceFormat = (value: string | number | undefined): string => {
  if (!value) {
    return '';
  }
  return new Intl.NumberFormat().format(Number(value)) + ' 원';
};
