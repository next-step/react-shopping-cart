import { useContext } from 'react'

import { DarkOverlay } from '@/components/modals'
import { ModalStateContext } from '@/contexts'

const Modal = () => {
  const openedModal = useContext(ModalStateContext)
  if (openedModal) return <DarkOverlay>{openedModal.element}</DarkOverlay>
  return <></>
}

export default Modal
