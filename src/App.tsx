import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header, Nav } from '@/components'
import routes from '@/routes'

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
