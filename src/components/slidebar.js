import React from 'react'
import { Link } from 'react-router-dom'

function Slidebar({ handleClick }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-red-500 text-2xl space-y-10'>
      <div className='w-full'>
        <button className='transition duration-300 w-full hover:bg-neutral-900 hover:text-white p-10' onClick={handleClick}>
          <Link to='/'>Home</Link>
        </button >
        <button className='transition duration-300 w-full hover:bg-neutral-900 hover:text-white p-10' onClick={handleClick}>
          <Link to='/services'>Champions</Link>
        </button>
        <button className='transition duration-300 w-full hover:bg-neutral-900 hover:text-white p-10' onClick={handleClick}>
          <Link to='/products'>News</Link>
        </button>
      </div>
      <div className='flex space-x-3'>
        <button className='w-40 transition px-3 py-2 duration-300 hover:bg-neutral-900 hover:text-white rounded border-2 border-neutral-900' onClick={handleClick}>
          <Link to='/get-started'>Log in</Link>
        </button>
        <button className='w-40 transition px-3 py-2 duration-300 hover:bg-neutral-900 hover:text-white rounded border-2 border-neutral-900' onClick={handleClick}>
          <Link to='/get-started'>Sign Up</Link>
        </button>
      </div>
    </div >
  )
}

export default Slidebar