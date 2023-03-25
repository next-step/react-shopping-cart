import { useRef } from 'react'

import { CenterModalContainer } from '@/components/modals'
import { useModal, useOutsideClick } from '@/hooks'

interface DeleteModalProps {
  text?: string
  onDelete?: () => void
}

const DeleteModal = ({ onDelete, text = '장바구니에서 모두 삭제하시겠어요?' }: DeleteModalProps) => {
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
            <button className="delete-modal-button" onClick={onDelete}>
              삭제
            </button>
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
