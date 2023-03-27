interface AmountBoxProps {
  title: string
  price: string
  disabled: boolean
  onClick: () => void
  buttonText: string
}

const AmountBox = ({ title, price, disabled, onClick, buttonText }: AmountBoxProps) => {
  return (
    <div className="amount-box">
      <div className="amount-box__title">{title}</div>
      <div className="amount-box__price">
        <span className="underline">{title}</span>
        <span className="underline">{price}</span>
      </div>
      <button className="amount-box__button primary-button" disabled={disabled} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  )
}

export default AmountBox
