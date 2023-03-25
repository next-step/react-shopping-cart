export const formatPrice = (price: number | undefined) => {
  if (!price) return "0";
  return price.toLocaleString();
};
