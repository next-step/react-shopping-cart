export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps): JSX.Element => (
  <button onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
