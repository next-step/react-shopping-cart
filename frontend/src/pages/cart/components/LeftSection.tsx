import { MouseEvent, PropsWithChildren } from "react";
import Button from "../../../components/button/Button";
import CheckBox from "../../../components/checkbox/CheckBox";
import Container from "../../../components/container/Container";
import Label from "../../../components/label/Label";
import ProductName from "./ProductName";
import Section from "../../../components/section/Section";

type LeftSectionProps = {
  productNum: number | undefined;
  checked: boolean;
  handleAllChecked: (e: MouseEvent<HTMLInputElement>) => void;
} & PropsWithChildren;

const LeftSection = ({
  productNum,
  checked,
  handleAllChecked,
  children,
}: LeftSectionProps) => {
  return (
    <Section type="cart-left">
      <div className="flex justify-between items-center">
        <Container className="checkbox-container">
          <CheckBox checked={checked} onClick={handleAllChecked} />
          <Label className="checkbox-label" htmlFor="checkbox">
            선택해제
          </Label>
        </Container>
        <Button type="button" className="delete-button">
          상품삭제
        </Button>
      </div>
      <ProductName>{`든든배송 상품(${productNum}개)`}</ProductName>
      <hr className="divide-line-gray mt-10" />
      {children}
    </Section>
  );
};

export default LeftSection;
