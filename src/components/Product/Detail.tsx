import { useContext } from 'react'
import { CartsContext, UpdateCartsContext } from '../../context/cartsContext'
import Modal from '../common/Modal'
import { useQuery } from '@tanstack/react-query'
import { getProductDetailItem } from '../../api/cart'
import useModal from '../../hooks/useModal'

const Detail = ({ id }: { id: string }) => {
  const cartsContext = useContext(CartsContext)
  const updateCartsContext = useContext(UpdateCartsContext)

  const { props, openModal, setOpenModal } = useModal({ title: '장바구니에 담았어요!' })

  const { data: detailItem } = useQuery({
    queryKey: ['detailItem'],
    queryFn: () => {
      return getProductDetailItem(id)
    },
    retry: 3,
  })

  if (!detailItem) return null
  return (
    <div className="product-detail-container">
      {openModal && <Modal props={{ ...props }} />}
      {detailItem && (
        <div className="flex-col-center w-520">
          <img className="w-480 h-480 mb-10" src={detailItem.imageUrl} alt={detailItem.name} />
          <div className="product-detail-info">
            <span className="product-detail-info__name">{detailItem.name}</span>
            <hr className="divide-line-gray my-20" />
            <div className="flex justify-between">
              <span>금액</span>
              <span className="product-detail-info__price">{detailItem.price}원</span>
            </div>
          </div>
          <button
            className="product-detail-button flex-center mt-20"
            onClick={() => {
              setOpenModal(true)
              updateCartsContext({ ...cartsContext, carts: [...cartsContext.carts, detailItem] })
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
