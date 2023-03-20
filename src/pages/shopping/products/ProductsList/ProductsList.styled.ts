import styled from 'styled-components';

const GridContainer = styled.div`
  margin: auto;

  display: grid;
  grid-template-columns: repeat(1, auto);

  @media ${(props) => props.theme.media.tablet} {
    grid-template-columns: repeat(2, auto);
  }

  @media ${(props) => props.theme.media.desktop} {
    width: auto;
    grid-template-columns: repeat(4, auto);
  }
`;

export { GridContainer };
