import { Img, Size } from 'types/common';

interface ImageProps {
  img: Img;
  size: Size;
}

const Image = ({ img, size }: ImageProps) => {
  const { src, alt } = img;
  const { width, height } = size;

  return (
    <img src={src} alt={alt} width={width} height={height} loading="lazy"></img>
  );
};

export default Image;
