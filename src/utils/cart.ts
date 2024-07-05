import { CartProduct } from '@/types/cart';

/**
 * 상품의 수량을 업데이트합니다.
 * @param {Array} cartProducts - 장바구니 목록
 * @param {Object} targetProduct - 업데이트할 대상 상품
 * @param {number} updateValue - 업데이트할 수량 값 (-1 또는 1)
 * @returns 업데이트된 장바구니 목록
 */
export const updateProductQuantity = (
  cartProducts: CartProduct[],
  targetProduct: CartProduct,
  updateValue: -1 | 1
) => {
  return cartProducts.map((product) =>
    product.product.id === targetProduct.product.id
      ? {
          ...product,
          quantity: (targetProduct.quantity ?? 0) + updateValue,
        }
      : product
  );
};

/**
 * 상품을 장바구니에서 제거합니다.
 * @param {Array} cartProducts - 선택된 상품 목록
 * @param {number} productId - 삭제할 상품 ID
 * @returns 업데이트(삭제)된 장바구니 목록
 */
export const removeProductById = (
  cartProducts: CartProduct[],
  productId: CartProduct['id']
) => {
  return cartProducts.filter((product) => product.product.id !== productId);
};

/**
 * 상품을 ID로 찾아 반환합니다.
 * @param {number} cartProducts - 장바구니 목록
 * @param {number} productId - 찾고자 하는 상품의 ID
 * @returns 찾은 상품 또는 undefined
 */
export const findProductById = (
  cartProducts: CartProduct[],
  productId: CartProduct['id']
) => {
  return cartProducts.find(({ product }) => product.id === productId);
};

/**
 * 장바구니에 해당 상품이 있는지 확인합니다.
 * @param {CartItem[]} cart - 장바구니 목록
 * @param {string} productId - 확인하고자 하는 상품의 ID
 * @returns {boolean} - 상품이 장바구니에 있으면 true, 없으면 false를 반환합니다.
 */
export const checkProductExistInCart = (
  cart: CartProduct[],
  productId: CartProduct['id']
) => {
  return cart.some((item) => item.product.id === productId);
};
