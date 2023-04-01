import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import FlexContainer from 'components/FlexContainer';
import HorizontalBar from 'components/HorizontalBar';
import Loading from 'components/Loading';
import PageContainer from 'components/PageContainer';
import Title from 'components/Title';
import { ALL, CARTS } from 'constants/carts';
import useAxios from 'hooks/useAxios';
import CartsItem from 'pages/shopping/components/CartsItem';
import PageTitle from 'pages/shopping/components/PageTitle';
import { ADD_SELECTED_CARTS_ITEMS } from 'pages/shopping/modules/ShoppingActionType';
import { useShoppingDispatch } from 'pages/shopping/modules/ShoppingContext';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { Cart, CartItem } from 'types/cart';
import Checkout from '../Checkout';

const CartsList = () => {
  const { colors } = useContext(ThemeContext);
  const dispatch = useShoppingDispatch();
  const navigate = useNavigate();
  const { isLoading, data } = useAxios<Cart[]>({ url: `/${CARTS}` });

  const [total, setTotal] = useState<number>(0);
  const [selectedAll, setSelectedAll] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] = useState<Cart[]>([]);

  useEffect(() => {
    if (data) {
      setTotal(data.reduce((sum, item) => sum + item.product.price, 0));
      setSelectedItem(data);
    }
  }, [data]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    if (id === ALL && selectedAll) {
      setSelectedAll(false);
      setSelectedItem([]);
      setTotal(0);
      return;
    } else if (id === ALL && data) {
      setSelectedAll(true);
      setSelectedItem(data as Cart[]);
      setTotal(data.reduce((sum, item) => sum + item.product.price, 0));
      return;
    }

    if (checked && data) {
      const item = data.find((item) => item.product.id === Number(id)) as Cart;
      setSelectedItem((prev) => [...prev, item as Cart]);
      setTotal((prev) => prev + item.product.price);
    } else if (data) {
      const item = data.find((item) => item.product.id === Number(id)) as Cart;
      setSelectedItem((prev) =>
        prev.filter((item) => item.product.id !== Number(id))
      );
      setTotal((prev) => prev - item.product.price);
    }
  };

  const handleCartDetailBtnClick = () => {
    dispatch({ type: ADD_SELECTED_CARTS_ITEMS, payload: selectedItem });
    navigate(`/carts/details`);
  };

  // if (true) {
  return <Loading />;
  // }

  return (
    <PageContainer>
      <FlexContainer direction="column">
        <PageTitle
          titleColor={colors.purple}
          horizontalBarColor={colors.purple}
        >
          장바구니
        </PageTitle>

        <FlexContainer direction="column">
          <FlexContainer margin="20px 0">
            <Checkbox
              id="all"
              value="선택해제"
              checked={selectedAll}
              onChange={handleCheckboxChange}
            />
            <div>
              <Button backgroundColor={colors.purple} color={colors.white}>
                상품삭제
              </Button>
            </div>
          </FlexContainer>
          <FlexContainer flex="0 1 65%" gap="10px">
            <FlexContainer direction="column" flex="0 1 65%">
              <Title fontSize="20px">든든배송 제품 ({data?.length}개)</Title>
              <HorizontalBar color={colors.purple} />
              <FlexContainer direction="column">
                {data?.map(
                  ({ id, product }: { id: number; product: CartItem }) => (
                    <Fragment key={id}>
                      <CartsItem
                        cartId={id}
                        product={product}
                        selected={selectedItem.some(
                          (item) => item.product.id === product.id
                        )}
                        handleCheckboxChange={handleCheckboxChange}
                      />
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
                onClick={handleCartDetailBtnClick}
              >
                주문하기
              </Button>
            </Checkout>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </PageContainer>
  );
};

export default CartsList;
