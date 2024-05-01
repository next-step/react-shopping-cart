import { Payments } from 'myfirstpackage-payments';
import { IoClose } from 'react-icons/io5';
import { css } from '@styled-system/css';
import { IconButton } from '@/components';

type PaymentCardMakerFormProps = {
  opened: boolean;
  close: () => void;
};

export const PaymentCardMaker = ({ opened, close }: PaymentCardMakerFormProps) =>
  opened ? (
    <div className={cardMakerFormStyle}>
      <IconButton
        className={closeButtonStyle}
        variant="ghost"
        icon={<IoClose color="#484848" className={closeIconStyle} />}
        onClick={close}
      />
      <Payments />
    </div>
  ) : null;

PaymentCardMaker.displayName = 'PaymentCardMaker';

const cardMakerFormStyle = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '375px',
  height: '700px',
  backgroundColor: 'white',
  zIndex: 'popover',
  padding: '16px 24px',
  '& > main': {
    width: '100%',
    height: '100%',
    '& > div': {
      width: '100%',
      height: '100%',
    },
    '& [class*="modal-dimmed"]': {
      borderRadius: '0 !important',
      '& > ul, & > div': {
        borderRadius: '0 !important',
      },
    },
  },
  '& h2': {
    marginBottom: '32px',
    fontSize: '18px !important',
    fontWeight: '500',
    '& button': {
      padding: '0 10px 5px 10px !important',
      marginRight: '-8px !important',
    },
  },
});

const closeButtonStyle = css({
  position: 'absolute',
  top: '10px',
  right: '10px',
  zIndex: 'popover',
});

const closeIconStyle = css({
  width: '24px',
  height: '24px',
});
