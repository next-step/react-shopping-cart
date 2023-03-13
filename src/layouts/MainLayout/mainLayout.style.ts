import styled from "styled-components";

export const MainLayoutContainer = styled.div`
  --main-layout-padding: 0 240px;
  --header-height: 80px;
`;

export const MainContentWrapper = styled.div`
  padding: var(--main-layout-padding);
  padding-top: 25px;
  min-height: calc(100vh - var(--header-height));
`;
