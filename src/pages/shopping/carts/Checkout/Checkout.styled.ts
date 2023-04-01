import styled from 'styled-components';

const BorderBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.purple};
`;

const FirstBorderBox = styled(BorderBox)`
  flex: 0 1 50px;
  justify-content: center;
`;

const SecondBorderBox = styled(BorderBox)`
  flex: 0 1 200px;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  height: 55px;
`;

export { FirstBorderBox, SecondBorderBox, ButtonContainer };
