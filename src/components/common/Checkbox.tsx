import { PropsWithChildren } from 'react'

type CheckboxProps = {
  label?: string
}

const Checkbox = ({ children }: PropsWithChildren<CheckboxProps>) => {
  return (
    <label htmlFor="selctAll">
      <input type="checkbox" id="selctAll" />
      {children}
    </label>
  )
}

export default Checkbox
