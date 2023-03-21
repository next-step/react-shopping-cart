import styled from '@emotion/styled';
import { ReactNode } from 'react';
import {
  DESKTOP_FRAME_PADDING,
  MAX_DESKTOP_WIDTH,
  MOBILE_FRAME_PADDING,
  TABLET_FRAME_PADDING,
} from '../../constant/style';
import mq from '../../utils/style/mediaQuery';

interface SectionType {
  children: ReactNode;
}

const S = {
  Section: styled.div(
    mq({
      maxWidth: MAX_DESKTOP_WIDTH,
      margin: '0 auto',
      padding: [
        `0 ${MOBILE_FRAME_PADDING}px`,
        `0 ${TABLET_FRAME_PADDING}px`,
        `0 ${DESKTOP_FRAME_PADDING}px`,
      ],
    })
  ),
};
const Section = ({ children }: SectionType) => {
  return <S.Section>{children}</S.Section>;
};

export default Section;
