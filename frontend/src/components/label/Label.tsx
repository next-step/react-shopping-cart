import { LabelHTMLAttributes, PropsWithChildren } from "react";

type BaseLabelType = LabelHTMLAttributes<HTMLLabelElement>;

type LabelProps = PropsWithChildren<BaseLabelType>;

const Label = ({ className, htmlFor, children }: LabelProps) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
