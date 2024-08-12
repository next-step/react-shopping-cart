import { HTMLAttributes } from "react";
import { ReactNode } from "@tanstack/react-router";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, ...props }: CardProps) => {
  return <div {...props}>{children}</div>;
};

export default Card;
