import { HTMLAttributes } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {}

const Flex = ({ children, ...props }: FlexProps) => {
  return <div {...props}>{children}</div>;
};

export default Flex;
