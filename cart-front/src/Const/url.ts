export const URL = {
  getProducts: () => `/products`,
  postProducts: () => `/products`,
  getProduct: (id: string) => `/products/${id}`,
  deleteProduct: (id: string) => `/products/${id}`,
  getCarts: () => `/carts`,
  postCarts: () => `/carts`,
  deleteCarts: (id: string) => `/carts/${id}`,
  postOrders: () => `/orders`,
  getOrders: () => `/orders`,
  getOrder: (id: string) => `/orders/${id}`,
};
