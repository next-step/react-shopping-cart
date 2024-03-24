import { useEffect } from 'react'

const ProductList = () => {
  const FetchProductList = async () => {
    const response = await fetch('/products')
    const jsonData = await response.json()
    console.log(jsonData)
  }
  useEffect(() => {
    FetchProductList()
  }, [])

  return <div>listttt</div>
}

export default ProductList
