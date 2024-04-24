import { css, cx } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { HTMLAttributes } from 'react'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {}

export const Modal = ({ children, className, ...props }: ModalProps) => {
  return (
    <div
      className={flex({
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
      })}
    >
      <div
        className={cx(
          css({
            backgroundColor: 'token(colors.white)',
            padding: '30px',
            borderRadius: '8px',
          }),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}
