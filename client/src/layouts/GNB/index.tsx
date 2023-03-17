import { useNavigate } from 'react-router'
import { ReactComponent as ShoppingBack } from '../../assets/shoppingBack.svg'
import * as S from './styles'

const PRODUCT_LIST_URL = '/'
const SHOPPING_BACK_URL = '/shopping-back'
const ORDER_LIST_URL = '/order-list'

const GNB = () => {
  const navigate = useNavigate()
  return (
    <S.navMenu>
      <S.navLogoBox onClick={() => navigate(PRODUCT_LIST_URL)}>
        <ShoppingBack />
        <div>NEXTSTEP</div>
      </S.navLogoBox>
      <S.navBtnBox>
        <button onClick={() => navigate(SHOPPING_BACK_URL)} type='button'>
          장바구니
        </button>
        <button onClick={() => navigate(ORDER_LIST_URL)} type='button'>
          주문목록
        </button>
      </S.navBtnBox>
    </S.navMenu>
  )
}

export default GNB
