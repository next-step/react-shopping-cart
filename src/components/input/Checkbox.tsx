interface CheckboxProps {
  initValue: boolean;
  onClick?: () => void;
}
const Checkbox = ({ initValue, onClick }: CheckboxProps) => {
  return (
    <input
      className="checkbox"
      name="checkbox"
      type="checkbox"
      checked={initValue}
      onClick={onClick}
    />
  );
};

export default Checkbox;
