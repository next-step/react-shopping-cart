import { useContext, useEffect, useState } from 'react'
import { CartsContext, UpdateCartsContext } from '../../context/cartsContext'
import Modal from '../common/Modal'

const OrderList = () => {
  const cartsContext = useContext(CartsContext)
  const updateCartsContext = useContext(UpdateCartsContext)

  const [isModal, setIsModal] = useState(false)

  const FetchOrderList = async () => {
    const response = await fetch('/orders')
    const jsonData = await response.json()
    updateCartsContext({ ...cartsContext, order: jsonData })
  }
  useEffect(() => {
    FetchOrderList()
  }, [])
  return (
    <section className="order-section">
      {isModal && (
        <Modal
          props={{
            isOpen: isModal,
            title: '장바구니에 담았어요!',
            setModalStatus: () => setIsModal((state) => !state),
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
            <div className="flex gap-15 mt-10">
              <img className="w-144 h-144" src={item.orderDetails[idx].imageUrl} alt={item.orderDetails[idx].name} />
              <div className="flex-col gap-15">
                <span className="order-name">{item.orderDetails[idx].name}</span>
                <span className="order-info">
                  {item.orderDetails[idx].price}원 / 수량: {item.orderDetails[idx].quantity}개
                </span>
              </div>
            </div>
            <button
              className="primary-button-small flex-center self-start"
              onClick={() => {
                setIsModal(true)
                updateCartsContext({ ...cartsContext, carts: [...cartsContext.carts, item.orderDetails[idx]] })
              }}
            >
              장바구니
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OrderList
