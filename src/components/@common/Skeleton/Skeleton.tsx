import * as Styled from './Skeleton.styles';
import type { SkeletonProps } from './Skeleton.types';

const Skeleton = ({ animation = 'pulse', ...args }: SkeletonProps) => {
  return <Styled.Wrapper animation={animation} {...args} />;
};

export default Skeleton;
