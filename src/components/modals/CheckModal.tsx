import { useRef } from 'react'

import { CenterModalContainer } from '@/components/modals'
import { useModal, useOutsideClick } from '@/hooks'

interface CheckModalProps {
  text?: string
  onConfirmButtonClick?: () => void
}

const CheckModal = ({ onConfirmButtonClick, text }: CheckModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const { closeModal } = useModal()

  useOutsideClick(modalRef, () => {
    closeModal({ element: <CheckModal /> })
  })

  const closeOrderCheckModal = () => {
    closeModal({ element: <CheckModal /> })
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

export default CheckModal
