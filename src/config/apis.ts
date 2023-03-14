export const API = {
  PRODUCTS: `${process.env.REACT_APP_API_URL}/products`,
  PRODUCT: (id: number) => `${process.env.REACT_APP_API_URL}/products/${id}`,
}
