import styled from 'styled-components';
import { ReactComponent as Image } from 'assets/svgs/spinner.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 9999;
`;

export const Spinner = styled(Image)``;
