import Image from 'next/image'
import React from 'react'
import MenuIcon from '../assets/menu.svg'

const Menu = () => {
  return (
    <Image src={MenuIcon} width={22} height={26} alt='menu'/>
  ) 
}

export default Menu