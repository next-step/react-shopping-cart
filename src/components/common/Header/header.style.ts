import styled from "styled-components";

import { Cart } from "@/assets/svgs";

import Button from "../Button";

export const HeaderContainer = styled.nav`
  --header-text-top-padding: 10px;

  width: 100%;
  height: var(--header-height);
  background-color: var(--cyan);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  padding: var(--main-layout-padding);
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 40px;
  font-weight: 900;
  text-align: center;
  vertical-align: center;
  color: var(--white);
`;

export const HeaderCartIcon = styled(Cart)`
  height: 100%;
  width: 44px;
  & path {
    fill: var(--white);
  }
`;

export const HeaderTitle = styled.span`
  padding-top: var(--header-text-top-padding);
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  gap: 40px;

  padding-top: var(--header-text-top-padding);
`;

export const NavButton = styled(Button)`
  font-weight: 500;
  font-size: 24px;
  color: var(--white);
`;
