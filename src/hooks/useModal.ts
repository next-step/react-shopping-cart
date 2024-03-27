import { useMemo, useState } from 'react'

type ModalProps = {
  title?: string
}
const useModal = ({ title = '확인해주세요.' }: ModalProps) => {
  const [openModal, setOpenModal] = useState(false)
  const props = useMemo(() => {
    return {
      isOpen: openModal,
      title: title,
      setModalStatus: () => setOpenModal((state) => !state),
    }
  }, [title])

  return { props, openModal, setOpenModal }
}

export default useModal
