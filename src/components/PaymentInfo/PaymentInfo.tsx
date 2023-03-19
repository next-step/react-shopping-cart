import React from 'react'
import { convertCurrencyFormet } from '../../utils/formatter'
import { Button } from '../ui/Button'

type PaymentInfoProps = {
  totalPrice: number
  totalCount: number
  onClick: () => void
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({
  totalCount,
  totalPrice,
  onClick,
}) => {
  return (
    <div className='border-gray-200 border-solid border-2 bg-white'>
      <p className='p-5 text-2xl font-medium border-b-2 border-gray-200 border-solid'>
        결제 예상 금액
      </p>
      <div className='p-5'>
        <p className='flex text-xl font-bold justify-between decoration-violet-700 underline decoration-8 pb-20'>
          <span>결제 예상 금액</span>
          <span>{convertCurrencyFormet(totalPrice)}원</span>
        </p>
        <Button
          textArea={`주문하기(${totalCount}개)`}
          variant='fill'
          color='primary'
          size='xl'
          width='100%'
          onClick={onClick}
        />
      </div>
    </div>
  )
}

export default PaymentInfo
