import { Card, Flex } from '../../atomes';
import { IProduct } from '../../../types/shoppingCart';
import { Link } from 'react-router-dom';
import { priceFormat } from '../../../utils';

interface IProductContainer {
  products: IProduct[];
}

export default function ProductContainer({ products }: IProductContainer) {
  return (
    <section className="product-container">
      {products.map((item) => (
        <Card
          key={item.id}
          imageAlt={item.name}
          description={item.name}
          title={priceFormat(item.price)}
          imageSrc={item.imageUrl}
          icon="./assets/svgs/cart.svg"
        >
          <Link to={`/detail/${item.id}`}>
            <Card.Image/>
          </Link>
          <Flex className="justify-between">
            <Card.Info/>
            <Card.Icon/>
          </Flex>
        </Card>
      ))}
    </section>
  );
}
