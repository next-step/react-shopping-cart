import type { PropsWithChildren, ReactNode } from 'react';
import Img from './Image';

interface AddOnComponent {
  checkboxComponent?: ReactNode;
  sideComponent?: ReactNode;
}

interface ProductRowProps {
  productName?: string;
  subText?: string;
  imgUrl?: string;
  addOnComponent?: AddOnComponent;
}

function ProductRow({ productName = '상품명', imgUrl, subText, addOnComponent }: PropsWithChildren<ProductRowProps>) {
  return (
    <div className="h-full flex justify-between">
      <div className="flex px-2 gap-4">
        <div>{addOnComponent?.checkboxComponent}</div>
        <div className="w-[144px] h-[144px]">
          <Img src={imgUrl || ''} alt={productName} />
        </div>
        <div className="flex flex-col gap-10">
          <div className="break-words whitespace-wrap max-w-[200px]">{productName}</div>
          {subText ? <div>{subText}</div> : null}
        </div>
      </div>
      <div>{addOnComponent?.sideComponent}</div>
    </div>
  );
}

export default ProductRow;
