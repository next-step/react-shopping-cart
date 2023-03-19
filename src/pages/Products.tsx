import React, { useEffect, useState } from 'react'
import Product, { ProductType } from '../components/Product/Product'
import { useApiClient } from '../context/ApiClientContext'

function Products() {
  const { productHttpClient } = useApiClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [products, setProducts] = useState<ProductType[] | []>([])
  useEffect(() => {
    setLoading(true)
    setError(null)
    productHttpClient
      ?.getProducts()
      .then((products) => {
        setProducts(products)
      })
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productHttpClient])

  return (
    <div className='container mx-auto my-6'>
      {products?.length && (
        <ul className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {products?.map((product) => (
            <li key={product.id}>
              <Product product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Products
