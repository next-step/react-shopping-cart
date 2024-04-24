import { CheckBox, HighlightedText, SquareButton } from '@/components/atoms'
import { CardCarousel } from '@/components/templates/card-carousel/card-carousel'
import { Modal, ModalProps } from '@/components/atoms/modal/modal'
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { useState } from 'react'
import { useOverlay } from '@/hooks/use-overlay'
import { Payments } from 'myfirstpackage-payments'

export interface PaymentModalProps extends ModalProps {
  totalPrice: number
  onClickConfirm: () => void
  onClose: () => void
}

export const PaymentModal = ({ totalPrice, onClickConfirm, onClose }: PaymentModalProps) => {
  const [isAccepted, setIsAccepted] = useState(false)
  const [openCardModal, closeCardModal] = useOverlay()

  const handleClickCardAddButton = () => {
    openCardModal(
      <Modal>
        <Payments />
        <SquareButton
          color="secondary"
          fullWidth={false}
          size="sm"
          className={css({
            marginTop: '24px',
            marginLeft: 'auto',
          })}
          onClick={closeCardModal}
        >
          카드 추가 그만두기
        </SquareButton>
      </Modal>,
    )
  }

  return (
    <Modal className={flex({ width: '680px', flexDir: 'column', gap: '40px' })}>
      <h2
        className={css({
          textStyle: 'heading2',
          color: 'token(colors.aqua.dark)',
        })}
      >
        Next Payments
      </h2>
      <div className={flex({ flexDir: 'column' })}>
        <HighlightedText size="md" className={css({ marginBottom: '10px' })}>
          보유카드
        </HighlightedText>
        <CardCarousel onClickAddCardButton={handleClickCardAddButton} />
      </div>
      <div>
        <div
          className={css({
            textStyle: 'heading2',
            marginBottom: '10px',
            paddingBottom: '10px',
            borderBottom: '1px solid token(colors.gray.500)',
          })}
        >
          결제 금액
        </div>
        <div className={flex({ justifyContent: 'space-between' })}>
          <HighlightedText size="md">총 결제금액</HighlightedText>
          <HighlightedText size="md">{totalPrice.toLocaleString()}원</HighlightedText>
        </div>
      </div>
      <div>
        <div
          className={css({
            textStyle: 'heading2',
            marginBottom: '10px',
            paddingBottom: '10px',
            borderBottom: '1px solid token(colors.gray.500)',
          })}
        >
          약관 이용 및 동의
        </div>
        <div className={flex({ justifyContent: 'space-between' })}>
          <div
            className={css({
              textStyle: 'caption1',
            })}
          >
            주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
          </div>
          <CheckBox checked={isAccepted} onClick={() => setIsAccepted(a => !a)} />
        </div>
      </div>
      <div
        className={flex({
          width: '100%',
          gap: '10px',
        })}
      >
        <SquareButton size="sm" fullWidth disabled={!isAccepted} onClick={onClickConfirm}>
          결제하기
        </SquareButton>
        <SquareButton size="sm" fullWidth color="whiteGray" onClick={onClose}>
          취소하기
        </SquareButton>
      </div>
    </Modal>
  )
}
