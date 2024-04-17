import { ComponentProps } from "react";
import { buttonStyle } from "./Button.css";

interface Button extends ComponentProps<"button"> {
  appearance?: "primary" | "secondary" | "outline";
  size?: "xlg" | "lg" | "md" | "sm";
  onlyText?: boolean;
}

export default function Button(props: Button) {
  const {
    appearance = "primary",
    children,
    onlyText = false,
    size = "md",
    ...rest
  } = props;
  return (
    <button
      className={`${buttonStyle({ appearance, onlyText, size })}`}
      {...rest}
    >
      {children}
    </button>
  );
}
