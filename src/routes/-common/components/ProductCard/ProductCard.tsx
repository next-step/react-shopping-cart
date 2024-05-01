import { Link } from '@tanstack/react-router'

import type { ProductListResponse } from '@/routes/-product-list.api'

import { useCartListStore } from '../../store/cartListStore/cartListStore'

type ProductCardProps = ProductListResponse['list'][number]

export const ProductCard = (props: ProductCardProps) => {
  const cartListStore = useCartListStore()

  return (
    <Link to={`/products/$id`} params={{ id: String(props.id) }}>
      <img src={props.imageUrl} alt={props.name} style={{ width: '100%' }} />

      <div className="flex justify-between p-5">
        <div className="product-info">
          <span className="product-info__name">{props.name}</span>
          <span className="product-info__price">{props.price.toLocaleString()}</span>
        </div>

        <button
          className="pointer"
          onClick={(e) => {
            e.preventDefault()

            cartListStore.actions.saveProduct(props.id)
          }}
          type="button"
        >
          <img src={'/src/assets/svgs/cart.svg'} alt="장바구니" />
        </button>
      </div>
    </Link>
  )
}
