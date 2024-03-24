import { useContext, useEffect, useState } from 'react'
import CartLogo from '../../assets/svgs/cart.svg?react'
import { CartsContext, Product, UpdateCartsContext } from '../../context/cartsContext'
import { Link } from '@tanstack/react-router'

const ProductList = () => {
  const [productList, setProductList] = useState<Array<Product>>([])

  const cartsContext = useContext(CartsContext)
  const updateCartsContext = useContext(UpdateCartsContext)

  const FetchProductList = async () => {
    const response = await fetch('/products')
    const jsonData = await response.json()

    setProductList(jsonData)
  }
  useEffect(() => {
    FetchProductList()
  }, [])

  return (
    <div className="product-container">
      <ul className="product_list">
        {productList &&
          productList.map((item, _) => (
            <li className="list_box" key={item.id} onClick={() => console.log()}>
              <Link to={`/list/$id`} params={{ id: String(item.id) }}>
                <div className="image_box">
                  <img src={item.imageUrl} alt="product image " />
                </div>
                <div className="item_info">
                  <div className="text_box">
                    <p className="item_name">{item.name}</p>
                    <p className="item_price">{item.price}원</p>
                  </div>
                  <button
                    className="add_cart"
                    onClick={() => {
                      console.log(111111)
                      updateCartsContext({ ...cartsContext, carts: [...cartsContext.carts, item] })
                    }}
                  >
                    <CartLogo />
                  </button>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ProductList
