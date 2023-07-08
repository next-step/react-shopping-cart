import React, { PropsWithChildren, useMemo } from "react";

type TButtonSize = "large" | "small";

interface IProps extends PropsWithChildren {
  onClick?: () => void;
  size?: TButtonSize;
  classNames?: string[];
}

const basicClassName: { [key in TButtonSize]: string } = {
  large: "primary-button",
  small: "primary-button-small",
};

function PrimaryButton({ onClick, children, classNames = [], size = "large" }: IProps) {
  const buttonClassNames = useMemo(() => [basicClassName[size], ...classNames].join(" "), [classNames]);

  return (
    <button type="button" className={buttonClassNames} onClick={() => onClick?.()} style={{ cursor: "pointer" }}>
      {children}
    </button>
  );
}

export default PrimaryButton;
