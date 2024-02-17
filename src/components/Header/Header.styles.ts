import styled from '@emotion/styled';
import { Box } from '../@common/Box';

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.cyan05};
  width: 100%;
  height: 80px;
  box-sizing: border-box;

  svg {
    margin-right: 8px;
  }
`;

export const HeaderWrapper = styled(Box)`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;
