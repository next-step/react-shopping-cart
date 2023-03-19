import React from 'react'
import { AiFillShop } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link to='/' className={`flex items-center`}>
      <AiFillShop className='text-4xl mr-2' />
      <h1 className={`text-xl font-semibold`}>NEXTSTEP</h1>
    </Link>
  )
}

export default Logo
