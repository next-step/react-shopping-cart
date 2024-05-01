import { ComponentPropsWithoutRef, forwardRef } from 'react'

export const MoreButton = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<'button'>>(
  ({ children, ...props }, ref) => {
    return (
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '30px 0',
        }}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)
