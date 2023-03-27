import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { FRAME_PADDING, MAX_WIDTH } from '../../constant';
import { mediaQuery } from '../../utils';

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
const Section = ({ children }: PropsWithChildren) => {
  return <S.Section>{children}</S.Section>;
};

export default Section;
