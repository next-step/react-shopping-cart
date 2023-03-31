import { Typography, Box, Button } from 'components/@common';

import * as Styled from './Header.styles';
import { ReactComponent as CartIcon } from 'assets/CartIcon.svg';
import { ROUTES } from 'constants/routes';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Styled.HeaderWrapper display="flex" justifyContent="space-between">
        <Button href={ROUTES.PRODUCT_LIST} variant="plain">
          <Box
            display="flex"
            alignItems="center"
            className="h-full select-none"
          >
            <CartIcon width={45} height={40} color="white" />
            <Typography variant="h1" color="white">
              NEXTSTEP
            </Typography>
          </Box>
        </Button>

        <Box display="flex" alignItems="center" gap="20">
          <Typography variant="h5" color="white">
            <Link to={ROUTES.CART}>장바구니</Link>
          </Typography>
          <Typography variant="h5" color="white">
            <Link to={ROUTES.ORDER_LIST}>주문목록</Link>
          </Typography>
        </Box>
      </Styled.HeaderWrapper>
    </Styled.Wrapper>
  );
};

export default Header;
