import facepaint from 'facepaint';
import { CSSObject } from '@emotion/styled';
import { MAX_WIDTH } from '../../constant/style';

const breakpoints = [MAX_WIDTH.MOBILE, MAX_WIDTH.TABLET, MAX_WIDTH.DESKTOP];

// media query
const mq = (cssObject: CSSObject) => {
  const facePaintFn = facepaint(
    breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
  );
  return facePaintFn(cssObject);
};

export default mq;
