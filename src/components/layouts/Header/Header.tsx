import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { useProductInfo } from '@/hooks'

const Header = () => {
  const { getProductId } = useProductInfo()

  // Todo: 해당 로직 외부로 분리하기
  const getDestinations = useMemo(() => {
    // Todo: path 상수로 관리하기 (현재는 변경에 취약)
    return [
      { to: '/product-list', text: '상품 목록' },
      { to: `/detail/${getProductId()}`, text: '상품 상세' },
      { to: '/cart', text: '장바구니' },
      { to: '/order', text: '주문/결제' },
      { to: '/order-list', text: '주문 목록' },
      { to: '/order-detail', text: '주문 상세' },
    ]
  }, [getProductId])

  return (
    <header className="flex-col-center">
      <h1 className="global-nav-title">장바구니</h1>
      <br />
      <div className="global-nav-button-box">
        {getDestinations.map((destination) => (
          <Link key={destination.to} className="global-nav-button" to={destination.to}>
            {destination.text}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
