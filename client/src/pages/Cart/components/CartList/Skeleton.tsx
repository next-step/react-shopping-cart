import { css, cx } from '@emotion/css';

import { Button, Checkbox } from 'components';

import { colors } from 'constants/colors';

const SKELETON_COUNT = 2;

function Skeleton() {
  const skeletons = Array.from({ length: SKELETON_COUNT });

  return (
    <div className="flex">
      <section className="cart-left-section">
        <div className="flex justify-between items-center">
          <Checkbox>모두선택</Checkbox>
          <Button type="default">상품삭제</Button>
        </div>
        <h3 className="cart-title my-20">배송 상품 (총 0개)</h3>
        <hr className="divide-line-gray mt-10" />
        {skeletons.map((_, index) => (
          <div
            key={index}
            className={css`
              display: flex;
              margin: 20px 0 10px 40px;
              padding: 0 0 20px;
              &:not(:last-child) {
                border-bottom: 1px solid ${colors.gray600};
              }
            `}
          >
            <div
              className={cx(
                'skeleton-box',
                css`
                  width: 144px;
                  height: 144px;
                  margin-right: 20px;
                `
              )}
            />
            <div
              className={cx(
                'skeleton-box',
                css`
                  width: 200px;
                  height: 24px;
                `
              )}
            />
          </div>
        ))}
      </section>
      <section className="cart-right-section">
        <div className="cart-right-section__top">
          <h3 className="cart-title">결제예상금액</h3>
        </div>
        <hr className="divide-line-thin" />
        <div className="cart-right-section__bottom">
          <div className="flex justify-between p-20 mt-20">
            <span className="highlight-text">결제예상금액</span>
            <span className="highlight-text">0원</span>
          </div>
          <div className="flex-center mt-30 mx-10">
            <Button
              size="large"
              type="primary"
              className={css`
                width: 100%;
                height: 60px;
              `}
            >
              주문하기 (0개)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skeleton;
