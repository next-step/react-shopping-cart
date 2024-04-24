import { CartGroupedData } from '@/types/api-type'
import { CheckBox, IconButton, Image } from '@/components/atoms'
import { css } from '@styled-system/css'
import { flex, vstack } from '@styled-system/patterns'
import { IconTrash } from '@tabler/icons-react'
import { Counter } from '@/components/molecules/counter/counter'
import { useCartProductSelection, useResetCartProductSelection } from '@/stores/hooks'
import { useDeleteCartProductSingle } from '@/mutations/delete-cart-product-single'
import { useCreateCart } from '@/mutations/create-cart'
import { useDeleteCartProductAll } from '@/mutations/delete-cart-product-all'

export interface CartSelectListProps {
  cartList: CartGroupedData[]
}

export const CartSelectList = ({ cartList }: CartSelectListProps) => {
  return (
    <div>
      <div
        className={css({
          borderBottom: '3px solid token(colors.gray.500)',
          paddingBottom: '16px',
        })}
      >
        든든배송 상품({cartList.length}개)
      </div>
      <ul>
        {cartList.map(cart => (
          <CartSelectListItem key={cart.id} cart={cart} />
        ))}
      </ul>
    </div>
  )
}

interface CartSelectListItemProps {
  cart: CartGroupedData
}

const CartSelectListItem = ({ cart }: CartSelectListItemProps) => {
  const { id, imageUrl, name, quantity, price } = cart

  const [cartSelection, toggleCartProductSelection] = useCartProductSelection()
  const resetCartProductSelection = useResetCartProductSelection()
  const { mutate: addCartProductSingle } = useCreateCart()
  const { mutate: deleteCartProductSingle } = useDeleteCartProductSingle()
  const { mutate: deleteCartProductAll } = useDeleteCartProductAll()

  const handleClickCheckbox = () => {
    toggleCartProductSelection(id)
  }

  const handleClickIncreaseButton = (value: number, max: number) => {
    if (value <= max) {
      addCartProductSingle({ id, price, imageUrl, name })
    }
  }

  const handleClickDecreaseButton = (value: number, min: number) => {
    if (value >= min) {
      deleteCartProductSingle(id)
    }
  }

  const handleClickDeleteCartProductButton = () => {
    if (!confirm('선택한 상품을 삭제하시겠습니까?')) return
    deleteCartProductAll([id])
    resetCartProductSelection()
  }

  return (
    <li
      key={id}
      className={flex({
        gap: '20px',
        paddingY: '24px',
        borderBottom: '1px solid token(colors.gray.500)',
      })}
    >
      <CheckBox checked={cartSelection.has(id)} onClick={handleClickCheckbox} />
      <Image src={imageUrl} size="sm" />
      <div>{name}</div>
      <div className={vstack({ marginLeft: 'auto', alignItems: 'flex-end' })}>
        <IconButton
          source={IconTrash}
          size={24}
          color="gray.500"
          onClick={handleClickDeleteCartProductButton}
        />
        <Counter
          min={1}
          max={20}
          value={quantity}
          onIncrement={handleClickIncreaseButton}
          onDecrement={handleClickDecreaseButton}
        />
        <span>{(price * quantity).toLocaleString()}원</span>
      </div>
    </li>
  )
}
