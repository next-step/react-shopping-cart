import styled from "styled-components";
import { ButtonProps } from "./Button";

const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => (props.variant === "light" ? "black" : "white")};
  background-color: ${(props) =>
    props.variant === "light" ? "white" : "black"};
  border: 2px solid white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

export default StyledButton;
