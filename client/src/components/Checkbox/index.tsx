import { useId } from 'react';

import { CombineElementProps } from 'types/utils';

export interface CheckboxProps extends CombineElementProps<'input'> {}

function Checkbox({ children, ...props }: CheckboxProps) {
  const id = useId();

  return (
    <div className="checkbox-container">
      <input {...props} id={id} className="checkbox" type="checkbox" />
      <label className="checkbox-label" htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
