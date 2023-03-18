import { Product } from '@/pages/List/components'
import { useProductList } from '@/pages/List/hooks'

const List = () => {
  const { products } = useProductList()

  return (
    <section className="product-container">
      {products?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  )
}

export default List
