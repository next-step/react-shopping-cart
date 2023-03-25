import styled from 'styled-components';

type StyledProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
};

const Title = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLHeadingElement> & StyledProps) => {
  return <H4 {...props}>{children}</H4>;
};

export default Title;

const H4 = styled.h4<StyledProps>(
  ({ color = 'black', fontSize = '12px', fontWeight = 'normal' }) => `
  color: ${color};
  font-weight: ${fontWeight};
  font-size :${fontSize};
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`
);
