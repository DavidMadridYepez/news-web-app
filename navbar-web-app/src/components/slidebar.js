import React from 'react'
import { Link } from 'react-router-dom'

function Slidebar() {
  return (
    <div className='text-white space-y-10 text-2xl -translate-x-full bg-neutral-800 flex absolute  flex-col bg-blue-300 items-center justify-center h-screen w-screen p-10'>
      <button className='transition ease-in-out hover:translate-x-5 p-3'>
        <Link to='/'>Home</Link>
      </button >
      <button className='transition ease-in-out hover:translate-x-5 p-3'>
        <Link to='/services'>Services</Link>
      </button>
      <button className='transition ease-in-out hover:translate-x-5 p-3'>
        <Link to='/products'>Products</Link>
      </button>
    </div >
  )
}

export default Slidebar