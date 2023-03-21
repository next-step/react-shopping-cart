import facepaint from 'facepaint';
import { CSSObject } from '@emotion/styled';
import {
  MAX_DESKTOP_WIDTH,
  MAX_MOBILE_WIDTH,
  MAX_TABLET_WIDTH,
} from '../../constant/style';

const breakpoints = [MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH, MAX_DESKTOP_WIDTH];

// media query
const mq = (cssObject: CSSObject) => {
  const facePaintFn = facepaint(
    breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
  );
  return facePaintFn(cssObject);
};

export default mq;
