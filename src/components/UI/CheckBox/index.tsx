type Props = {
  label?: string;
  checked: boolean;
};

export const CheckBox = ({ checked, ...props }: Props) => {
  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        name="checkbox"
        type="checkbox"
        checked={true}
      />
      <label className="checkbox-label" htmlFor="checkbox">
        선택해제
      </label>
    </div>
  );
};

export default CheckBox;
