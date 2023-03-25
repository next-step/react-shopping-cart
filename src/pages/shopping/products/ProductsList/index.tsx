import Button from 'components/Button';
import Modal from 'components/Modal';
import PageContainer from 'components/PageContainer';
import { PRODUCTS } from 'constants/products';
import useAxios from 'hooks/useAxios';
import useModal from 'hooks/useModal';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { Product } from 'types/products';
import VerticalProductCard from '../../components/VerticalProductCard';
import * as StyledProductsList from './ProductsList.styled';

const ProductsList = () => {
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();

  const { isOpen, handleModalToggle } = useModal();
  const { isLoading, data } = useAxios<Product[]>({ url: `/${PRODUCTS}` });

  const handleProductCardClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      handleModalToggle();
      return;
    }

    navigate(`/details/${e.target.dataset.id}`);
  };

  const handleCartClick = () => {
    navigate(`/carts/list`);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <PageContainer>
      <StyledProductsList.GridContainer onClick={handleProductCardClick}>
        {data?.map((product: Product) => (
          <VerticalProductCard key={product.id} product={product} />
        ))}
      </StyledProductsList.GridContainer>
      {isOpen && (
        <Modal handleToggleModal={handleModalToggle}>
          <StyledProductsList.ModalDescription>
            해당 상품이 장바구니에 추가되었습니다.
          </StyledProductsList.ModalDescription>
          <Button
            color={colors.white}
            backgroundColor={colors.purple}
            onClick={handleCartClick}
          >
            장바구니 바로가기
          </Button>
        </Modal>
      )}
    </PageContainer>
  );
};

export default ProductsList;
