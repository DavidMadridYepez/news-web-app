import React, { useState } from 'react'
import Slidebar from './slidebar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [loaded, setLoaded] = useState('home')
  const handleClick = () => setClick(!click)


  return (
    <div>
      <div className={`md:hidden fixed w-screen -translate-x-full ${click ? ' transition duration-500 translate-x-0' : 'transition duration-500'}`}>
        <Slidebar handleClick={handleClick} />
      </div>
      <nav className={`md:flex md:justify-between bg-neutral-900 px-5`}>
        <div className={`flex justify-between items-center w-1/3 py-3`}>
          <div className='flex items-center space-x-2'>
            <a href="/"><img className='w-14' src="./images/logo-puño3.jpg" alt="" /></a>
          </div>
          <button className={`md:hidden absolute right-5 ${click ? 'fixed transition duration-300 -rotate-90' : 'transition duration-300 rotate-0'}`} onClick={handleClick}> <img src="./images/menu (2).png" alt="" /></button>
        </div>
        <div className='hidden md:flex space-x-10 w-1/3 justify-center'>
          <button onClick={() => setLoaded('home')} className={`text-white border-neutral-900 border-b-4 duration-300 hover:text-xl ${loaded === 'home' && 'text-xl border-b-red-500'}`}>
            <Link className='py-5 px-2' to='/'>HOME</Link>
          </button>
          <button onClick={() => setLoaded('champions')} className={`text-white border-neutral-900 border-b-4 duration-300 hover:text-xl ${loaded === 'champions' && 'text-xl border-b-red-500'}`}>
            <Link className='py-5 px-2' to='/champions'>CHAMPIONS</Link>
          </button>
          <button onClick={() => setLoaded('news')} className={`text-white border-neutral-900 border-b-4 duration-300 hover:text-xl ${loaded === 'news' && 'text-xl border-b-red-500'}`}>
            <Link className='py-5 px-2' to='/news'>NEWS</Link>
          </button>
        </div>
        <div className='hidden md:flex space-x-5 w-1/3 justify-end my-5'>
          <button onClick={() => setLoaded('login')} className={`transition duration-200 hover:bg-white hover:text-black text-white rounded border border-white ${loaded === 'login' && 'text-black bg-white'}`}>
            <Link className='p-4' to='/log-in'>LOG IN</Link>
          </button>
          <button onClick={() => setLoaded('signup')} className={`transition duration-200 hover:bg-white hover:text-black text-white rounded border border-white ${loaded === 'signup' && 'text-black bg-white'}`}>
            <Link className='p-4' to='/sign-up'>SIGN UP</Link>
          </button>
        </div>
      </nav >
    </div >
  )
}

export default Navbar