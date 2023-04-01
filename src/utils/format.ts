export const priceFormat = (value: number | undefined) => {
  if (value === undefined) throw Error('priceFormat value is undefined!');
  return value.toLocaleString() + ' 원';
};
