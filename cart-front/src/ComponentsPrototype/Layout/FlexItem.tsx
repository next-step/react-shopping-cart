import { HTMLAttributes } from "react";

interface FlexItemProps extends HTMLAttributes<HTMLDivElement> {}

const FlexItem = ({ children, ...props }: FlexItemProps) => {
  return <div {...props}>{children}</div>;
};

export default FlexItem;
