import { twJoin, twMerge } from "tailwind-merge";
import type { ComponentProps, ReactNode } from "react";

interface ButtonProps extends Omit<ComponentProps<"button">, "type"> {
  children?: ReactNode;
  type?: "primary" | "secondary" | "default";
  htmlType?: ComponentProps<"button">["type"];
  block?: boolean;
}

const Button = ({
  className,
  children,
  htmlType = "button",
  type = "default",
  block = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={htmlType}
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
    </button>
  );
};

export default Button;
