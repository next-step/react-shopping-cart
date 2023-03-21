import * as S from './styles'

interface ButtonProps {
  size: 'auto' | 'rectangle'
  children?: string | React.ReactNode
  color?: 'black' | 'white'
  backgroundColor?: 'none' | 'brown'
  fontSize?: 'large' | 'medium' | 'small'
  fontWeight?: 'default' | 'bold'
  onClick?: () => void
}

const Button = ({
  size,
  children,
  color = 'black',
  backgroundColor = 'none',
  fontSize = 'small',
  fontWeight = 'default',
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      type='button'
      {...props}
    >
      {children}
    </S.Button>
  )
}

export default Button
