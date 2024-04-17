export type Cart = {
  id: number;
  quantity: number;
  checked: boolean;
  product: {
    id: number;
    price: number;
    name: string;
    imageUrl: string;
  };
};

export type Carts = Cart[];
