import { useState } from 'react';
import { ICart, IProduct } from '../../../domain/shopping-cart/types';
import { CART } from '../../../domain/shopping-cart/constants';

const CART_INITIAL_VALUE = { products: [] };

export type TCartDataHandlers = {
  insertProducts: (products: IProduct[]) => void;
  updateProducts: (products: IProduct[]) => void;
  deleteProducts: (products: IProduct[]) => void;

  insertProduct: (product: IProduct) => void;
  updateProduct: (product: IProduct) => void;
  deleteProduct: (product: IProduct) => void;
};

type THookCartDataHandlers = () => {
  cart: ICart;
  cartDataHandlers: TCartDataHandlers;
};

const {
  PRODUCTS: { AMOUNT_UNIT },
} = CART;

const sortProducts = (products: IProduct[]) => products.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

const insertAndUpdateProducts = (oldProducts: IProduct[], newProducts: IProduct[], isIncreasingAmount = false) => {
  const currentTime = Date.now();
  const newProductIds = newProducts.map(({ id }) => id);

  return [
    ...newProducts.map((product) => {
      const oldProduct = oldProducts.find(({ id }) => id === product.id);
      if (oldProduct) {
        return {
          ...product,
          amount: isIncreasingAmount ? (oldProduct?.amount || 0) + AMOUNT_UNIT : product.amount,
          updatedAt: currentTime,
        };
      }
      return {
        ...product,
        amount: 1,
        createdAt: currentTime,
        updatedAt: currentTime,
      };
    }),
    ...oldProducts.filter(({ id }) => !newProductIds.includes(id)),
  ];
};

const useCartDataHandlers: THookCartDataHandlers = () => {
  const [cart, setCart] = useState<ICart>(CART_INITIAL_VALUE);

  const insertProducts = (newProducts: IProduct[]) => {
    const products = insertAndUpdateProducts(cart.products, newProducts, true);
    sortProducts(products);

    setCart({
      ...cart,
      products,
    });
  };

  const updateProducts = (newProducts: IProduct[]) => {
    const products = insertAndUpdateProducts(cart.products, newProducts);

    sortProducts(products);

    setCart({
      ...cart,
      products,
    });
  };

  const deleteProducts = (products: IProduct[]) => {
    const { products: oldProducts } = cart;
    const ids = products.map(({ id }) => id);

    setCart({
      ...cart,
      products: oldProducts.filter(({ id }) => !ids.includes(id)),
    });
  };

  const insertProduct = (product: IProduct) => insertProducts([product]);
  const updateProduct = (product: IProduct) => updateProducts([product]);
  const deleteProduct = (product: IProduct) => deleteProducts([product]);

  const cartDataHandlers = {
    insertProducts,
    updateProducts,
    deleteProducts,

    insertProduct,
    updateProduct,
    deleteProduct,
  };

  return { cart, cartDataHandlers };
};

export default useCartDataHandlers;
