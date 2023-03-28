import styled from '@emotion/styled';
import { Box } from '../Box';

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.cyan05};
  width: 100%;
  height: 80px;
  padding: 20px;
  box-sizing: border-box;

  svg {
    margin: 0 10px;
  }
`;

export const HeaderWrapper = styled(Box)`
  width: 90%;
  margin: 0 auto;
`;
