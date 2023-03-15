export const priceFormat = (value: string | number) => {
  return new Intl.NumberFormat().format(Number(value)) + ' 원';
};
