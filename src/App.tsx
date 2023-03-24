import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header, Nav, Modal } from '@/components'
import { ModalProvider } from '@/providers'
import routes from '@/routes'

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <ModalProvider>
          <Header />
          <Nav />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Modal />
        </ModalProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
