import Button from "../../../components/button/Button";

type CountButtonProps = {
  increase: () => void;
  decrease: () => void;
};

const CountButton = ({ increase, decrease }: CountButtonProps) => {
  return (
    <div>
      <Button type="button" className="number-input-button" onClick={increase}>
        ▲
      </Button>
      <Button type="button" className="number-input-button" onClick={decrease}>
        ▼
      </Button>
    </div>
  );
};

export default CountButton;
