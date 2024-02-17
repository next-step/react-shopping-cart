import { css, cx } from '@emotion/css';

import { Button } from 'components';

import { colors } from 'constants/colors';

const SKELETON_COUNT = 2;

function Skeleton() {
  const skeletons = Array.from({ length: SKELETON_COUNT });

  return (
    <div className="flex">
      <section className="order-left-section">
        <h3 className="order-title">주문 상품 (0건)</h3>
        <hr className="divide-line-gray mt-10" />
        {skeletons.map((_, index) => (
          <div
            key={index}
            className={css`
              display: flex;
              margin: 20px 0 10px 0;
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
      <section className="order-right-section">
        <div className="order-right-section__top">
          <h3 className="order-title">결제금액</h3>
        </div>
        <hr className="divide-line-thin" />
        <div className="order-right-section__bottom">
          <div className="flex justify-between p-20 mt-20">
            <span className="highlight-text">총 결제금액</span>
            <span className="highlight-text">0원</span>
          </div>
          <div className="flex-center mt-30 mx-10">
            <Button
              size="large"
              type="primary"
              disabled
              className={css`
                width: 100%;
                height: 60px;
              `}
            >
              0원 결제하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skeleton;
