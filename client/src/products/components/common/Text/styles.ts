import styled from 'styled-components'

export const Text = styled.p<{ fontSize: string; bold: boolean }>`
  margin: 5px 10px 5px 0;
  font-size: ${(props) =>
    (props.fontSize === 'small' && '16px') ||
    (props.fontSize === 'medium' && '22px') ||
    (props.fontSize === 'large' && '30px')};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
`
