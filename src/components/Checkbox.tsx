import { twMerge } from "tailwind-merge";
import type { ComponentProps } from "react";

interface CheckboxProps extends Omit<ComponentProps<"input">, "type"> {}
const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      {...props}
      className={twMerge(
        "w-4 h-4 focus:ring-primary-400 focus:ring-2 accent-primary-600",
        className
      )}
    />
  );
};

export default Checkbox;
