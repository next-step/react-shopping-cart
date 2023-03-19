import React, { useEffect, useState } from 'react'
import CartItem, { CartItemType } from '../components/CartItem/CartItem'
import { PaymentInfo } from '../components/PaymentInfo'
import { useApiClient } from '../context/ApiClientContext'

function Cart() {
  const { cartHttpClient } = useApiClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [carts, setCarts] = useState<CartItemType[] | []>([])
  useEffect(() => {
    setLoading(true)
    setError(null)
    cartHttpClient
      ?.getCarts()
      .then((carts) => {
        setCarts(carts)
      })
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [cartHttpClient])

  if (loading) return <div>...loading</div>

  return (
    <main>
      <section className='container mx-auto'>
        <h3 className='subtitle'>장바구니</h3>
        <section className='flex flex-col lg:flex-row'>
          <div className='lg:w-2/3 pr-10'>
            <div className='my-10'>전체 체크 박스 넣을 자리</div>
            <p className='text-medium text-2xl mb-3 pb-3 border-solid border-gray-600 border-b-2'>
              든든배송 상품
            </p>
            {carts.length && (
              <ul>
                {carts?.map((cart) => (
                  <li key={cart.id}>
                    <CartItem cartItem={cart} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <section className='lg:w-1/3 mt-14'>
            <PaymentInfo
              totalCount={2}
              totalPrice={21700}
              onClick={() => console.log('1')}
            />
          </section>
        </section>
      </section>
    </main>
  )
}

export default Cart
