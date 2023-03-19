import { NAVIGATE_URL } from '../utils/routers'
import { MenuType } from './../components/ui/Menu/Menu'
export const MENU: MenuType[] = [
  {
    id: 'cart',
    path: NAVIGATE_URL.CARTS,
    name: '장바구니',
  },
  {
    id: 'orders',
    path: NAVIGATE_URL.ORDERS,
    name: '주문목록',
  },
]
