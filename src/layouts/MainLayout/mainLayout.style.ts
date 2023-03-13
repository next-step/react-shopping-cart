import styled from "styled-components";

export const MainLayoutContainer = styled.div`
  --main-layout-padding: 0 300px;
  --header-height: 80px;
`;

export const MainContentWrapper = styled.div`
  padding: var(--main-layout-padding);
  min-height: calc(100vh - var(--header-height));
`;
