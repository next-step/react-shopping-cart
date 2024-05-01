import { ReactNode } from 'react';
import ArrowLeft from 'src/assets/arrow-left.png';
import { css } from '@styled-system/css';
import { Button } from '../Button';

type CarouselProps = {
  items: ReactNode[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export const Carousel = ({ items, selectedIndex, onSelect }: CarouselProps) => {
  const totalItems = items.length;
  const isFirstItem = selectedIndex === 0;
  const isLastItem = selectedIndex === totalItems - 1;

  const prev = () => {
    const prevIndex = (selectedIndex - 1 + totalItems) % totalItems;
    onSelect(prevIndex);
    onSelect(prevIndex);
  };

  const next = () => {
    const nextIndex = (selectedIndex + 1) % totalItems;
    onSelect((selectedIndex + 1) % totalItems);
    onSelect(nextIndex);
  };

  const getTranslateX = () => {
    const itemWidth = 208;
    const itemMargin = 10;
    const lastItemIndex = totalItems - 1;
    const isLastItem = items.length > 2 && selectedIndex === lastItemIndex;
    const translateX = selectedIndex * (itemWidth + itemMargin) - (isLastItem ? 20 : 0);

    return `translateX(calc(-${translateX}px))`;
  };

  return (
    <section className={carouselStyle}>
      {items.length !== 0 && (
        <>
          <Button
            onClick={prev}
            variant="ghost"
            disabled={isFirstItem}
            style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <img src={ArrowLeft} width="20px" height="20px" alt="이전 화면 아이콘" />
          </Button>
          <Button
            onClick={next}
            variant="ghost"
            disabled={isLastItem}
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <img
              src={ArrowLeft}
              className={css({
                transform: 'rotate(180deg)',
              })}
              width="20px"
              height="20px"
              alt="다음 화면 아이콘"
            />
          </Button>
        </>
      )}
      <div className={carouselItemsStyle}>
        <div className={carouselItemsContainerStyle} style={{ transform: getTranslateX() }}>
          {items.map((item, index) => {
            const itemMarginLeft = index === 0 ? 0 : '10px';
            return (
              <div key={index} className={carouselItemStyle} style={{ marginLeft: itemMarginLeft }}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Carousel.displayName = 'Carousel';

const carouselStyle = css({
  position: 'relative',
  width: '100%',
  height: '130px',
});

const carouselItemsStyle = css({
  position: 'absolute',
  width: '228px',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  overflow: 'hidden',
});

const carouselItemsContainerStyle = css({
  display: 'flex',
  transition: 'transform 0.3s',
});

const carouselItemStyle = css({
  flexShrink: 0,
  width: '208px',
});
