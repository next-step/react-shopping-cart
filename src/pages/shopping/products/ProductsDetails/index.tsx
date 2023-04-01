import PageContainer from 'components/PageContainer';
import { PRODUCTS } from 'constants/products';
import useAxios from 'hooks/useAxios';
import { useParams } from 'react-router-dom';
import { Product } from 'types/products';
import * as ProductDetail from 'pages/shopping/products/ProductsDetails/ProductDetails.styled';
import Title from 'components/Title';
import Image from 'components/Image';
import HorizontalBar from 'components/HorizontalBar';
import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import Button from 'components/Button';
import FlexContainer from 'components/FlexContainer';
import CartConfirmModal from 'pages/shopping/components/CartConfirmModal';
import useModal from 'hooks/useModal';
import Loading from 'components/Loading';

const ProductsDetails = () => {
  const { colors } = useContext(ThemeContext);

  const { id } = useParams();
  const { isOpen, handleModalToggle } = useModal();
  const { isLoading, data } = useAxios<Product>({ url: `/${PRODUCTS}/${id}` });

  const img = useMemo(() => {
    return {
      src: data?.imageUrl || '',
      alt: data?.name || '',
    };
  }, [data]);

  const handleAddCartClick = () => {
    handleModalToggle();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <ProductDetail.ProductDetailsContainer>
        <ProductDetail.ImageContainer>
          <Image img={img} id={Number(id)} />
        </ProductDetail.ImageContainer>

        <ProductDetail.SectionContainer>
          <Title fontSize="20px" fontWeight="bold">
            {data?.name}
          </Title>

          <div>
            <HorizontalBar thickness="3px" color={colors.purple} />

            <FlexContainer>
              <div>금액</div>
              <div>{data?.price}원</div>
            </FlexContainer>

            <Button
              backgroundColor={colors.purple}
              color={colors.white}
              onClick={handleAddCartClick}
            >
              장바구니
            </Button>
          </div>
        </ProductDetail.SectionContainer>
      </ProductDetail.ProductDetailsContainer>
      {isOpen && <CartConfirmModal handleModalToggle={handleModalToggle} />}
    </PageContainer>
  );
};

export default ProductsDetails;
