import React from 'react'

type ButtonProps = {
  variant: 'fill' | 'outline' | 'text'
  size: 'sm' | 'md' | 'lg' | 'xl'
  color: 'primary' | 'secondary' | 'danger'
  width?: string
  iconArea?: React.ReactNode
  textArea?: React.ReactNode
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SIZE_CLASS = {
  sm: 'h-8 w-24 text-md',
  md: 'h-10 w-28 text-lg',
  lg: 'h-12 w-36 text-xl',
  xl: 'h-16 w-48 text-3xl',
}

const COLOR_CLASS = {
  primary: 'violet-600',
  secondary: 'gray-400',
  danger: 'red-600',
}

type ColorKeys = keyof typeof COLOR_CLASS

const convertVariantClass = (color: ColorKeys) => {
  const colorValue = COLOR_CLASS[color]

  return {
    fill: `bg-${colorValue} text-white`,
    outline: `text-${colorValue} border-solid border-${colorValue} border-2`,
    text: `text-${colorValue} border-none`,
  }
}

const Button: React.FC<ButtonProps> = ({
  size,
  color,
  width,
  iconArea,
  textArea,
  onClick,
  variant,
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      style={{ width }}
      className={`${SIZE_CLASS[size]} rounded-md font-semibold ${
        convertVariantClass(color)[variant]
      }`}
    >
      <span>{iconArea}</span>
      {textArea}
    </button>
  )
}

export default Button
