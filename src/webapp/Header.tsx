import React from 'react'
import { ModeToggle } from './ModeToggle'

const Header = () => {
  return (
    <div className='navbar flex items-center justify-between'>
        <h1 className='font-semibold text-2xl font-sans'>TreOre</h1>
        <div className='flex gap-2 items-center '>
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Header