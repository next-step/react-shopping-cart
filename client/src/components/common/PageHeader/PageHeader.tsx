import { PropsWithChildren } from 'react';
import * as Styled from './PageHeader.styles';
import type { PageHeaderProps } from './PageHeader.types';

const PageHeader = ({ children }: PropsWithChildren<PageHeaderProps>) => {
  return (
    <Styled.Layout>
      <Styled.Title>{children}</Styled.Title>
      <Styled.Horizontal />
    </Styled.Layout>
  );
};
export default PageHeader;
