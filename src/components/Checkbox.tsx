import styled from 'styled-components';

const Checkbox = ({
  id,
  name,
  value,
  onChange,
  checked,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <CheckboxContainer>
      <input
        id={id}
        type={'checkbox'}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        {...props}
      />
      <label htmlFor={id}>{value}</label>
    </CheckboxContainer>
  );
};

export default Checkbox;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;
