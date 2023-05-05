export type ProductType = {
  price: number;
  image: string;
  name: string;
  id: number;
};

export type ProductListType = {
  products: ProductType[];
  TOTAL_PAGE: number;
};

export interface CartProductType extends ProductType {
  isOrder: boolean;
  amount: number;
}

export type CartProductListType = CartProductType[];

export interface OrderProductType {
  price: number;
  image: string;
  name: string;
  amount: number;
  id: number;
}

export type OrderedItemsType = {
  id: number;
  ordered: {
    items: OrderProductType[];
    totalAmount: number;
    totalPrice: number;
  };
};
export type StatusType = 'Loading' | 'Fail' | 'Complete';
