import { cls } from '@/utils';
import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Checkbox({ checked, label, ...props }: CheckboxProps) {
  return (
    <div className="flex items-center">
      <input
        className={cls(
          'appearance-none border-[1px] border-teal-400  w-6 h-6 cursor-pointer rounded-sm ',
          'focus:outline-none',
          'checked:bg-teal-400 checked:after:content-["✔"] after:content',
          'after:w-full after:h-full after:text-[0.75rem] after:flex after:justify-center after:items-center',
        )}
        type="checkbox"
        checked={checked}
        {...props}
      />
      {label ? <span className="pl-2 text-sm">{label}</span> : null}
    </div>
  );
}

export default Checkbox;
