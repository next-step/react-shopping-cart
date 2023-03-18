import { Button, Card, DivideLine, Flex } from '../../atomes';
import { useCallback } from 'react';
import { IProduct } from '../../../types/shoppingCart';
import { priceFormat } from '../../../utils';
import { Modal } from '../../molecules';
import { useAddProductToCart } from '../../../hooks';
import { MODAL } from '../../../constants';

interface IProductDetail {
  product: IProduct;
  onClickCart: () => void;
}

export default function ProductDetail({ product, onClickCart }: IProductDetail) {
  const { openModal, setOpenModal, handleClickModal } = useAddProductToCart();

  const handleClickButton = useCallback(() => {
    onClickCart();
    setOpenModal(true);
  }, []);

  return (
    <div className="product-detail-container">
      <Modal open={openModal} text={MODAL.ADD_CART} onClick={handleClickModal}/>
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
