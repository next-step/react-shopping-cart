export const numberFormat = (price: number) => {
  const number = price;

  const formattedNumber = new Intl.NumberFormat("en-US").format(number);

  return formattedNumber;
};
