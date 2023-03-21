import styled from 'styled-components'
import colors from '../../../../styles/constants/colors'

export const Button = styled.button<{
  size: string
  color: string
  backgroundColor: string
  fontSize: string
  fontWeight: string
}>`
  width: ${(props) => (props.size === 'rectangle' ? '600px' : 'auto')};
  height: ${(props) => (props.size === 'rectangle' ? '100px' : 'auto')};
  color: ${(props) => (props.color === 'black' && colors.BLACK) || (props.color === 'white' && colors.WHITE)};
  background-color: ${(props) => (props.backgroundColor === 'brown' ? colors.BROWN : 'none')};
  font-size: ${(props) =>
    (props.fontSize === 'small' && '16px') ||
    (props.fontSize === 'medium' && '25px') ||
    (props.fontSize === 'large' && '32px')};
  font-weight: ${(props) => (props.fontWeight === 'bold' ? 'bold' : '400')};
`
