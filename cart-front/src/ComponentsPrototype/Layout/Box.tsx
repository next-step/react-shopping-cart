import { HTMLAttributes } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {}

const Box = ({ children, ...props }: BoxProps) => {
  return <div {...props}>{children}</div>;
};

export default Box;
