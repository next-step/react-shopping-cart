import { css, cx } from '@emotion/css';

const SKELETON_COUNT = 2;

function Skeleton() {
  const skeletons = Array.from({ length: SKELETON_COUNT });

  return (
    <div className="order-list">
      <div className="order-list__header">
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

      {skeletons.map((_, index) => (
        <div key={index} className="order-list-item">
          <div className="flex gap-15 mt-10">
            <div
              className={cx(
                'skeleton-box',
                css`
                  width: 144px;
                  height: 144px;
                `
              )}
            />
            <div className="flex-col gap-15">
              <div
                className={cx(
                  'skeleton-box',
                  css`
                    width: 200px;
                    height: 24px;
                  `
                )}
              />
              <div
                className={cx(
                  'skeleton-box',
                  css`
                    width: 140px;
                    height: 20px;
                  `
                )}
              />
            </div>
          </div>
          <div
            className={cx(
              'skeleton-box',
              css`
                width: 90px;
                height: 44px;
              `
            )}
          />
        </div>
      ))}
      <div className="order-detail-container w-full">
        <div className="w-480">
          <span className="order-detail-title">결제금액 정보</span>
          <hr className="divide-line-thin my-20" />
          <div className="flex justify-between">
            <span className="highlight-text">총 결제금액</span>
            <span className="highlight-text">0원</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
