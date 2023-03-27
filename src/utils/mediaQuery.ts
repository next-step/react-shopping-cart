import facepaint from 'facepaint';
import { CSSObject } from '@emotion/styled';
import { MAX_WIDTH } from '../constant';

const breakpoints = [MAX_WIDTH.MOBILE, MAX_WIDTH.TABLET, MAX_WIDTH.DESKTOP];

const mediaQuery = (cssObject: CSSObject) => {
  const facePaintFn = facepaint(
    breakpoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`)
  );
  return facePaintFn(cssObject);
};

export default mediaQuery;
