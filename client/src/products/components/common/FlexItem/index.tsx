import * as S from './styles'

interface FlexItemProps {
  flexBasis: number
  children: React.ReactNode
}

const FlexItem = ({ flexBasis, children }: FlexItemProps) => {
  return <S.FlexItem flexBasis={flexBasis}>{children}</S.FlexItem>
}

export default FlexItem
