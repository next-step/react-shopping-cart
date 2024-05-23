import classnames from "classnames";

import defaultImg from "../../assets/images/defaultImg.png";

const IMAGE_SIZES = {
  default: "w-280 h-280",
  small: "w-144 h-144",
  big: "w-480 h-480",
};

type ImageProps = {
  variant: "default" | "small" | "big";
  className?: string;
  src: string;
  alt: string;
};

export default function Image({ variant, className, src, alt }: ImageProps) {
  return (
    <img
      className={classnames(IMAGE_SIZES[variant], { className })}
      src={src || defaultImg}
      alt={alt}
    />
  );
}
