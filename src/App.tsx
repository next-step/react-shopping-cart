import { PayssionProvider } from 'payssion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Nav, Modal } from '@/components'
import { ModalProvider } from '@/providers'
import routes from '@/routes'

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <PayssionProvider>
          <ModalProvider>
            <Nav />
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
            <Modal />
          </ModalProvider>
        </PayssionProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
