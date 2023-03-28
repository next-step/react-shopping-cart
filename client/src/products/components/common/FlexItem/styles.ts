import styled from 'styled-components'

export const FlexItem = styled.div<{ flexBasis: number }>`
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-basis: ${(props) => `${Math.floor(100 / props.flexBasis)}%`};
`
