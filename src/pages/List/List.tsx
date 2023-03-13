import { Product } from '@/pages/List/components'

import { products } from './mock'

const List = () => {
  return (
    <>
      <section className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </>
  )
}

export default List
