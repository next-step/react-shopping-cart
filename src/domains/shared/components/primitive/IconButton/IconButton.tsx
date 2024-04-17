import { ButtonHTMLAttributes } from "react";
import { IconButtonStyle } from "./IconButton.css";

interface IconButton
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export default function IconButton({
  width,
  height,
  src,
  alt,
  ...rest
}: IconButton) {
  return (
    <button className={`${IconButtonStyle()} ${rest.className}`} {...rest}>
      <img width={width} height={height} src={src} alt={alt} />
    </button>
  );
}
