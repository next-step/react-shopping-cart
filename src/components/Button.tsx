import styled from 'styled-components';

type StyledProps = {
  backgroundColor?: string;
  color?: string;
};

type ButtonProps = StyledProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  backgroundColor = 'white',
  color = 'black',
  type = 'button',
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<StyledProps>(
  ({ backgroundColor = 'white', color = 'black' }) => `
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: ${backgroundColor};
    color: ${color};
    padding: 12px;
    border-radius: 5px;

    :hover {
      opacity: 0.7;
    }
  `
);
