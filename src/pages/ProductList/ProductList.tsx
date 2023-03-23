import { Product } from '@/pages/ProductList/components'
import { useProductList } from '@/pages/ProductList/hooks'

const ProductList = () => {
  const { products } = useProductList()

  return (
    <section className="product-container">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ProductList
