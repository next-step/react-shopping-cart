import { Button, Card, DivideLine, Flex } from '../../atomes';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { IProduct } from '../../../types/shoppingCart';
import { priceFormat } from '../../../utils';
import { Modal } from '../../molecules';

interface IProductDetail {
  product: IProduct;
  onClickCart: () => void;
}

export default function ProductDetail({ product, onClickCart }: IProductDetail) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickButton = useCallback(() => {
    console.log('handl;eclock');
    onClickCart();
    setOpen(true);
  }, []);

  const handleModalClick = useCallback((status: boolean) => {
    if (!status) {
      setOpen(false);
      return;
    }

    navigate('/cart');
  }, []);

  return (
    <div className="product-detail-container">
      <Modal open={open} text={'상품이 장바구니에 담겼습니다.\n 장바구니로 이동하시겠습니까?'} onClick={handleModalClick}/>
      <Flex className="flex-col-center">
        <Card
          imageSrc={product.imageUrl}
          imageAlt={product.name}
          imageTitle={product.name}
        >
          <Card.Image/>
          <DivideLine className="mt-20 mb-20"/>
          <Flex className="justify-between items-center">
            <span>금액</span>
            <span className="product-detail-info__price">{priceFormat(product.price)}</span>
          </Flex>
        </Card>
        <div className="mt-20"></div>
        <Button text="장바구니" color="gray" onClick={handleClickButton}/>
      </Flex>
    </div>
  );
}
