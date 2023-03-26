import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { FRAME_PADDING, MAX_WIDTH } from '../../constant/style';
import mediaQuery from '../../utils/style/mediaQuery';

interface SectionType {
  children: ReactNode;
}

const S = {
  Section: styled.div(
    mediaQuery({
      maxWidth: MAX_WIDTH.DESKTOP,
      margin: '0 auto',
      padding: [
        `0 ${FRAME_PADDING.MOBILE}px`,
        `0 ${FRAME_PADDING.TABLET}px`,
        `0 ${FRAME_PADDING.DESKTOP}px`,
      ],
    })
  ),
};
const Section = ({ children }: SectionType) => {
  return <S.Section>{children}</S.Section>;
};

export default Section;
