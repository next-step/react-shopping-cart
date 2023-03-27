export const priceFormat = (value: number | undefined) => {
  if (!value) return null;
  return value.toLocaleString() + ' 원';
};
