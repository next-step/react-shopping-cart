import React from 'react'
import { Button } from '../Button'

type ButtonsType = {
  name: string
  value: string | boolean
  variant: 'fill' | 'outline' | 'text'
  color: 'primary' | 'secondary' | 'danger'
  onClick: () => void
}

type DialogProps = {
  title: string
  contents: React.ReactNode
  buttons: ButtonsType[]
  isCloseClickOuter: boolean
}

const DUMMY: DialogProps = {
  title: 'title',
  contents: '장바구니로 이동하시겠습니까?',
  buttons: [
    {
      name: '취소',
      value: false,
      variant: 'outline',
      color: 'primary',
      onClick: () => console.log(''),
    },
    {
      name: '확인',
      value: true,
      variant: 'fill',
      color: 'primary',
      onClick: () => console.log(''),
    },
  ],
  isCloseClickOuter: true,
}

const Dialog: React.FC = () => {
  return (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex items-center justify-center'>
      <div className='z-10 bg-white w-[500px] min-h-48 rounded-lg inset-0 p-4'>
        <div className='text-xl font-bold'>{DUMMY.title}</div>
        <div className='mt-4 text-lg text-gray-600'>{DUMMY.contents}</div>
        <ul className='flex items-end justify-end mt-12'>
          {DUMMY.buttons.map((button) => (
            <Button
              key={button.name}
              variant={button.variant}
              color={button.color}
              onClick={button.onClick}
              textArea={button.name}
              size='sm'
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dialog
