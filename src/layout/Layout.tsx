import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return <main className="main_container">{children}</main>
}

export default Layout
