import styled from '@emotion/styled';

import Box from '@/components/common/Box';

export const Header = styled.header`
  height: 60px;
  color: white;
  background-color: #29c1bc;
`;

export const BoxWrapper = styled(Box)`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    a {
      display: flex;
      align-items: flex-end;
      text-decoration: none;
      color: white;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-left: 4px;
  }
`;

export const SvgBox = styled.span`
  width: 40px;
  height: 40px;

  svg {
    width: 40px;
    height: 40px;
    path {
      fill: white;
    }
  }
`;

export const Nav = styled.nav`
  a {
    font-size: 20px;
    text-decoration: none;
    color: white;

    & + a {
      margin-left: 16px;
    }
  }
`;
