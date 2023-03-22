import styled from 'styled-components'

export const Text = styled.p<{ fontSize: string; bold: boolean }>`
  font-size: ${(props) =>
    (props.fontSize === 'small' && '18px') ||
    (props.fontSize === 'medium' && '24px') ||
    (props.fontSize === 'large' && '36px')};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
`
