export const API = {
  PRODUCTS: '/products',
  CARTS: '/carts',
} as const;

export type APIPath = (typeof API)[keyof typeof API];
