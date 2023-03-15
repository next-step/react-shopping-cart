import React, { useEffect, useState } from 'react';
import { fetchProductList, ProductType } from '../../api/product';
import Section from '../../layout/Section';
import styled from '@emotion/styled';
import mq from '../../utils/style/mq';

const S = {
  Container: styled.div(
    mq({
      display: 'grid',
      gridTemplateColumns: [
        'repeat(1, minmax(0, 1fr))',
        'repeat(2, minmax(0, 1fr))',
        'repeat(4, minmax(0, 1fr))',
      ],
      gridColumnGap: ['0', '20px', '40px'],
      gridRowGap: ['20px', '20px', '30px'],
    })
  ),
};
const SectionProductList = () => {
  const [productList, setProductList] = useState<ProductType[] | null>(null);
  const fetchProduct = async () => {
    const list = await fetchProductList();
    if (list === null) return;
    setProductList(list);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Section>
      <S.Container>
        {productList?.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="flex justify-between w-280 p-5">
              <div className="product-info">
                <span className="product-info__name">{item.name}</span>
                <span className="product-info__price">{item.price}</span>
              </div>
              <img src="assets/svgs/cart.svg" alt="장바구니" />
            </div>
          </div>
        ))}
      </S.Container>
    </Section>
  );
};

export default SectionProductList;
