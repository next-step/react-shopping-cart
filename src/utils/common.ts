export const formatPrice = (price: number | undefined) => {
  if (!price) return "0";
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
