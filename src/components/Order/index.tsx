import { useContext, useEffect, useState } from 'react'
import { CartsContext, UpdateCartsContext } from '../../context/cartsContext'
import Modal from '../common/Modal'
import { useQuery } from '@tanstack/react-query'
import { getOrderList } from '../../api/cart'

const OrderList = () => {
  const cartsContext = useContext(CartsContext)
  const updateCartsContext = useContext(UpdateCartsContext)

  const [openModal, setOpenModal] = useState(false)

  const { data: orderList } = useQuery({
    queryKey: ['orderList'],
    queryFn: () => {
      return getOrderList()
    },
    retry: 3,
  })

  useEffect(() => {
    if (orderList) {
      updateCartsContext({ ...cartsContext, order: orderList })
    }
  }, [orderList])

  return (
    <section className="order-section">
      {openModal && (
        <Modal
          props={{
            isOpen: openModal,
            title: '장바구니에 담았어요!',
            setModalStatus: () => setOpenModal((state) => !state),
          }}
        />
      )}
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문 목록</h2>
        <hr className="divide-line mt-20" />
      </header>

      <div className="order-list">
        <div className="order-list__header">
          <span>주문번호: 1</span>
          <span>상세보기 {`>`}</span>
        </div>
        {cartsContext.order.map((item, idx) => (
          <div className="order-list-item" key={item.id}>
            {item.orderDetails.map((order) => (
              <div key={order.name} className="order-row">
                <div className="flex gap-15 mt-10 custom">
                  <img className="w-144 h-144" src={order.imageUrl} alt={order.name} />
                  <div className="flex-col gap-15">
                    <span className="order-name">{order.name}</span>
                    <span className="order-info">
                      {order.price}원 / 수량: {order.quantity}개
                    </span>
                  </div>
                </div>
                <button
                  className="primary-button-small flex-center self-start"
                  onClick={() => {
                    setOpenModal(true)
                    updateCartsContext({ ...cartsContext, carts: [...cartsContext.carts, order] })
                  }}
                >
                  장바구니
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default OrderList
