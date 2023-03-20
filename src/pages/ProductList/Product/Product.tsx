import React from 'react';

import { ProductModel } from '@/models';
import { CartIcon } from '@/components/Icons';
import { formatToCurrencyNumber } from '@/utils';

import { StyledProduct, StyledProductBottom, StyledCardButton } from './Product.styled';

interface ProductProps {
  product: ProductModel;
}

export function Product({ product }: ProductProps) {
  return (
    <StyledProduct>
      <img src={product.imageUrl} alt="PET보틀-정사각(420ml)" />
      <StyledProductBottom>
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <ProductPrice price={product.price} />
        </div>
        <StyledCardButton>
          <CartIcon />
        </StyledCardButton>
      </StyledProductBottom>
    </StyledProduct>
  );
}

interface ProductPriceProps {
  price: number;
}

function ProductPrice({ price }: ProductPriceProps) {
  return <span className="product-info__price">{`${formatToCurrencyNumber(price, 3, ',')} 원`}</span>;
}
