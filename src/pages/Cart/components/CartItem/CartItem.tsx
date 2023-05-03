import { DeleteModal } from '@/components/modals'
import { API } from '@/config'
import { useModal, useMutation } from '@/hooks'
import { ProductSchemaWithCheckedAndQuantityInfer } from '@/schemas'

interface ItemProps {
  item: ProductSchemaWithCheckedAndQuantityInfer
  handleQuantityChange: (id: number, quantity: number) => void
  handleCheckedChange: (id: number, checked: boolean) => void
  updateCartList: (id: number) => void
}

const CartItem = ({ item, handleQuantityChange, handleCheckedChange, updateCartList }: ItemProps) => {
  const { openModal, closeModal } = useModal()

  const cartItemDeleteMutation = useMutation(`${API.CARTS}/${item.id}`, 'DELETE')

  const deleteCartItem = async () => {
    await cartItemDeleteMutation.mutate()

    updateCartList(item.id)

    closeModal({ element: DeleteModal })
  }

  const openDeleteModal = (productName: string) => {
    openModal({
      element: <DeleteModal onDelete={deleteCartItem} text={`장바구니에서 ${productName} 제품을 삭제하시겠어요?`} />,
    })
  }

  return (
    <div className="cart-container mt-10 mb-10">
      <div className="flex gap-15">
        <input
          className="checkbox"
          name="checkbox"
          type="checkbox"
          checked={item.checked}
          onChange={() => handleCheckedChange(item.id, item.checked)}
        />
        <img className="card-image" src={item.imageUrl} alt={item.name} />
        <span className="cart-name">{item.name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img
          className="cart-trash-svg"
          src={'./assets/svgs/trash.svg'}
          alt="삭제"
          onClick={() => openDeleteModal(item.name)}
        />
        <div className="number-input-container">
          <input type="number" className="number-input" value={item.quantity} readOnly />
          <div>
            <button className="number-input-button" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
              ▲
            </button>
            <button className="number-input-button" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
              ▼
            </button>
          </div>
        </div>
        <span className="cart-price">{`${(item.price * item.quantity).toLocaleString()}원`}</span>
      </div>
    </div>
  )
}

export default CartItem
