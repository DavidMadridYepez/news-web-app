import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { BsApple } from 'react-icons/bs'

function Login() {
  return (
    <div className='w-fit p-8 md:p-10 bg-white space-y-7'>
      <h2 className='flex justify-center text-3xl font-bold'>Log in</h2>
      <div className='space-y-3'>
        <input className='bg-gray-200 p-4 pr-10 md:pr-20 rounded text-lg placeholder:text-gray-700' type="text" id='username' placeholder='Username' /> <br />
        <input className='bg-gray-200 p-4 pr-10 md:pr-20 rounded text-lg placeholder:text-gray-700' type="text" id='password' placeholder='Password' />
      </div>
      <div className='flex justify-between'>
        <div className='px-10 py-2 rounded bg-white drop-shadow-black drop-shadow'>
          <RiFacebookCircleLine />
        </div>
        <div className='px-10 py-2 rounded bg-white drop-shadow-black drop-shadow'>
          <FcGoogle />
        </div>
        <div className='px-10 py-2 rounded bg-white drop-shadow-black drop-shadow'>
          <BsApple />
        </div>
      </div>
      <div className='flex space-x-3 items-center'>
        <input type="checkbox" />
        <p>Stay conected</p>
      </div>
      <div className='flex justify-center' >
        <button className='px-5 py-0.5 bg-[#363636] text-[#FAFAF9] rounded-lg hover:brightness-125 text-lg' type='submit'>
          Log in
        </button>
      </div>
      <div className='flex flex-col items-center'>
        <p>Dont have an account?</p>
        <p>Sign up<a className='text-blue-600' href="/signup"> here</a></p>
      </div>
    </div>
  );
}

export default Login;