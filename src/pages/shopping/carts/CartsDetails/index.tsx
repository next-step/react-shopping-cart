import Button from 'components/Button';
import FlexContainer from 'components/FlexContainer';
import HorizontalBar from 'components/HorizontalBar';
import PageContainer from 'components/PageContainer';
import Title from 'components/Title';
import Item from 'pages/shopping/components/Item';
import PageTitle from 'pages/shopping/components/PageTitle';
import { useShoppingState } from 'pages/shopping/modules/ShoppingContext';
import { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { CartItem } from 'types/cart';
import Checkout from '../Checkout';

const CartsDetails = () => {
  const { colors } = useContext(ThemeContext);
  const { selectedCartsItems } = useShoppingState();
  const navigate = useNavigate();
  const total =
    selectedCartsItems?.reduce((sum, item) => sum + item.product.price, 0) || 0;

  const handleOrderBtnClick = () => navigate(`/orders/list`);

  return (
    <PageContainer>
      <FlexContainer direction="column" justifyContent="center">
        <PageTitle
          titleColor={colors.purple}
          horizontalBarColor={colors.purple}
        >
          주문/결제
        </PageTitle>

        <FlexContainer direction="column" margin="10px 0">
          <FlexContainer margin="20px 0">
            <Title fontSize="20px">
              주문 상품({selectedCartsItems?.length}건)
            </Title>
          </FlexContainer>
          <FlexContainer flex="0 1 65%" gap="10px">
            <FlexContainer direction="column" flex="0 1 65%">
              <HorizontalBar color={colors.purple} />
              <FlexContainer direction="column" margin="10px 0" gap="10px">
                {selectedCartsItems?.map(
                  ({ id, product }: { id: number; product: CartItem }) => (
                    <Fragment key={id}>
                      <Item product={product}>
                        <FlexContainer direction="column" gap={'20px'}>
                          <Title fontSize="17px">{product.name}</Title>

                          <Title fontSize="15px">
                            수량: {product.quantity}
                          </Title>
                        </FlexContainer>
                      </Item>
                      <HorizontalBar color={colors.purple} />
                    </Fragment>
                  )
                )}
              </FlexContainer>
            </FlexContainer>

            <Checkout total={total}>
              <Button
                backgroundColor={colors.purple}
                color={colors.white}
                onClick={handleOrderBtnClick}
              >
                {total}원 결제하기
              </Button>
            </Checkout>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </PageContainer>
  );
};

export default CartsDetails;
