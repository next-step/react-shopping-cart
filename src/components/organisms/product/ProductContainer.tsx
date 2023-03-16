import { Card, Flex } from '../../atomes';
import { IProduct } from '../../../types/shoppingCart';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

interface IProductContainer {
  products: IProduct[];
}

export default function ProductContainer({ products }: IProductContainer) {
  const navigate = useNavigate();

  const handleClickCard = useCallback((id: number) => {
    navigate(`/detail/${id}`);
  }, []);

  return (
    <section className="product-container">
      {products.map((item) => (
        <Card
          key={item.id}
          imageAlt={item.name}
          description={item.name}
          title={String(item.price)}
          imageSrc={item.imageUrl}
          icon="./assets/svgs/cart.svg"
        >
          <Flex onClick={() => handleClickCard(item.id)} type="flex-col">
            <Card.Image/>
            <Card.Info/>
          </Flex>
        </Card>
      ))}
    </section>
  );
}
