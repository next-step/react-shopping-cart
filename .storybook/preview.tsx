import { OverlayContextProvider } from '@/contexts/overlay-context'
import '@/styles/index.css'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <OverlayContextProvider container={document.getElementById('modal-root')!}>
        <Story />
      </OverlayContextProvider>
    ),
  ],
}

export default preview
