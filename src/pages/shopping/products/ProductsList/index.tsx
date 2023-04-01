import PageContainer from 'components/PageContainer';
import { PRODUCTS } from 'constants/products';
import useAxios from 'hooks/useAxios';
import useModal from 'hooks/useModal';
import { useNavigate } from 'react-router-dom';
import { Product } from 'types/products';
import VerticalProductCard from 'pages/shopping/components/VerticalProductCard';
import * as StyledProductsList from './ProductsList.styled';
import CartConfirmModal from 'pages/shopping/components/CartConfirmModal';
import Loading from 'components/Loading';

const ProductsList = () => {
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageContainer>
      <StyledProductsList.GridContainer onClick={handleProductCardClick}>
        {data?.map((product: Product) => (
          <VerticalProductCard key={product.id} product={product} />
        ))}
      </StyledProductsList.GridContainer>
      {isOpen && <CartConfirmModal handleModalToggle={handleModalToggle} />}
    </PageContainer>
  );
};

export default ProductsList;
