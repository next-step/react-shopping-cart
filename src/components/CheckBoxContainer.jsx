export default function CheckBoxContainer() {
  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        name="checkbox"
        type="checkbox"
        checked="true"
      />
      <label className="checkbox-label" for="checkbox">
        선택해제
      </label>
    </div>
  );
}
