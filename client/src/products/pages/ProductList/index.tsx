import * as S from './styles'

import { FlexBox, ProductItem, FlexItem } from '../../components/common'
import { ReactComponent as ShoppingBack } from '../../../assets/shoppingCart.svg'
import mockData from '../../../data/db.json'

const ProductList = () => {
  return (
    <S.sectionContainer>
      <FlexBox wrap='wrap' alienItems='center'>
        {mockData.products.map((data) => (
          <FlexItem key={data.id} flexBasis={4}>
            <ProductItem
              src={data.imageUrl}
              alt={data.name}
              textValue1={data.name}
              textValue2={`${data.price}원`}
              buttonValue={<ShoppingBack />}
            />
          </FlexItem>
        ))}
      </FlexBox>
    </S.sectionContainer>
  )
}

export default ProductList
