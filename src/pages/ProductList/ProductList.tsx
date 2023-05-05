import { Pagination } from '@/components/layouts'
import { Product } from '@/pages/ProductList/components'
import { useProductList } from '@/pages/ProductList/hooks'
const ProductList = () => {
  const { productListPayload, pageArray, changePage } = useProductList()

  return (
    <>
      <section className="product-container">
        {productListPayload?.productList?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
      <section className="pagination-container">
        <Pagination pages={pageArray} changePage={changePage} />
      </section>
    </>
  )
}

export default ProductList
