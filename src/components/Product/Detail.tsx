import { useContext, useEffect, useState } from 'react'
import { CartsContext, Product, UpdateCartsContext } from '../../context/cartsContext'
import Modal from '../common/Modal'

const Detail = (id: { id: string }) => {
  const cartsContext = useContext(CartsContext)
  const updateCartsContext = useContext(UpdateCartsContext)

  const [item, setItem] = useState<Product | null>(null)
  const [isModal, setIsModal] = useState(false)

  const FetchProductDetailItem = async () => {
    const response = await fetch(`/products/${id.id}`)
    const jsonData = await response.json()

    if (response.status === 200) {
      setItem(jsonData[0])
    }
  }
  useEffect(() => {
    FetchProductDetailItem()
  }, [])
  return (
    <div className="product-detail-container">
      {isModal && (
        <Modal
          props={{
            isOpen: isModal,
            title: '장바구니에 담았어요!',
            setModalStatus: () => setIsModal((state) => !state),
          }}
        />
      )}
      {item && (
        <div className="flex-col-center w-520">
          <img className="w-480 h-480 mb-10" src={item.imageUrl} alt={item.name} />
          <div className="product-detail-info">
            <span className="product-detail-info__name">{item.name}</span>
            <hr className="divide-line-gray my-20" />
            <div className="flex justify-between">
              <span>금액</span>
              <span className="product-detail-info__price">{item.price}원</span>
            </div>
          </div>
          <button
            className="product-detail-button flex-center mt-20"
            onClick={() => {
              setIsModal(true)
              updateCartsContext({ ...cartsContext, carts: [...cartsContext.carts, item] })
            }}
          >
            장바구니
          </button>
        </div>
      )}
    </div>
  )
}

export default Detail
