export type ResponseDataType<T> = {
  code: number
  data: T
}

export type CommonErrorType = {
  message: string
  code: number
}
