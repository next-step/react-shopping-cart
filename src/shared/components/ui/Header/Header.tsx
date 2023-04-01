import React from 'react'
import { MENU } from '../../../constants/menu'
import { Logo } from '../Logo'
import { Menu } from '../Menu'

const Header = () => {
  return (
    <header className='w-full bg-emerald-400 text-white p-2'>
      <div className='container mx-auto flex justify-between items-center'>
        <Logo />
        <nav>
          <Menu menus={MENU} />
        </nav>
      </div>
    </header>
  )
}

export default Header
