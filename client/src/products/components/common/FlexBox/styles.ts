import styled from 'styled-components'

export const flexBox = styled.div<{
  direction: string
  wrap: string
  justifyContent: string
  alienItems: string
}>`
  max-width: 1200px;
  height: 100%;
  display: inline-flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alienItems};
`
