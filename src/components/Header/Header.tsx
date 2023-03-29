import { Typography, Box } from 'components/@common';

import * as Styled from './Header.styles';
import { ReactComponent as CartIcon } from 'assets/CartIcon.svg';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.HeaderWrapper display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <CartIcon width={45} height={40} color="white" />
          <Typography variant="h1" color="white">
            NEXTSTEP
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap="20">
          <Typography variant="h5" color="white">
            장바구니
          </Typography>
          <Typography variant="h5" color="white">
            주문목록
          </Typography>
        </Box>
      </Styled.HeaderWrapper>
    </Styled.Wrapper>
  );
};

export default Header;
