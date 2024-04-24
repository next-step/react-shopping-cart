import { cartListOption } from '@/queries/cart'
import { CheckBox, HighlightedText, Replace, SquareButton, SquarePanel } from '@/components'
import { flex } from '@styled-system/patterns'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Suspense } from 'react'
import { css } from '@styled-system/css'
import { CartSelectList } from '@/components/templates/cart-select-list/cart-select-list'
import {
  useCartProductListSelection,
  useIsAnyCartProductSelected,
  useResetCartProductSelection,
  useSelectedCartTotalInfo,
} from '@/stores/hooks'
import { cartSelectAtom } from '@/stores/atoms/cart-select-atom'
import { useDeleteCartProductAll } from '@/mutations/delete-cart-product-all'
import { useAtomValue, useSetAtom } from 'jotai'
import { IconMoodEmpty } from '@tabler/icons-react'
import { orderPaymentAtom } from '@/stores/atoms/order-payment-atom'

export const Route = createFileRoute('/cart')({
  component: Cart,
})

function Cart() {
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
        장바구니
      </h1>
      <Suspense fallback={<div>loading...</div>}>
        <CartList />
      </Suspense>
    </div>
  )
}

const CartList = () => {
  const navigate = useNavigate()

  // server state
  const { data: cartList } = useSuspenseQuery(cartListOption)

  // client state
  const cartSelection = useAtomValue(cartSelectAtom)
  const isAnyCartProductSelected = useIsAnyCartProductSelected()
  const [totalSelection, totalSelectionPrice] = useSelectedCartTotalInfo(cartList)
  const [isCartProductListSelected, toggleCartProductListSelection] =
    useCartProductListSelection(cartList)
  const resetCartProductSelection = useResetCartProductSelection()
  const setOrderPaymentProductList = useSetAtom(orderPaymentAtom)

  // mutation
  const { mutate: deleteSelectedCartProduct } = useDeleteCartProductAll()

  const handleClickDeleteSelectedCartProductButton = () => {
    if (!confirm('선택된 상품들을 삭제하시겠습니까?')) return
    deleteSelectedCartProduct([...cartSelection])
    resetCartProductSelection()
  }

  const handleClickOrderButton = () => {
    // 1. 선택한 장바구니 데이터 가져오기
    const orderProductList = cartList.filter(({ id }) => cartSelection.has(id))

    // 2. 선택한 장바구니 데이터 삭제 요청 보내기
    deleteSelectedCartProduct([...cartSelection], {
      onSuccess: () => {
        // 3. 선택된 장바구니 데이터 atom에 저장
        setOrderPaymentProductList(orderProductList)
        // 4. order-payment 페이지로 navigate
        void navigate({
          to: '/order-payment',
        })
        resetCartProductSelection()
      },
    })
  }

  return (
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
        on={cartList.length === 0}
        fallback={
          <div
            className={flex({
              flexDir: 'column',
              gap: '24px',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            })}
          >
            <IconMoodEmpty size={36} />
            <h2 className={css({ textStyle: 'heading2' })}>장바구니가 텅~ 비었어요</h2>
          </div>
        }
      >
        <div className={css({ flexGrow: 1 })}>
          <div
            className={flex({
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '36px',
            })}
          >
            <div className={flex({ gap: '16px', alignItems: 'center' })}>
              <CheckBox
                checked={isCartProductListSelected}
                onClick={toggleCartProductListSelection}
              />
              <label>{isCartProductListSelected ? '선택해제' : '전체선택'}</label>
            </div>
            <SquareButton
              color="whiteGray"
              fullWidth={false}
              size="sm"
              disabled={!isAnyCartProductSelected}
              onClick={handleClickDeleteSelectedCartProductButton}
            >
              상품삭제
            </SquareButton>
          </div>

          <CartSelectList cartList={cartList} />
        </div>
        <div className={flex({ flexDir: 'column', width: { lg: '400px', base: '100%' } })}>
          <SquarePanel>결제 예상 금액</SquarePanel>
          <SquarePanel justifyContent="space-between">
            <div className={flex({ justifyContent: 'space-between', marginBottom: '60px' })}>
              <HighlightedText size="md">결제예상금액</HighlightedText>
              <HighlightedText size="md">{totalSelectionPrice.toLocaleString()}원</HighlightedText>
            </div>
            <SquareButton
              disabled={totalSelection === 0}
              onClick={handleClickOrderButton}
            >{`주문하기(${totalSelection}개)`}</SquareButton>
          </SquarePanel>
        </div>
      </Replace>
    </div>
  )
}
