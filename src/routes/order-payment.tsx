import {
  HighlightedText,
  Replace,
  SquareButton,
  SquarePanel,
  Image,
  PaymentModal,
} from '@/components'
import { useOverlay } from '@/hooks/use-overlay'
import { useCreateOrder } from '@/mutations/create-order'
import { orderPaymentAtom } from '@/stores/atoms/order-payment-atom'
import { useOrderPaymentTotalPrice } from '@/stores/hooks'
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAtomValue } from 'jotai'

export const Route = createFileRoute('/order-payment')({
  component: OrderListPage,
})

function OrderListPage() {
  const isOrderPaymentProductListEmpty = useAtomValue(orderPaymentAtom).length === 0

  return (
    <div className={css({ width: '100%' })}>
      <h1
        className={css({
          width: '100%',
          textAlign: 'center',
          paddingBottom: '20px',
          borderBottom: '3px solid token(colors.black)',
          textStyle: 'heading1',
        })}
      >
        주문/결제
      </h1>
      <div
        className={flex({
          paddingY: '40px',
          paddingX: '20px',
          flexDir: {
            lg: 'row',
            base: 'column-reverse',
          },
          gap: {
            xl: '80px',
            base: '40px',
          },
        })}
      >
        <Replace
          on={isOrderPaymentProductListEmpty}
          fallback={
            <div
              className={flex({
                flexDir: 'column',
                gap: '30px',
                width: '100%',
                justifyContent: 'center',
              })}
            >
              <h2 className={css({ textAlign: 'center' })}>주문할 아이템이 선택되지 않았어요</h2>
              <Link to="/cart">
                <SquareButton>장바구니 보러가기</SquareButton>
              </Link>
            </div>
          }
        >
          <OrderPaymentProductList />
          <OrderPaymentTotalPanel />
        </Replace>
      </div>
    </div>
  )
}

const OrderPaymentProductList = () => {
  const orderPaymentProductList = useAtomValue(orderPaymentAtom)
  return (
    <div className={flex({ flexGrow: 1, flexDir: 'column' })}>
      <h2
        className={css({
          textStyle: 'heading2',
          width: '100%',
          paddingBottom: '20px',
          borderBottom: '2px solid token(colors.gray.500)',
        })}
      >
        주문 상품({orderPaymentProductList.length}건)
      </h2>
      <ul>
        {orderPaymentProductList.map(({ id, name, quantity, imageUrl }) => (
          <li
            key={id}
            className={flex({
              padding: '20px',
              alignItems: 'center',
              gap: '20px',
              borderBottom: '1px solid token(colors.gray.300)',
            })}
          >
            <Image size="sm" src={imageUrl} alt={name} />
            <div className={flex({ flexDir: 'column' })}>
              <span className={css({ textStyle: 'body1', marginBottom: '12px' })}>{name}</span>
              <span className={css({ textStyle: 'body2' })}>수량 : {quantity}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const OrderPaymentTotalPanel = () => {
  const navigate = useNavigate()
  const totalPaymentOrderPrice = useOrderPaymentTotalPrice()
  const orderPaymentProductList = useAtomValue(orderPaymentAtom)
  const isOrderPaymentProductListEmpty = useAtomValue(orderPaymentAtom).length === 0
  const [openModal, closeModal] = useOverlay()
  const { createOrder } = useCreateOrder()

  const handleClickPaymentButton = () => {
    const handleClickPaymentConfirmButton = () => {
      createOrder(orderPaymentProductList, {
        onSuccess: () => {
          closeModal()
          void navigate({
            to: '/orders',
          })
        },
      })
    }

    openModal(
      <PaymentModal
        totalPrice={totalPaymentOrderPrice}
        onClose={closeModal}
        onClickConfirm={handleClickPaymentConfirmButton}
      />,
    )
  }

  return (
    <div className={flex({ flexDir: 'column', width: { lg: '400px', base: '100%' } })}>
      <SquarePanel>결제 예상 금액</SquarePanel>
      <SquarePanel justifyContent="space-between">
        <div className={flex({ justifyContent: 'space-between', marginBottom: '60px' })}>
          <HighlightedText size="md">총 결제금액</HighlightedText>
          <HighlightedText size="md">{totalPaymentOrderPrice.toLocaleString()}원</HighlightedText>
        </div>
        <SquareButton
          disabled={isOrderPaymentProductListEmpty}
          onClick={handleClickPaymentButton}
        >{`${totalPaymentOrderPrice.toLocaleString()}원 결제하기`}</SquareButton>
      </SquarePanel>
    </div>
  )
}
