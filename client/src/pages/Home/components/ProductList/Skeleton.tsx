import { css, cx } from '@emotion/css';

const SKELETON_COUNT = 8;

function Skeleton() {
  const skeletons = Array.from({ length: SKELETON_COUNT });

  return (
    <section className="product-container">
      {skeletons.map((_, index) => (
        <div key={index}>
          <div
            className={cx(
              'skeleton-box',
              css`
                width: 280px;
                height: 280px;
              `
            )}
          />
          <div
            className={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <div
              className={cx(
                'skeleton-box',
                css`
                  width: 130px;
                  height: 14px;
                  margin: 0 0 2px;
                `
              )}
            />
            <div
              className={cx(
                'skeleton-box',
                css`
                  width: 65px;
                  height: 19px;
                `
              )}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skeleton;
