import React, { useEffect, useState } from 'react'
import Product, { ProductType } from '../components/Product/Product'

function Products() {
  const [products, setProducts] = useState<ProductType[] | []>([])
  useEffect(() => {
    fetch('/api/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products)
      })
  }, [])

  if (!products.length) return <>nothing</>
  return (
    <div className='container mx-auto my-6'>
      <ul className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
