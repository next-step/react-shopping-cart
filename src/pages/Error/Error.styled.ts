import { styled } from '@/stitches.config';

const ErrorWrapper = styled('div', {
  flexCenter: 'column',
  width: '100%',
  height: '100%',
});

const ErrorMessage = styled('span', {
  fontSize: '30px',
  fontWeight: 'bold',
  marginBottom: '30px',
});

const ErrorButton = styled('button', {
  width: 'fit-content',
  height: 'fit-content',
  padding: '20px',
  borderRadius: '20px',
  backgroundColor: '$mint',
  color: 'White',
  fontWeight: 'bold',
});

export default {
  ErrorWrapper,
  ErrorMessage,
  ErrorButton,
};
