import { useHistory } from "react-router";
import styled from "styled-components";
import { ROUTE } from "../constants/route";

interface ComponentProps {
  children: JSX.Element | JSX.Element[];
}

interface StringObj {
  [key: string]: string;
}

const PATH_NAME: StringObj = {
  [ROUTE.ORDERS]: "주문목록",
  [ROUTE.CART]: "장바구니",
};

const getPathName = (path: string | undefined) => {
  if (!path) {
    return "";
  }
  return PATH_NAME[path];
};

function SubLayout({ children }: ComponentProps) {
  const history = useHistory();

  return (
    <Section>
      <SubHeader>
        <SubHeaderTitle>
          {getPathName(history.location.pathname)}
        </SubHeaderTitle>
        <Hr />
      </SubHeader>
      {history.location.pathname === ROUTE.CART && (
        <CartContent>{children}</CartContent>
      )}
      {history.location.pathname === ROUTE.ORDERS && <>{children}</>}
    </Section>
  );
}

const Section = styled.section`
  padding: 24px 300px;
`;

const SubHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SubHeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const Hr = styled.hr`
  width: 100%;
  border: 2px solid black;
  margin-top: 20px;
`;

const CartContent = styled.div`
  display: flex;
`;

export default SubLayout;
