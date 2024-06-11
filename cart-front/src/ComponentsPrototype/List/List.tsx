import { ReactNode, OlHTMLAttributes } from "react";

interface ListProps extends OlHTMLAttributes<HTMLOListElement> {
  children: ReactNode;
}

const List = ({ children, ...props }: ListProps) => {
  return <ol {...props}>{children}</ol>;
};

export default List;
