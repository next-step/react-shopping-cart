import styled from 'styled-components';

const GridContainer = styled.div`
  margin: auto;

  display: grid;
  grid-template-columns: repeat(1, auto);
  gap: 20px;
  @media ${(props) => props.theme.media.mobile} {
    grid-template-columns: repeat(2, auto);
  }

  @media ${(props) => props.theme.media.tablet} {
    width: auto;
    grid-template-columns: repeat(3, auto);
  }
  @media ${(props) => props.theme.media.desktop} {
    width: auto;
    grid-template-columns: repeat(4, auto);
  }
`;

export { GridContainer };
