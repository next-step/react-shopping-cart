// import { Payssion, usePayssion } from 'payssion'

import { Pagination } from '@/components/layouts'
import { Product } from '@/pages/ProductList/components'
import { useProductList } from '@/pages/ProductList/hooks'
const ProductList = () => {
  const { productListPayload, pageArray, changePage } = useProductList()
  // const { initiatePayment, isOpen } = usePayssion()

  return (
    <>
      <section className="product-container">
        {productListPayload?.productList?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
      {/* {isOpen && <Payssion />} */}
      <section className="pagination-container">
        <Pagination pages={pageArray} changePage={changePage} />
      </section>
      {/* <button onClick={() => initiatePayment(10000)}>gkgk</button> */}
    </>
  )
}

export default ProductList
