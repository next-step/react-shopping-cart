import type { DividerProps } from './Divider.types';
import * as Styled from './Divider.styles';

const Divider = ({ color, ...args }: DividerProps) => {
  return <Styled.HR color={color} {...args} />;
};

export default Divider;
