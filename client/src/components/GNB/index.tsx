import { Link } from 'react-router-dom'
import { ReactComponent as ShoppingBack } from '../../assets/shoppingCart.svg'
import * as S from './styles'

const PRODUCT_LIST_URL = '/'
const SHOPPING_CART_URL = '/shopping-cart'
const ORDER_LIST_URL = '/order-list'

const GNB = () => {
  return (
    <S.navMenu>
      <S.navLogoBox>
        <Link to={PRODUCT_LIST_URL}>
          <ShoppingBack />
        </Link>
        <Link to={PRODUCT_LIST_URL}>
          <h1>NEXTSTEP</h1>
        </Link>
      </S.navLogoBox>
      <S.navBtnBox>
        <Link to={SHOPPING_CART_URL}>장바구니</Link>
        <Link to={ORDER_LIST_URL}>주문목록</Link>
      </S.navBtnBox>
    </S.navMenu>
  )
}

export default GNB
