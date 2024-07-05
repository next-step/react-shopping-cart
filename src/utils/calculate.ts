export const calculateTotalQuantity = (items: { quantity?: number }[]) => {
  return items.reduce((acc, item) => acc + (item.quantity ?? 0), 0);
};
export const calculateTotalAmount = (
  items: { quantity?: number; product: { price: number } }[]
) => {
  return items.reduce(
    (acc, item) => acc + (item.quantity ?? 0) * item.product.price,
    0
  );
};
