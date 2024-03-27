import { ICart } from "@/types/cart";
import { IOrder } from "@/types/order";

const groupByProductId = (cart: ICart[]): IOrder[] => {
  return cart.reduce((acc: IOrder[], item: ICart) => {
    const existingItem = acc.find((order) => order.id === item.product.id);
    if (existingItem) {
      existingItem.quantity += 1;
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
  }, []);
};

export { groupByProductId };
