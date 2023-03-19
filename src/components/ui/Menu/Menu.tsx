import React from 'react'
import { Link } from 'react-router-dom'

export type MenuType = {
  id: string
  name: string
  path: string
}

type MenuProps = {
  menus: MenuType[]
}

const Menu: React.FC<MenuProps> = ({ menus }) => {
  return (
    <ul className='flex font-semibold'>
      {menus.map((menu) => (
        <Link to={menu.path} className='mx-4' key={menu.id}>
          {menu.name}
        </Link>
      ))}
    </ul>
  )
}

export default Menu
