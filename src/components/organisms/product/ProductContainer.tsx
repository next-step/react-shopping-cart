import { Card, Flex } from '../../atomes';
import { IProduct } from '../../../types/shoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { priceFormat } from '../../../utils';
import { useCallback, useState } from 'react';
import { Modal } from '../../molecules';
import MODAL from '../../../constants/modal';

interface IProductContainer {
  products: IProduct[];
  onClickCart: (item: IProduct) => void;
}

export default function ProductContainer({ products, onClickCart }: IProductContainer) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickIcon = useCallback((item: IProduct) => {
    onClickCart(item);
    setOpen(true);
  }, []);

  const handleClickModal = useCallback((success: boolean) => {
    if (!success) {
      setOpen(false);
      return;
    }

    navigate('/cart');
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
      <Modal open={open} text={MODAL.ADD_CART} onClick={handleClickModal}/>
    </section>
  );
}
