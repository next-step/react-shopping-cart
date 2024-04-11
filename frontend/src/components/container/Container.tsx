import { HTMLAttributes, PropsWithChildren } from "react";

type BaseContainerType = HTMLAttributes<HTMLDivElement>;

type ContainerProps = PropsWithChildren<BaseContainerType>;

const Container = ({ className, children }: ContainerProps) => {
  return <div className={className}>{children}</div>;
};

export default Container;
