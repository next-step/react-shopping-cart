import { Button, Card, DivideLine, Flex } from '../../atomes';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { IProduct } from '../../../types/shoppingCart';
import { priceFormat } from '../../../utils';

interface IProductDetail {
  product: IProduct;
}

export default function ProductDetail({ product }: IProductDetail) {
  const navigate = useNavigate();
  const moveCartPage = useCallback(() => {
    navigate('/cart');
  }, []);

  return (
    <div className="product-detail-container">
      <Flex type="flex-col-center">
        <Card
          imageSrc={product.imageUrl}
          imageAlt={product.name}
          imageTitle={product.name}
        >
          <Card.Image/>
          <DivideLine className="mt-20 mb-20"/>
          <Flex type="justify-between items-center">
            <span>금액</span>
            <span className="product-detail-info__price">{priceFormat(product.price)}</span>
          </Flex>
        </Card>
        <Button text="장바구니" color="gray" onClick={moveCartPage}/>
      </Flex>
    </div>
  );
}
