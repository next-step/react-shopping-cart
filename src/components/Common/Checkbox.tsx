import { cls } from '@/utils';
import { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

function Checkbox(props: CheckboxProps) {
  return (
    <input
      className={cls(
        'appearance-none border-[1px] border-teal-400 w-7 h-7 cursor-pointer rounded-sm text-white',
        'focus:outline-none',
        'checked:bg-teal-400 checked:after:content-["✔"] after:content',
        'after:w-full after:h-full after:text-[0.75rem] after:flex after:justify-center after:items-center',
      )}
      type="checkbox"
      {...props}
    />
  );
}

export default Checkbox;
