import styled from "styled-components";

interface ComponentProps {
  children: JSX.Element | JSX.Element[];
}

function SubLayout({ children }: ComponentProps) {
  return (
    <Section>
      <SubHeader>
        <SubHeaderTitle>장바구니</SubHeaderTitle>
        <Hr />
      </SubHeader>
      <Content>{children}</Content>
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

const Content = styled.div`
  display: flex;
`;

export default SubLayout;
