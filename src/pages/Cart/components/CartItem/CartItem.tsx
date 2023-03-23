import { Product } from '@/types'

interface ItemProps {
  item: Product
}

const CartItem = ({ item }: ItemProps) => {
  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <input className="checkbox" name="checkbox" type="checkbox" checked={true} />
        <img className="w-144 h-144" src="./assets/images/product.png" alt={item.name} />
        <span className="cart-name">{item.name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img className="cart-trash-svg" src="./assets/svgs/trash.svg" alt="삭제" />
        <div className="number-input-container">
          <input type="number" className="number-input" value="1" />
          <div>
            <button className="number-input-button">▲</button>
            <button className="number-input-button">▼</button>
          </div>
        </div>
        <span className="cart-price">{`${item.price.toLocaleString()}원`}</span>
      </div>
    </div>
  )
}

export default CartItem
