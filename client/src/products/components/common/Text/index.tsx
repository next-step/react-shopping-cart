import * as S from './styles'

interface TextProps {
  children: string | number
  fontSize: 'small' | 'medium' | 'large'
  bold?: boolean
}

const Text = ({ children, fontSize, bold = false }: TextProps) => {
  return (
    <S.Text bold={bold} fontSize={fontSize}>
      {children}
    </S.Text>
  )
}

export default Text
