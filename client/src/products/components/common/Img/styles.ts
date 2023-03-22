import styled from 'styled-components'

export const Img = styled.img<{ size: string }>`
  width: ${(props) =>
    (props.size === 'small' && '150px') || (props.size === 'medium' && '250px') || (props.size === 'large' && '500px')};
  height: ${(props) =>
    (props.size === 'small' && '150px') || (props.size === 'medium' && '250px') || (props.size === 'large' && '500px')};
`
