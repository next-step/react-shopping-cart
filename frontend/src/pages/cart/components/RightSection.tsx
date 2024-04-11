import Button from "../../../components/button/Button";
import FlexCenter from "../../../components/flex-center/FlexCenter";
import HighlightText from "../../../components/highlight-text/HighlightText";
import Section from "../../../components/section/Section";
import ProductName from "./ProductName";
import RightSectionBottom from "./RightSectionBottom";

type RightSectionProps = { price: number; totalCount: number };

const RightSection = ({ price, totalCount }: RightSectionProps) => {
  return (
    <Section type="cart-right">
      <div className="cart-right-section__top">
        <ProductName>결제예상금액</ProductName>
      </div>
      <hr className="divide-line-thin" />
      <RightSectionBottom>
        <div className="flex justify-between p-20 mt-20">
          <HighlightText>결제예상금액</HighlightText>
          <HighlightText>{`${price.toLocaleString()}원`}</HighlightText>
        </div>
        <FlexCenter className="mt-30 mx-10">
          <Button type="button" className="primary-button flex-center">
            {`주문하기(${totalCount}개)`}
          </Button>
        </FlexCenter>
      </RightSectionBottom>
    </Section>
  );
};

export default RightSection;
