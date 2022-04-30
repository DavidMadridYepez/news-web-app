import React, { useState } from 'react';

function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex justify-center items-center flex-col space-y-3 p-12 border-2 border-gray-200'>
        <h1 className='font-bold text-3xl pb-10 pt-4'>Log In</h1>
        <input value={user} onChange={e => setUser(e.target.value)} type="text" placeholder='Username' className='w-full bg-gray-200 placeholder:text-neutral-900 rounded py-4 px-5' />
        <input value={password} onChange={e => setPassword(e.target.value)} type="text" placeholder='Password' className='w-full bg-gray-200 placeholder:text-neutral-900 rounded py-4 px-5' />
        <div className='flex space-x-3 pt-3'>
          <div className='bg-blue-600 py-3 px-10 rounded'>
            <img src="./images/facebook.png" alt="" />
          </div>
          <div className='border-2 border-gray-100 bg-white py-3 px-10 rounded'>
            <img src="./images/google.png" alt="" />
          </div>
          <div className='bg-black py-3 px-10 rounded'>
            <img src="./images/appel.png" alt="" />
          </div>
        </div>
        <div className='space-x-3 w-full'>
          <input type="checkbox" id='Check' />
          <label htmlFor="Check">Stay Connected</label>
        </div>
        <button className={`border-2 p-6 rounded-3xl ${user && password ? 'bg-red-500 duration-300 border-white' : 'border-gray-300 duration-300'}`}>
          {user && password ? <img src="./images/next.png" alt="" /> : <img src="./images/next(1).png" alt="" />}
        </button>
        <div className='flex flex-col text-neutral-500'>
          <p>Cant Log In?</p>
          <p>Sign Up <a className='text-blue-800' href="/sign-up">Here!</a></p>
        </div>
      </div >
    </div >
  );
}

export default Login;