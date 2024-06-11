import { HTMLAttributes } from "react";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {}

const Spinner = ({ ...props }: SpinnerProps) => {
  return <span {...props}></span>;
};

export default Spinner;
