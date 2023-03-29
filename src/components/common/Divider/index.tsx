import { PropsWithChildren } from 'react';

type Props = {
  type?: keyof typeof DividerType;
};

const Divider = ({ type }: PropsWithChildren<Props>) => {
  const classType = type ? DividerType[type] : 'divide-line';
  return <hr className={`${classType} mt-10`} />;
};

export default Divider;

export const DividerType = {
  gray: 'divide-line-gray',
  thin: 'divide-line-thin',
};
