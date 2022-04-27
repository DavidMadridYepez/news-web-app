import React, { useState } from 'react'

function Sidebar() {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }
  return (
    <div className='md:hidden bg-cyan-300 border-box fixed h-screen w-full flex flex-col  items-center'>
      <div className='bg-black flex justify-between p-5 items-center w-full'>
        <i>Logo</i>
        <button className={`${click ? '-rotate-90 duration-300' : 'rotate-0 duration-300'}`} onClick={handleClick}><img src="./images/menu.png" alt="" /></button>
      </div>
      <div>
        <button onClick={handleClick} className={`w-full -translate-x-full ${click ? 'transition duration-300 translate-x-0' : 'transition duration-300 delay-300'}`}>
          <h1 className='hover:bg-lime-500 duration-300 delay-100  p-7 text-white text-2xl'>Home</h1>
        </button>
        <button onClick={handleClick} className={`w-full translate-x-full ${click ? 'display transition duration-300 delay-100 translate-x-0' : 'transition duration-200 delay-200'}`}>
          <h1 className='hover:bg-lime-500 duration-300 delay-100  p-7 text-white text-2xl'>Home</h1>
        </button>
        <button onClick={handleClick} className={`w-full -translate-x-full ${click ? 'transition duration-300 delay-200 translate-x-0' : 'transition duration-300 delay-100'}`}>
          <h1 className='hover:bg-lime-500 duration-300 delay-100  p-7 text-white text-2xl'>Home</h1>
        </button>
        <button onClick={handleClick} className={`w-full translate-x-full ${click ? 'transition duration-300 delay-300 translate-x-0' : 'transition duration-300'}`}>
          <h1 className='hover:bg-lime-500 duration-300 delay-100  p-7 text-white text-2xl'>Home</h1>
        </button>
      </div>

    </div>
  )
}

export default Sidebar