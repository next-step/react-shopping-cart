import { ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

function Image({ ...props }: ImageProps) {
  return <img className="object-cover w-full h-full" {...props} loading="lazy" />;
}

export default Image;
