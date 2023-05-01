import styled from 'styled-components';

type StyledProps = {
  color?: string;
  thickness?: string;
};

const HorizontalBar = ({ thickness, color }: StyledProps) => {
  return <Horizontal thickness={thickness} color={color} />;
};

export default HorizontalBar;

const Horizontal = styled.div<StyledProps>(
  ({ thickness = '1px', color = 'black' }) => `
    width: 100%;
    border-bottom: ${thickness} solid ${color}
  `
);
