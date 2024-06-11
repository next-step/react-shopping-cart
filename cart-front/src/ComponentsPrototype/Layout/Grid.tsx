import { HTMLAttributes } from "react";

interface GridProps extends HTMLAttributes<HTMLDivElement> {}

const Grid = ({ children, ...props }: GridProps) => {
  return <div {...props}>{children}</div>;
};

export default Grid;
