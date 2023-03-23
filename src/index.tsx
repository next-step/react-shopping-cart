import React from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/App'
import '@/styles/index.css'

import { worker } from './mocks/worker'
if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
