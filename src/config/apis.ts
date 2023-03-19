export const API = {
  PRODUCTS: `${process.env.REACT_APP_API_URL}/products`,
  PRODUCT: (id: number | null) => `${process.env.REACT_APP_API_URL}/products/${id}`,
  CARTS: `${process.env.REACT_APP_API_URL}/carts`,
  CART: (id: number) => `${process.env.REACT_APP_API_URL}/carts/${id}`,
}
