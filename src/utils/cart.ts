import { IProduct } from "@/types/product";
import { ICart } from "@/types/cart";
import { IOrder } from "@/types/order";

const addProductToCart = (cart: ICart[], product: IProduct) => {
  console.log("LOG: ADD CART", product.id);
  const newItem = {
    id: window.crypto.randomUUID(),
    product,
  };
  return [...cart, newItem];
};

const removeProductFromCart = (cart: ICart[], id: ICart["id"]) => {
  return cart.filter((item) => item.id !== id);
};

const mergeByProductId = (cart: ICart[]): IOrder[] => {
  const grouped = cart.reduce((acc, item) => {
    const existing = acc.find((group) => group.id === item.product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        imageUrl: item.product.imageUrl,
        quantity: 1,
      });
    }
    return acc;
  }, [] as IOrder[]);
  return grouped;
};

export { addProductToCart, removeProductFromCart, mergeByProductId };
