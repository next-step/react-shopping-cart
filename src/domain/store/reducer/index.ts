import { cartSlice } from 'domain/store/feature/cart/cartSlice';
import { productSlice } from 'domain/store/feature/product/productslice';
import { orderSlice } from 'domain/store/feature/order/orderSlice';

export const cartReducer = cartSlice.reducer;
export const productReducer = productSlice.reducer;
export const orderReducer = orderSlice.reducer;
