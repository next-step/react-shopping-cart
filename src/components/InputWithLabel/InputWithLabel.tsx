import React, { HTMLInputTypeAttribute, PropsWithChildren } from 'react';

interface InputWithLabelProps {
  type: HTMLInputTypeAttribute;
  name: string;
  inputClassName?: string;
  labelClassName?: string;
}

export function InputWithLabel({
  type,
  name,
  inputClassName,
  labelClassName,
  children,
}: PropsWithChildren<InputWithLabelProps>) {
  return (
    <div>
      <input type={type} className={inputClassName} name={name} id={name} />
      {/* eslint-disable-next-line */}
      <label htmlFor={name} className={labelClassName}>
        {children}
      </label>
    </div>
  );
}
