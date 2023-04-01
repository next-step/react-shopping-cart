import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { Header } from 'components';

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100vh;
`;
const Main = styled.main`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
`;
