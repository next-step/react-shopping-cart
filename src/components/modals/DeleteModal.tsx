import { useRef } from 'react'

import { CenterModalContainer } from '@/components/modals'
import { useModal, useOutsideClick } from '@/hooks'

const DeleteModal = ({ text = '장바구니에서 모두 삭제하시겠어요?' }: { text?: string }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const { closeModal } = useModal()

  useOutsideClick(modalRef, () => {
    closeModal({ element: <DeleteModal /> })
  })

  const closeDeleteModal = () => {
    closeModal({ element: <DeleteModal /> })
  }

  return (
    <div ref={modalRef}>
      <CenterModalContainer>
        <div className="modal delete-modal">
          <pre>{text}</pre>
          <div className="flex justify-between gap-10">
            <button className="delete-modal-button">삭제</button>
            <button className="delete-modal-button" onClick={closeDeleteModal}>
              취소
            </button>
          </div>
        </div>
      </CenterModalContainer>
    </div>
  )
}

export default DeleteModal
