import { css } from '@styled-system/css';
import type { CardState } from '../../types';
import { CardAddDisplay } from './CardAddDisplay';
import { Button } from '@/components';
import { splitString } from '@/utils';

type CardDisplayProps = {
  onClick?: () => void;
} & Omit<CardState, 'timestamp'>;

export const CardDisplay = ({
  cardBrandName,
  cardColor = 'blue',
  cardNumber,
  month,
  year,
  name,
  onClick,
}: CardDisplayProps) => (
  <Button onClick={onClick} style={{ padding: 0 }}>
    <article className={cardDisplayStyle} style={{ backgroundColor: cardColor }}>
      <header style={{ width: '100%', textAlign: 'left' }}>
        <div className={labelStyle}>{cardBrandName && <span className={typographyStyle}>{cardBrandName}</span>}</div>
        <div className={cardChipStyle} />
      </header>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '10px',
          width: '100%',
          flexGrow: 1,
        }}
      >
        <div style={{ width: '100%' }} />
        <CardNumberDisplay cardNumber={cardNumber} />
        <CardOwnerDisplay ownerName={name} expirationMonth={month || 'MM'} expirationYear={year || 'YY'} />
      </main>
    </article>
  </Button>
);

const CardNumberDisplay = ({ cardNumber }: { cardNumber: CardDisplayProps['cardNumber'] }) => {
  const splitCardNumber = splitString(cardNumber, 4);
  return (
    <section className={cardNumberStyle}>
      {splitCardNumber.map((number, index) => (
        <span key={`${number}-${index}`} className={typographyStyle}>
          {number}
        </span>
      ))}
    </section>
  );
};

const CardOwnerDisplay = ({
  ownerName,
  expirationMonth,
  expirationYear,
}: {
  ownerName: string;
  expirationMonth: string;
  expirationYear: string;
}) => (
  <footer className={cardOwnerStyle}>
    <span className={typographyStyle}>{ownerName}</span>
    <div style={{ width: '40px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <span className={typographyStyle}>{expirationMonth}</span>
      <span className={typographyStyle} style={{ textAlign: 'center' }}>
        /
      </span>
      <span className={typographyStyle}>{expirationYear}</span>
    </div>
  </footer>
);

const cardDisplayStyle = css({
  color: 'gray600',
  backgroundColor: 'color',
  borderRadius: '5px',
  padding: '10px 14px',
  width: '208px',
  height: '130px',
  fontSize: '14px',
});

const cardChipStyle = css({
  backgroundColor: 'mustard',
  borderRadius: '4px',
  width: '40px',
  height: '26px',
  marginTop: '9px',
});

const cardNumberStyle = css({
  width: '100%',
  paddingLeft: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
});

const cardOwnerStyle = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  marginTop: '4px',
});

const labelStyle = css({
  height: '24px',
});

const typographyStyle = css({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: 1,
  color: 'rgba(255,255,255,0.59)',
});

CardDisplay.displayName = 'CardDisplay';

CardDisplay.Root = CardDisplay;
CardDisplay.Add = CardAddDisplay;
