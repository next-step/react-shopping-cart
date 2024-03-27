import { Link } from "react-router-dom";
import { twJoin, twMerge } from "tailwind-merge";
import type { LinkProps } from "react-router-dom";
import type { ReactNode } from "react";

interface LinkButtonProps extends LinkProps {
  children?: ReactNode;
  type?: "primary" | "secondary" | "default";
  block?: boolean;
}
const LinkButton = ({
  children,
  className,
  type = "default",
  block = false,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      {...props}
      className={twMerge(
        "text-white rounded-md px-4 py-2 transition-colors hover:brightness-105 disabled:opacity-40 flex justify-center items-center",
        twJoin(
          type === "primary" && "bg-primary-400 text-white",
          type === "secondary" && "bg-secondary-400 text-white",
          type === "default" &&
            "bg-white border text-gray-500 hover:border-primary-400 hover:text-primary-400",
          block && "w-full"
        ),
        className
      )}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
