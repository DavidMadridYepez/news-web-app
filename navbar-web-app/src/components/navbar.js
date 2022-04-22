import React, { useState } from 'react'
import Slidebar from './slidebar'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div>
      <div className={`md:hidden ${click ? 'display transition ease-in' : 'translate-x-full transition ease-in'}`}>
        <Slidebar />
      </div>
      <nav className={`static md:flex md:justify-between bg-slate-700 text-white `}>
        <div className={`flex justify-between p-5`}>
          <i>logo</i>
          <button className={`md:hidden absolute top-5 right-5 ${click ? 'transition ease-in rotate-0' : 'transition ease-in -rotate-90'}`} onClick={handleClick}><FaBars /></button>
        </div>
        <div className='hidden md:flex p-5 space-x-10'>
          <button className='hover:scale-x-125 transition ease-in-out hover:-translate-y-1'>
            <Link to='/'>Home</Link>
          </button>
          <button className='hover:scale-x-125 transition ease-in-out hover:-translate-y-1'>
            <Link to='/services'>Services</Link>
          </button>
          <button className='hover:scale-x-125 transition ease-in-out hover:-translate-y-1'>
            <Link to='/products'>Products</Link>
          </button>
        </div>
      </nav>
    </div>

  )
}

export default Navbar