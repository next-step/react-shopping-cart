import { CARTS_PATH } from 'carts/routers'
import { ORDERS_PATH } from 'orders/routers'
import { MenuType } from '../components/ui/Menu/Menu'
export const MENU: MenuType[] = [
  {
    id: 'carts',
    path: CARTS_PATH.CARTS,
    name: '장바구니',
  },
  {
    id: 'orders',
    path: ORDERS_PATH.ORDERS,
    name: '주문목록',
  },
]
