import React from 'react'
import { Outlet } from 'react-router-dom'
import AxiosInterceptor from 'shared/hooks/useAxiosInterceptor'
import { Header } from './shared/components/ui/Header'
import { ApiClientProvider } from './shared/context/ApiClientContext'

function App() {
  return (
    <AxiosInterceptor>
      <ApiClientProvider>
        <Header />
        <Outlet />
      </ApiClientProvider>
    </AxiosInterceptor>
  )
}

export default App
