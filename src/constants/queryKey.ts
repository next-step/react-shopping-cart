export const CART_QUERY_KEYS = {
  ALL: ['cart'],
  LISTS: () => [...CART_QUERY_KEYS.ALL, 'list'],
};

export const ORDER_QUERY_KEYS = {
  ALL: ['orders'],
  LISTS: () => [...ORDER_QUERY_KEYS.ALL, 'list'],
  DETAILS: () => [...ORDER_QUERY_KEYS.ALL, 'detail'],
  DETAIL: (id: number) => [...ORDER_QUERY_KEYS.DETAILS(), id],
};

export const PRODUCT_QUERY_KEYS = {
  ALL: ['products'],
  LISTS: () => [...PRODUCT_QUERY_KEYS.ALL, 'list'],
  DETAILS: () => [...PRODUCT_QUERY_KEYS.ALL, 'detail'],
  DETAIL: (id: number) => [...PRODUCT_QUERY_KEYS.DETAILS(), id],
};
