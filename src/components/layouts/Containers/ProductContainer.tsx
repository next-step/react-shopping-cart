import { PropsWithChildren } from 'react'

const ProductContainer = ({ children }: PropsWithChildren) => {
  return <section className="product-container">{children}</section>
}

export default ProductContainer
