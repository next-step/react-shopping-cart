import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

interface GoToLinkProps {
  children: ReactNode;
  paramsId: string;
  onClick?: () => void;
  goto: string;
}

export const GoToLink = ({
  children,
  paramsId,
  onClick,
  goto,
}: GoToLinkProps) => {
  return (
    <Link
      to={`/${goto}/${paramsId}`}
      params={{
        ParamsId: paramsId,
      }}
      onClick={onClick}>
      {children}
    </Link>
  );
};
