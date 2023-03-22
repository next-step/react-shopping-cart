import styled from 'styled-components'

export const flexBox = styled.div<{ direction: string; wrap: string; justifyContent: string; alienItems: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alienItems};
`
