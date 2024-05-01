import { useState } from 'react';
import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';
import { PaymentsDisplay } from './PaymentsDisplay';
import {
  Button,
  CardAddDisplay,
  CardDisplay,
  Checkbox,
  Overlay,
  PaymentCardMaker,
  Typography,
  useCheckbox,
} from '@/components';
import { Carousel } from '@/components/Carousel/Carousel';
import { useCardState } from '@/hooks';
import { CardState, CardStateSchema, PaymentFormState, PaymentResult } from '@/types';
import { formatNumberWithCommas, maskCardNumber } from '@/utils';

type PaymentFormProps = PaymentFormState & {
  onClose?: () => void;
};

const isValidateCardState = (card: CardState | null): card is CardState => {
  if (!card) {
    return false;
  }
  try {
    CardStateSchema.parse(card);
    return true;
  } catch (e) {
    console.error('isValidateCardState: ', e);
    return false;
  }
};

export const PaymentForm = ({ orderId, totalPrice, onPaymentCancel, onPaymentComplete, onClose }: PaymentFormProps) => {
  const ownerCards = useCardState();
  const agreeCheckbox = useCheckbox();
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [openedCardMaker, setOpenedCardMaker] = useState(false);

  const selectedCard = ownerCards.length === 0 ? null : ownerCards[selectedCardIndex];
  const formattedTotalAmount = `${formatNumberWithCommas(totalPrice)}원`;

  const validCardState = isValidateCardState(selectedCard);
  const validPayment = validCardState && agreeCheckbox.checked;

  const openCardMakerForm = () => {
    setOpenedCardMaker(true);
  };

  const closeCardMakerForm = () => {
    setSelectedCardIndex(0);
    setOpenedCardMaker(false);
  };

  const handlePaymentCancel = () => {
    const paymentResult: Pick<PaymentResult, 'success' | 'orderId'> = {
      success: false,
      orderId,
    };
    onPaymentCancel(paymentResult);
    onClose?.();
  };

  const handlePaymentComplete = async () => {
    if (!selectedCard) {
      return;
    }
    const cardNumber = maskCardNumber(selectedCard.cardNumber);
    const paymentResult: PaymentResult = {
      success: true,
      orderId,
      totalPrice,
      cardNumber,
      cardBrandName: selectedCard.cardBrandName,
      paymentTimestamp: Date.now(),
    };
    onPaymentComplete(paymentResult);
    onClose?.();
  };

  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(index);
  };

  return (
    <Overlay>
      <PaymentsDisplay.Root>
        <PaymentCardMaker opened={openedCardMaker} close={closeCardMakerForm} />
        <PaymentsDisplay.Header>
          <Typography as="h3" variant="title" className={css({ color: 'black' })}>
            결제하기
          </Typography>
        </PaymentsDisplay.Header>
        <PaymentsDisplay.Body>
          <div className={css({ marginTop: '32px' })}>
            <Carousel
              items={[
                ...ownerCards.map((card, index) => <CardDisplay key={`${card.cardNumber}-${index}`} {...card} />),
                <CardAddDisplay onClick={openCardMakerForm} />,
              ]}
              selectedIndex={selectedCardIndex}
              onSelect={handleCardSelect}
            />
          </div>
          <div className={paymentAmountStyle}>
            <Typography variant="headline" className={paymentAmountTitleStyle}>
              결제금액
            </Typography>
          </div>
          <div className={totalAmountStyle}>
            <Typography variant="title" className={totalAmountLabelStyle}>
              총 결제금액
            </Typography>
            <Typography variant="title" className={totalAmountValueStyle}>
              {formattedTotalAmount}
            </Typography>
          </div>
          <div className={agreementStyle}>
            <Typography variant="headline" className={agreementTitleStyle}>
              약관 이용 및 동의
            </Typography>
          </div>
          <div className={agreementCheckboxStyle}>
            <Typography variant="body" className={agreementTextStyle}>
              주문내역을 확인하였으며, 결제를 진행합니다.
            </Typography>
            <Checkbox id="agree" checked={agreeCheckbox.checked} onChange={agreeCheckbox.change} />
          </div>
        </PaymentsDisplay.Body>
        <PaymentsDisplay.Footer>
          <div className={buttonContainerStyle}>
            <Button variant="outline" className={buttonStyle} onClick={handlePaymentCancel}>
              취소
            </Button>
            <Button variant="solid" className={buttonStyle} onClick={handlePaymentComplete} disabled={!validPayment}>
              결제하기
            </Button>
          </div>
        </PaymentsDisplay.Footer>
      </PaymentsDisplay.Root>
    </Overlay>
  );
};

PaymentForm.displayName = 'PaymentForm';

const paymentAmountStyle = css({
  borderBottom: '1px solid #ddd',
  paddingBottom: '8px',
  marginTop: '32px',
});

const paymentAmountTitleStyle = css({
  textAlign: 'left',
  margin: '30px 0 20px',
  paddingBottom: '10px',
});

const totalAmountStyle = flex({
  justifyContent: 'space-between',
  alignItems: 'center',
});

const totalAmountLabelStyle = css({
  textAlign: 'left',
  fontWeight: 400,
  margin: 0,
});

const totalAmountValueStyle = css({
  textAlign: 'left',
  fontWeight: 400,
  margin: 0,
});

const agreementStyle = css({
  borderBottom: '1px solid #ddd',
  paddingBottom: '8px',
  marginTop: '32px',
});

const agreementTitleStyle = css({
  textAlign: 'left',
  margin: '30px 0 20px',
  paddingBottom: '10px',
});

const agreementCheckboxStyle = flex({
  justifyContent: 'space-between',
  alignItems: 'center',
});

const agreementTextStyle = css({
  textAlign: 'left',
  margin: 0,
});

const buttonContainerStyle = flex({
  gap: '10px',
  width: '100%',
});

const buttonStyle = css({
  width: '100%',
});
