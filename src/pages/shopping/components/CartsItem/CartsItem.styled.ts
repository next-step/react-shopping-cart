import styled from 'styled-components';
import { ReactComponent as Trash } from 'assets/trash.svg';

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 30px;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.purple};
`;

const GridItem = styled.div`
  grid-row: 1 / 3;
  margin: auto;
`;

const StyledTrash = styled(Trash)`
  justify-self: flex-end;
  align-self: flex-end;
  margin-right: 8px;
  cursor: pointer;
`;

export { ImageContainer, GridContainer, GridItem, StyledTrash };
