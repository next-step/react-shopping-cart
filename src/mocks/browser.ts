import { http } from 'msw'
import { setupWorker } from 'msw/browser'

import { handlers } from './handlers'

const imageExtensionRegex = /\.(png|jpe?g|gif|svg)$/i
const sourceCodeExtensionRegex = /\.(ts|tsx|js|jsx)$/i

export const worker = setupWorker(
  ...handlers,
  http.get(imageExtensionRegex, () => {}),
  http.get(sourceCodeExtensionRegex, () => {})
)
