import { ReactElement } from 'react'

export type ModalState = {
  element: ReactElement
  props?: { [key: string]: unknown }
}
export type ModalClose = {
  element: ReactElement
}
export type ModalDispatch = {
  open: ({ element, props }: ModalState) => void
  close: ({ element }: ModalClose) => void
}
