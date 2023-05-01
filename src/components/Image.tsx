import { Img } from 'types/common';

interface ImageProps {
  id: number;
  img: Img;
}

const Image = ({ id, img }: ImageProps) => {
  const { src, alt } = img;

  return (
    <img
      data-id={id}
      src={src}
      alt={alt}
      width={'100%'}
      height={'100%'}
      loading="lazy"
    ></img>
  );
};

export default Image;
