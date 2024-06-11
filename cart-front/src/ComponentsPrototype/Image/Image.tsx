import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Image = ({ ...props }: ImageProps) => {
  return (
    <>
      <img {...props} />
    </>
  );
};

export default Image;
