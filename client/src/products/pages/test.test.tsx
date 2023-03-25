import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Test from './test'

test('todoList에 공부하기가 포함 되어있나?', async () => {
  render(<Test />)

  const listitem = await screen.findAllByRole('listitem')
  expect(listitem).toHaveLength(3)

  userEvent.type(screen.getByRole('textbox'), '공부하기')
  userEvent.click(screen.getByRole('button'))

  expect(await screen.findByText('공부하기')).toBeInTheDocument()
})
