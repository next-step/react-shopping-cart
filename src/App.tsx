import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './shared/components/ui/Header'
import { ApiClientProvider } from './shared/context/ApiClientContext'

function App() {
  return (
    <ApiClientProvider>
      <Header />
      <Outlet />
    </ApiClientProvider>
  )
}

export default App
