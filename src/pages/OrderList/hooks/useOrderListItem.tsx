import { useNavigate } from 'react-router-dom'

import { CheckModal } from '@/components'
import { API } from '@/config'
import { useModal, useMutation } from '@/hooks'
import { Order } from '@/types'
interface OrderListItemProps {
  orderItem: Order
}

const useOrderListItem = ({ orderItem }: OrderListItemProps) => {
  const navigate = useNavigate()
  const { openModal, closeModal } = useModal()
  const createCartMutation = useMutation(API.CARTS, 'POST')

  const handleConfirmButtonClick = async () => {
    await createCartMutation.mutate({
      cart: {
        id: orderItem.id,
        name: orderItem.name,
        price: orderItem.price,
        imageUrl: orderItem.imageUrl,
      },
    })

    closeModal({ element: <CheckModal /> })
    navigate('/cart')
  }

  const openCheckCartNavigationModal = () => {
    openModal({
      element: <CheckModal text="장바구니 목록을 확인하시겠어요?" onConfirmButtonClick={handleConfirmButtonClick} />,
    })
  }
  return { openCheckCartNavigationModal }
}

export default useOrderListItem
