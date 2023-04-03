import type { PropsWithChildren, ReactNode } from 'react';
import Image from './Image';

// interface AddOnComponent {
//   checkboxComponent?: ReactNode;
//   sideComponent?: ReactNode;
// }

interface TableRowProps {
  productName?: string;
  subText?: string;
  imgUrl?: string;
  leftAddon: ReactNode;
  rightAddon: ReactNode;
}

function TableRow({
  productName = '상품명',
  imgUrl,
  subText,
  leftAddon,
  rightAddon,
}: PropsWithChildren<TableRowProps>) {
  return (
    <div className="h-full flex justify-between">
      <div className="flex px-2 gap-4">
        <div>{leftAddon}</div>
        <div className="w-[144px] h-[144px]">
          <Image src={imgUrl || ''} alt={productName} />
        </div>
        <div className="flex flex-col gap-10">
          <div className="break-words whitespace-wrap max-w-[200px]">{productName}</div>
          {subText ? <div>{subText}</div> : null}
        </div>
      </div>
      <div>{rightAddon}</div>
    </div>
  );
}

export default TableRow;
