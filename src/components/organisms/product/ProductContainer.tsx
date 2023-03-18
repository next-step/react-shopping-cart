import { Card, Flex } from '../../atomes';
import { IProduct } from '../../../types/shoppingCart';
import { Link } from 'react-router-dom';
import { priceFormat } from '../../../utils';
import { Modal } from '../../molecules';
import { MODAL } from '../../../constants';
import { useAddProductToCart } from '../../../hooks';
import { useCallback } from 'react';

interface IProductContainer {
  products: IProduct[];
}

export default function ProductContainer({ products }: IProductContainer) {
  const { modal, addProductWithModal, handleClickModal } = useAddProductToCart();
  const handleClickIcon = useCallback((product: IProduct) => {
    addProductWithModal(product);
  }, []);

  return (
    <section className="product-container">
      {products.map((item) => (
        <Card
          key={item.id}
          imageAlt={item.name}
          description={item.name}
          title={priceFormat(item.price)}
          imageSrc={item.imageUrl}
          onClickIcon={() => handleClickIcon(item)}
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
      <Modal open={modal} text={MODAL.ADD_CART} onClick={handleClickModal}/>
    </section>
  );
}
