import { cx } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { SystemProperties } from '@styled-system/types'
import { HTMLAttributes } from 'react'

export interface SquarePanelProps extends HTMLAttributes<HTMLDivElement> {
  padding?: SystemProperties['padding']
  width?: SystemProperties['width']
  height?: SystemProperties['height']
  flexDir?: SystemProperties['flexDir']
  backgroundColor?: SystemProperties['backgroundColor']
  alignItems?: SystemProperties['alignItems']
  justifyContent?: SystemProperties['justifyContent']
}

export const SquarePanel = ({
  padding = '30px',
  width = '100%',
  height = 'max-content',
  flexDir = 'column',
  backgroundColor = 'white',
  justifyContent,
  alignItems,
  className,
  ...rest
}: SquarePanelProps) => {
  return (
    <div
      className={cx(
        flex({
          border: '1px solid token(colors.gray.500)',
          backgroundColor,
          width,
          height,
          padding,
          flexDir,
          justifyContent,
          alignItems,
        }),
        className,
      )}
      {...rest}
    />
  )
}
