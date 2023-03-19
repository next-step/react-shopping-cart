import React, { useEffect, useState } from 'react'
import { useApiClient } from '../context/ApiClientContext'
import { OrderProducts, OrderProductsType } from '../components/OrderProducts'

function Orders() {
  const { ordersHttpClient } = useApiClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [orders, setOrders] = useState<OrderProductsType[] | []>([])
  useEffect(() => {
    setLoading(true)
    setError(null)
    ordersHttpClient
      ?.getOrders()
      .then((orders) => {
        setOrders(orders)
      })
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [ordersHttpClient])

  if (loading) return <div>...loading</div>

  return (
    <main className='bg-gray-200 min-h-full'>
      <section className='container mx-auto'>
        <h3 className='subtitle'>주문목록</h3>
        <section className='flex flex-col'>
          {orders?.length && (
            <ul>
              {orders.map((order) => (
                <OrderProducts key={order.id} order={order} />
              ))}
            </ul>
          )}
        </section>
      </section>
    </main>
  )
}

export default Orders
