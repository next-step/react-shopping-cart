import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { IProductTypes } from '../../../@interface';
import { insertCarts } from '../../../api/cart';
import useRoute from '../../hooks/useRoute';

const ActivedImg = styled.img`
  cursor: pointer;
`;

const ProductBox = ({ id, imageUrl, name, price }: IProductTypes) => {
  const { movePage } = useRoute();

  const handleCartClick: MouseEventHandler = (evt) => {
    const { target } = evt;
    if (!(target instanceof HTMLElement)) return;
    if (!id) return;
    insertCarts({ id: Number(id), imageUrl, name, price }).then((res) => {
      alert(res.message);
    });
  };
  const handleBoxDbClick: MouseEventHandler = (evt) => movePage(`/product/${id}`);

  return (
    <div>
      <img src={imageUrl} alt={name} className="w-280 h-280" onDoubleClick={handleBoxDbClick} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price}원</span>
        </div>
        <ActivedImg src="assets/svgs/cart.svg" alt="장바구니" onClick={handleCartClick} />
      </div>
    </div>
  );
};

export default ProductBox;
