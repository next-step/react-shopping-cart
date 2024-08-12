import { HTMLAttributes } from "react";
import { ReactNode } from "@tanstack/react-router";

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CardBody = ({ children, ...props }: CardBodyProps) => {
  return <div {...props}>{children}</div>;
};

export default CardBody;
