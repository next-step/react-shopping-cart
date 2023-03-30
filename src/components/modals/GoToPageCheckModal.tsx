import { useRef } from 'react'

import { CenterModalContainer } from '@/components/modals'
import { useModal, useOutsideClick } from '@/hooks'

// Todo: 관련 모달 공통 컴포넌트로 추상화 가능
interface GoToPageCheckModalProps {
  text?: string
  onConfirmButtonClick?: () => void
}

const GoToPageCheckModal = ({
  onConfirmButtonClick,
  text = '장바구니 목록을 확인하시겠어요?',
}: GoToPageCheckModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const { closeModal } = useModal()

  useOutsideClick(modalRef, () => {
    closeModal({ element: <GoToPageCheckModal /> })
  })

  const closeOrderCheckModal = () => {
    closeModal({ element: <GoToPageCheckModal /> })
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

export default GoToPageCheckModal
