import PageContainer from 'components/PageContainer';
import { PRODUCTS } from 'constants/products';
import useAxios from 'hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import { Product } from 'types/products';
import VerticalProductCard from '../../components/VerticalProductCard';
import * as StyledProductsList from './ProductsList.styled';

const ProductsList = () => {
  const navigate = useNavigate();

  const { isLoading, data } = useAxios<Product[]>({ url: `/${PRODUCTS}` });

  const handleProductCardClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    navigate(`/details/${e.target.dataset.id}`);
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
    </PageContainer>
  );
};

export default ProductsList;
