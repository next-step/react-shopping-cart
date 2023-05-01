import styled, { keyframes } from 'styled-components';
import PageContainer from './PageContainer';

const Loading = () => {
  return (
    <PageContainer>
      <LoadingWrapper>
        로딩중
        <AnimationDot delay="0s" />
        <AnimationDot delay=".1s" />
        <AnimationDot delay=".2s" />
      </LoadingWrapper>
    </PageContainer>
  );
};

export default Loading;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: calc(100vh - 500px);
`;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const Dot = styled.div(
  ({ delay }: { delay: string }) => `
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation-delay: ${delay};
`
);

const AnimationDot = styled(Dot)`
  animation: ${BounceAnimation} 0.5s linear infinite;
`;
