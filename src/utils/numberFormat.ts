export const numberFormat = (price: number) => {
  const formattedNumber = new Intl.NumberFormat("en-US").format(price);

  return formattedNumber;
};
