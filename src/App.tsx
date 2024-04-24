import '@/styles/index.css'
import 'myfirstpackage-payments/styles'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from '@/providers/router-provider'
import { QueryProvider } from '@/providers/query-provider'
import { startMocking } from '@/mocks/starter'
import { OverlayContextProvider } from '@/contexts/overlay-context'
import { CardInfoProvider } from 'myfirstpackage-payments'

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  void startMocking().then(() =>
    root.render(
      <StrictMode>
        <QueryProvider>
          <CardInfoProvider>
            <OverlayContextProvider>
              <RouterProvider />
              <ReactQueryDevtools position="bottom" />
            </OverlayContextProvider>
          </CardInfoProvider>
        </QueryProvider>
      </StrictMode>,
    ),
  )
}
