import { ProductContainer } from '@/components'
import { Product } from '@/pages/List/components'
import { useProductList } from '@/pages/List/hooks'

const List = () => {
  const { products } = useProductList()

  return (
    <ProductContainer>
      {products?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </ProductContainer>
  )
}

export default List
