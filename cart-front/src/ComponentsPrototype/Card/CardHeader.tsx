import { HTMLAttributes } from "react";
import { ReactNode } from "@tanstack/react-router";

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  return <div {...props}>{children}</div>;
};

export default CardHeader;
