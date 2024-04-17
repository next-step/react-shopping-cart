import Button from "../../primitive/Button/Button";
import Text from "../../primitive/Text/Text";

import {
  buttonBox,
  container,
  content,
  contentPrice,
  titleContainer,
  underline,
} from "./DecisionPriceBox.css";

interface DecisionPriceBox {
  title: string;
  subtitle: string;
  price: number;
  buttonText: string;
  onClick?: () => void;
}

export default function DecisionPriceBox({
  title,
  subtitle,
  price,
  buttonText,
  onClick,
}: DecisionPriceBox) {
  return (
    <div className={container}>
      <div className={titleContainer}>
        <Text as="body">{title}</Text>
      </div>
      <div className={underline}></div>
      <div className={content}>
        <div className={contentPrice}>
          <div>
            <Text as="description" weight={900}>
              {subtitle}
            </Text>
          </div>
          <div>
            <Text as="description">{`${price.toLocaleString()} 원`}</Text>
          </div>
        </div>
        <div className={buttonBox}>
          <Button onClick={onClick}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
}
