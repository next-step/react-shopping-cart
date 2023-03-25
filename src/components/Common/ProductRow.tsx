import type { PropsWithChildren, ReactNode } from 'react';
import Img from './Image';

interface AddOnComponent {
  checkboxComponent?: ReactNode;
  sideComponent?: ReactNode;
}

interface ProductRowProps {
  productName?: string;
  imgUrl?: string;
  addOnComponent?: AddOnComponent;
}

function ProductRow({ productName = '상품명', imgUrl, addOnComponent }: PropsWithChildren<ProductRowProps>) {
  return (
    <div className="h-[180px] py-3 border-b-2 border-gray-200">
      <div className="h-full bg-blue-200 flex justify-between">
        <div className="flex px-2">
          <div>{addOnComponent?.checkboxComponent}</div>
          <div className="w-[144px] h-[144px]">
            <Img src={imgUrl || ''} alt={productName} />
          </div>
          <div>
            <div>{productName}</div>
            <div>옵션</div>
          </div>
        </div>
        <div>{addOnComponent?.sideComponent}</div>
      </div>
    </div>
  );
}

export default ProductRow;
