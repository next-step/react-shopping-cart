import { Card } from '../../atomes';
import { IProduct } from '../../../types/shoppingCart';

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
          title={String(item.price)}
          imageSrc={item.imageUrl}
          icon="./assets/svgs/cart.svg"
        >
          <div>
            <Card.Image/>
            <Card.Info/>
          </div>
        </Card>
      ))}
    </section>
  );
}
