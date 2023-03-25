import { useEffect, useState } from 'react'

import * as S from './styles'

import { FlexBox, ProductItem, FlexItem } from '../../components/common'
import { ReactComponent as ShoppingBack } from '../../../assets/shoppingCart.svg'

const ProductList = () => {
  const [productList, setProductList] = useState<ProductItem[]>([])

  useEffect(() => {
    fetch('./product-list')
      .then((res) => res.json())
      .then((data) => {
        setProductList(data)
      })
  }, [])

  return (
    <S.sectionContainer>
      <FlexBox wrap='wrap' alienItems='center'>
        {productList.map((data) => (
          <FlexItem key={data.id} flexBasis={4}>
            <ProductItem
              src={data.imageUrl}
              alt={data.name}
              textValue1={data.name}
              textValue2={`${data.price}원`}
              buttonValue={<ShoppingBack />}
              buttonEvent={() => console.log(`ID:${data.id} 장바구니 저장 `)}
            />
          </FlexItem>
        ))}
      </FlexBox>
    </S.sectionContainer>
  )
}

export default ProductList
