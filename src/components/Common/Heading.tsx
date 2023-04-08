import { cls } from '@/utils';
import { PropsWithChildren, ReactNode, createElement } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface HeadingProps {
  variant: Variant;
}

const variantStyleMap: Record<Variant, string> = {
  h1: `text-2xl`,
  h2: `text-xl`,
  h3: `text-lg`,
  h4: `text-base`,
  h5: `text-sm`,
  h6: `text-xm`,
};

interface CreateHeadingTag {
  variant: Variant;
  className: string;
  children: ReactNode;
}
const createHeadingTag = ({ variant, className, children }: CreateHeadingTag) => {
  const element = createElement(variant, { className }, children);

  return element;
};

function Heading({ variant, children }: PropsWithChildren<HeadingProps>) {
  const fontSize = variantStyleMap[variant];
  const className = cls('block font-bold', fontSize);
  const Tag = createHeadingTag({
    variant,
    className,
    children,
  });

  return Tag;
}

export default Heading;
