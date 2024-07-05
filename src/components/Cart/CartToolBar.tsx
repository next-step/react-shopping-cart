import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import Button from '@components/common/Button/Button';
import CheckBox from '@components/common/CheckBox/CheckBox';

interface CartToolBarProps {
  hasProducts: boolean;
  isSelectedAll: () => boolean;
  onSelectAllChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveSelectedProducts: () => void;
}

export default function CartToolBar({
  hasProducts,
  isSelectedAll,
  onSelectAllChange,
  onRemoveSelectedProducts,
}: CartToolBarProps) {
  return (
    <section className={cartToolBarSection}>
      {hasProducts && (
        <div
          className={flex({
            justifyContent: 'space-between',
            width: '278px',
            flexGrow: 1,
          })}
        >
          <CheckBox
            colorScheme='blue'
            isChecked={isSelectedAll()}
            onChange={onSelectAllChange}
          >
            {isSelectedAll() ? '선택해제' : '전체선택'}
          </CheckBox>

          <Button
            variant='ghost'
            colorScheme='gray'
            className={removeButton}
            onClick={onRemoveSelectedProducts}
          >
            상품삭제
          </Button>
        </div>
      )}
    </section>
  );
}

const cartToolBarSection = flex({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const removeButton = css({
  display: 'inline',
  padding: 'unset',
  borderRadius: 'unset',
  borderBottom: '1px solid #bbb',
  fontSize: '14px',
  color: 'gray.500',
});
