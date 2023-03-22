import * as S from './styles'

interface FlexBoxProps {
  children: React.ReactNode | React.ReactNode[]
  direction?: 'row' | 'column'
  wrap?: 'nowrap' | 'wrap'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alienItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
}

const FlexBox = ({
  children,
  direction = 'row',
  wrap = 'nowrap',
  justifyContent = 'flex-start',
  alienItems = 'stretch',
}: FlexBoxProps) => {
  return (
    <S.flexBox direction={direction} wrap={wrap} justifyContent={justifyContent} alienItems={alienItems}>
      {children}
    </S.flexBox>
  )
}

export default FlexBox
