import { Link } from '@tanstack/react-router'

import { useCartListStore } from '../../store/cartListStore/cartListStore'

/**
 * @summary 공통으로 사용하는 네비게이션 바
 * @detail 메인페이지, 장바구니, 주문목록 페이지 라우팅
 */
export const Gnb = () => {
  const cartListStore = useCartListStore()

  return (
    <div>
      <nav className="nav flex justify-around">
        <div className="flex-center">
          <Link to="/" className="nav-title pointer">
            Foo Shop
          </Link>
        </div>

        <div className="flex gap-15">
          <div className="flex" style={{ position: 'relative' }}>
            <Link to="/cart" className="nav-button flex items-center pointer">
              장바구니
            </Link>

            <em
              style={{
                position: 'absolute',
                right: -12,
                top: 10,
                color: '#2ac1bc',
                fontWeight: 'bold',
                fontSize: 17,
                width: 25,
                height: 25,
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
              }}
            >
              {cartListStore.cartList.length}
            </em>
          </div>

          <Link to="/orders" className="nav-button flex items-center pointer">
            주문목록
          </Link>
        </div>
      </nav>
    </div>
  )
}
