import styled from "styled-components";

import type { SubHeaderProps } from "./index";

export const SubHeaderContainer = styled.div<Pick<SubHeaderProps, "textAlign">>`
  border-bottom: 4px solid var(--black);
  padding-bottom: 20px;
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  text-align: ${(props) => props.textAlign};
`;
