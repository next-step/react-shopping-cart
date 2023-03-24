import styled from 'styled-components';

const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
  }
`;

const SectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-between;
`;

const ImageContainer = styled.div``;

export { ProductDetailsContainer, SectionContainer, ImageContainer };
