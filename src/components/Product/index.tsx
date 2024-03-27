import { useContext, useEffect, useState } from 'react'
import CartLogo from '../../assets/svgs/cart.svg?react'
import { CartsContext, Product, UpdateCartsContext } from '../../context/cartsContext'
import { Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getProductList } from '../../api/cart'

const ProductList = () => {
  const cartsContext = useContext(CartsContext)
  const updateCartsContext = useContext(UpdateCartsContext)

  const { data: productList } = useQuery({
    queryKey: ['productList'],
    queryFn: () => {
      return getProductList()
    },
    retry: 3,
  })

  if (!productList) return null

  return (
    <div className="product-container">
      <ul className="product_list">
        {productList.map((item) => (
          <li className="list_box" key={item.id}>
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
