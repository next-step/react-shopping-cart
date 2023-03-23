import FlexBox from '../../common/FlexBox'
import Img from '../../common/Img'
import Text from '../../common/Text'
import Button from '../../common/Button'

interface ProductItemProps {
  src: string
  alt: string
  textValue1: string | number
  textValue2: string | number
  buttonValue: string | React.ReactNode
  buttonEvent: () => void
}

const ProductItem = ({ src, alt, textValue1, textValue2, buttonValue, buttonEvent }: ProductItemProps) => {
  return (
    <FlexBox direction='column' alienItems='center'>
      <Img src={src} size='small' alt={alt} />
      <FlexBox>
        <FlexBox direction='column'>
          <Text fontSize='small'>{textValue1}</Text>
          <Text fontSize='medium'>{textValue2}</Text>
        </FlexBox>
        <Button onClick={buttonEvent} size='auto'>
          {buttonValue}
        </Button>
      </FlexBox>
    </FlexBox>
  )
}

export default ProductItem
