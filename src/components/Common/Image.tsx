import { ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

function Image({ loading = 'lazy', ...props }: ImageProps) {
  return <img className="object-cover w-full h-full" loading={loading} {...props} />;
}

export default Image;
