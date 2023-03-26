export type ProductType = {
  price: number;
  image: string;
  name: string;
  id: number;
};

export interface CartProductType extends ProductType {
  isOrder: boolean;
  amount: number;
}

export type CartListType = CartProductType[];
