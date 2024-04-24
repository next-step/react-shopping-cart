import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './modal'
import { flex } from '@styled-system/patterns'
import { SquareButton } from '../square-button/square-button'
import { useOverlay } from '@/hooks/use-overlay'

const meta: Meta<typeof Modal> = {
  title: 'atom/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    children: (
      <div className={flex({ flexDir: 'column', gap: '10px' })}>
        <div>title</div>
        <SquareButton>button</SquareButton>
      </div>
    ),
  },
}

const OverlayTemplate = () => {
  const [openModal, closeModal] = useOverlay()

  const handleClickTrigger = () => {
    openModal(
      <Modal>
        <div className={flex({ flexDir: 'column', gap: '10px' })}>
          <div>title</div>
          <SquareButton onClick={closeModal}>close</SquareButton>
        </div>
      </Modal>,
    )
  }
  return (
    <SquareButton color="secondary" onClick={handleClickTrigger}>
      trigger
    </SquareButton>
  )
}

export const WithOverlay: StoryObj<typeof OverlayTemplate> = {
  render: OverlayTemplate,
}
