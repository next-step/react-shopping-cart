import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface SectionType {
  children: ReactNode;
}

const S = {
  Section: styled.section`
    max-width: 1280px;
    margin: 0 auto;
  `,
};
const Section = ({ children }: SectionType) => {
  return <S.Section>{children}</S.Section>;
};

export default Section;
