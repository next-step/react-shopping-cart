import { useRef } from 'react'

import { CenterModalContainer } from '@/components/modals'
import { useModal, useOutsideClick } from '@/hooks'

interface OrderCheckModalProps {
  text?: string
  onClick?: () => void
}

const OrderCheckModal = ({ onClick, text = '장바구니에서 모두 삭제하시겠어요?' }: OrderCheckModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const { closeModal } = useModal()

  useOutsideClick(modalRef, () => {
    closeModal({ element: <OrderCheckModal /> })
  })

  const closeOrderCheckModal = () => {
    closeModal({ element: <OrderCheckModal /> })
  }

  return (
    <div ref={modalRef}>
      <CenterModalContainer>
        <div className="modal delete-modal">
          <pre>{text}</pre>
          <div className="flex justify-between gap-10">
            <button className="delete-modal-button" onClick={closeOrderCheckModal}>
              취소
            </button>
            <button className="delete-modal-button" onClick={onClick}>
              확인
            </button>
          </div>
        </div>
      </CenterModalContainer>
    </div>
  )
}

export default OrderCheckModal
