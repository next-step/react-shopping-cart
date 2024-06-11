import { HTMLAttributes } from "react";
import { ReactNode } from "@tanstack/react-router";

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CardFooter = ({ children, ...props }: CardFooterProps) => {
  return <div {...props}>{children}</div>;
};

export default CardFooter;
