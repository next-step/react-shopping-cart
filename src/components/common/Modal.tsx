import { Link } from '@tanstack/react-router'

type ModalProps = {
  isOpen: boolean
  title: string
  message?: string
  variant?: 'success' | 'error' | 'caution'
  setModalStatus: () => void
}

const Modal = ({ props }: { props: ModalProps }) => {
  return (
    <div className={`modal_dim}`}>
      <div className="modal_container">
        <p>{props.title}</p>
        <p>{props.message}</p>
        <div className="action_button">
          <button onClick={() => props.setModalStatus()}>닫기</button>
          <Link to="/cart">장바구니 바로가기</Link>
        </div>
      </div>
    </div>
  )
}

export default Modal
