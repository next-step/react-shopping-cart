export const formatPrice = (price: number) => {
  if (!price) return "0";
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
