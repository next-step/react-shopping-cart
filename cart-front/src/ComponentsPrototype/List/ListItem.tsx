import { ReactNode, LiHTMLAttributes } from "react";

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

const ListItem = ({ children, ...props }: ListItemProps) => {
  return <li {...props}>{children}</li>;
};

export default ListItem;
