import { useRef } from 'react'

import { CenterModalContainer } from '@/components/modals'
import { useModal, useOutsideClick } from '@/hooks'

interface PaymentCheckModalProps {
  text?: string
  onConfirmButtonClick?: () => void
}

const PaymentCheckModal = ({ onConfirmButtonClick, text = '주문 내역을 결제하시겠어요?' }: PaymentCheckModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const { closeModal } = useModal()

  useOutsideClick(modalRef, () => {
    closeModal({ element: <PaymentCheckModal /> })
  })

  const closeOrderCheckModal = () => {
    closeModal({ element: <PaymentCheckModal /> })
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
            <button className="delete-modal-button" onClick={onConfirmButtonClick}>
              확인
            </button>
          </div>
        </div>
      </CenterModalContainer>
    </div>
  )
}

export default PaymentCheckModal
