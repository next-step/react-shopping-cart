type Props = {
  label?: string;
  checked?: boolean;
  onSelect?: () => void;
};


const CheckBox = ({ checked, onSelect, label }: Props) => {
  return (
    <div className="checkbox-container" onClick={onSelect}>
      <input
        className="checkbox"
        name="checkbox"
        type="checkbox"
        checked={checked}
        readOnly
      />
      <label className="checkbox-label" htmlFor="checkbox">
        <span>{label && label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
