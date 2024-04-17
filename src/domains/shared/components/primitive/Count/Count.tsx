import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { button, countContainer, countText } from "./Count.css";
import Text from "../Text/Text";

interface Count {
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
  value?: number;
}

export default function Count({
  max = Infinity,
  min = -Infinity,
  onChange,
  value,
}: Count) {
  const [countValue, setCountValue] = useState(0);

  useEffect(() => {
    onChange?.(value ?? countValue);
  }, [countValue, value, onChange]);

  function changeCountValue(value: number) {
    onChange?.(value ?? countValue);
    setCountValue(value);
  }

  function up() {
    if (countValue >= max) {
      changeCountValue(max);
    } else {
      changeCountValue(countValue + 1);
    }
  }

  function down() {
    if (countValue <= min) {
      changeCountValue(min);
    } else {
      changeCountValue(countValue - 1);
    }
  }

  return (
    <div className={countContainer}>
      <div className={countText}>
        <Text as="body">{value ?? countValue}</Text>
      </div>
      <div>
        <div className={button}>
          <Button appearance="outline" onClick={up}>
            ˄
          </Button>
        </div>
        <div className={button}>
          <Button appearance="outline" onClick={down}>
            ˅
          </Button>
        </div>
      </div>
    </div>
  );
}
