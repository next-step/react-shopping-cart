import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductType } from '../components/Product/Product'
import { Button } from '../components/ui/Button'
import { useProductApi } from '../context/productApiContext'
import { convertCurrencyFormet } from '../utils/formatter'
import NotFound from './NotFound'

function ProductDetail() {
  const { productId } = useParams()
  const { productHttpClient } = useProductApi()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [product, setProduct] = useState<ProductType | null>(null)
  useEffect(() => {
    console.log(productId)
    setLoading(true)
    setError(null)
    productHttpClient
      ?.getProduct(productId ?? '')
      .then((product) => {
        setProduct(product)
      })
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productHttpClient, productId])

  if (loading) return <div>loading...</div>
  if (!product) return <NotFound />

  const onNavigateCartPage = () => {
    // fetch('/cart', {
    //   method: 'POST',
    //   body: {...product}
    // })
    navigate('/cart')
  }

  return (
    <main className='container mx-auto'>
      <section className='flex flex-col items-center my-12'>
        <article className='w-full lg:w-[40rem]'>
          <img
            src={product.imageUrl}
            alt={product.name}
            className='max-h-max'
          />
          <div className='mt-6 my-12'>
            <h3 className='text-3xl text-bold border-b-2 border-gray-400 border-solid pb-4 mb-4'>
              {product.name}
            </h3>
            <p className='flex justify-between text-xl'>
              <span>가격</span>
              <span>{convertCurrencyFormet(product.price)}원</span>
            </p>
          </div>
          <Button
            variant='fill'
            color='primary'
            size='xl'
            width='100%'
            textArea='장바구니'
            onClick={onNavigateCartPage}
          />
        </article>
      </section>
    </main>
  )
}

export default ProductDetail
