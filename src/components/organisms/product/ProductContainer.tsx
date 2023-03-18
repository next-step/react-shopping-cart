import { Card, Flex } from '../../atomes';
import { IProduct } from '../../../types/shoppingCart';
import { Link } from 'react-router-dom';
import { priceFormat } from '../../../utils';
import { useCallback } from 'react';
import { Modal } from '../../molecules';
import { MODAL } from '../../../constants';
import { useAddProductToCart } from '../../../hooks';

interface IProductContainer {
  products: IProduct[];
  onClickCart: (item: IProduct) => void;
}

export default function ProductContainer({ products, onClickCart }: IProductContainer) {
  const { openModal, setOpenModal, handleClickModal } = useAddProductToCart();
  const handleClickIcon = useCallback((item: IProduct) => {
    onClickCart(item);
    setOpenModal(true);
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
      <Modal open={openModal} text={MODAL.ADD_CART} onClick={handleClickModal}/>
    </section>
  );
}
