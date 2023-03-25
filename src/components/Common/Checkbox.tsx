import { cls } from '@/utils';
import { InputHTMLAttributes } from 'react';

// .checkbox {
//   appearance: none;
//   border: 1px solid #2ac1bc;
//   border-radius: 2px;
//   width: 1.75rem;
//   height: 1.75rem;
//   cursor: pointer;
// }

// .checkbox:focus {
//   outline: none;
// }

// .checkbox:checked {
//   background-color: #2ac1bc;
// }

// .checkbox:after {
//   content: "✔";
//   width: 100%;
//   height: 100%;
//   font-size: 0.75rem;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .checkbox-label {
//   padding-left: 7px;
// }

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
