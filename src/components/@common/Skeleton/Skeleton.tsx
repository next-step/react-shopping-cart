import * as Styled from './Skeleton.styles';
import type { SkeletonProps } from './Skeleton.types';

const Skeleton = ({ ...args }: SkeletonProps) => {
  return <Styled.Wrapper {...args} />;
};

export default Skeleton;
