import React, { MouseEvent, HTMLInputTypeAttribute, PropsWithChildren } from 'react';

interface InputWithLabelProps {
  type: HTMLInputTypeAttribute;
  name: string;
  inputClassName?: string;
  labelClassName?: string;
  value?: string;
  checked?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export function InputWithLabel({
  type,
  name,
  inputClassName,
  labelClassName,
  value,
  checked,
  onClick,
  children,
}: PropsWithChildren<InputWithLabelProps>) {
  return (
    <div>
      <input
        type={type}
        checked={checked}
        value={value}
        className={inputClassName}
        name={name}
        id={name}
        onClick={onClick}
      />
      {/* eslint-disable-next-line */}
      <label htmlFor={name} className={labelClassName}>
        {children}
      </label>
    </div>
  );
}
