import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 50px;
  
  margin: 50px;
  @media screen and (max-width: 450px) {
    margin: 0;
    padding: 13px;
  }

  align-items: center;
`;
