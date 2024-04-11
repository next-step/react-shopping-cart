import { HTMLAttributes, PropsWithChildren } from "react";
import classnames from "classnames";

type BaseFlexType = HTMLAttributes<HTMLDivElement>;

type FlexProps = PropsWithChildren<BaseFlexType>;

const Flex = ({ className, children }: FlexProps) => {
  return <div className={classnames("flex", className)}>{children}</div>;
};

export default Flex;
