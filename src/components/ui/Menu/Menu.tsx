import React from 'react'
import { Link } from 'react-router-dom'

export type MenuType = {
  /** 메뉴 아이디 */
  id: string
  /** 화면에 표시되는 메뉴 이름 */
  name: string
  /** 클릭 시 이동되는 패스 */
  path: string
}

type MenuProps = {
  /** 메뉴 데이터 */
  menus: MenuType[]
}

const Menu: React.FC<MenuProps> = ({ menus }) => {
  return (
    <ul className='flex font-semibold'>
      {menus.map((menu) => (
        <li key={menu.id}>
          <Link to={menu.path} className='mx-4'>
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
