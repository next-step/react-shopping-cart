import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const PageContainer = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default PageContainer;

const Container = styled.div`
  ${(props) => props.theme.common.pageContainer}
`;
