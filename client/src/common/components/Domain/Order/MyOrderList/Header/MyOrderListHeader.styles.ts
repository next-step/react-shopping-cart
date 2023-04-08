import styled from 'styled-components';

export const Layout = styled.header`
  width: 100%;
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  font-size: 20px;
  background: #f6f6f6;
  border: 1px solid #aaaaaa;
`;
export const Text = styled.span`
  &:hover {
    transform: scale(1.16);
  }
  cursor: pointer;
`;
