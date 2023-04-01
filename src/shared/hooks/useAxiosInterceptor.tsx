import axios from 'axios'
import React, { PropsWithChildren, useEffect } from 'react'
import { CommonErrorType } from 'shared/types/fetch-type'

const AxiosInterceptor: React.FC<PropsWithChildren> = ({ children }) => {
  const resInterceptor = (response: { data: any }) => {
    return response.data
  }

  const errInterceptor = (error: CommonErrorType) => {
    // 400 ->
    // 500 ->
    // 나머지 -> dialog open
    return Promise.reject(error)
  }

  const interceptor = axios.interceptors.response.use(
    resInterceptor,
    errInterceptor,
  )
  useEffect(() => {
    return () => axios.interceptors.response.eject(interceptor)
  })
  return <>{children}</>
}

export default AxiosInterceptor
