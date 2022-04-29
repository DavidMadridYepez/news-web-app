import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { BsApple } from 'react-icons/bs'

function SignUpForm() {
  return (
    <div className='h-screen flex justify-center items-center ' style={{
      backgroundImage: `url('/images/wp4.jpg')`
    }}>
      <div className='w-fit p-8 md:p-10 bg-white space-y-7'>
        <h2 className='flex justify-center text-3xl font-bold'>Sign up</h2>
        <div className='space-y-3 flex flex-col'>
          <input className='bg-gray-200 p-4 pr-10 md:pr-20 rounded text-lg placeholder:text-gray-700' type="text" id='username' placeholder='Username' />
          <input className='bg-gray-200 p-4 pr-10 md:pr-20 rounded text-lg placeholder:text-gray-700' type="text" id='email' placeholder='Email' />
          <input className='bg-gray-200 p-4 pr-10 md:pr-20 rounded text-lg placeholder:text-gray-700' type="text" id='password' placeholder='Password' />
          <input className='bg-gray-200 p-4 pr-10 md:pr-20 rounded text-lg placeholder:text-gray-700' type="text" id='confirm-password' placeholder='Confirm password' />
        </div>
        <div className='flex justify-between'>
          <div className='px-10 py-2 rounded bg-white drop-shadow-black drop-shadow'>
            <RiFacebookCircleLine />
          </div>
          <div className='px-10 py-2 rounded bg-white drop-shadow-black drop-shadow'>
            <FcGoogle />
          </div>
          <div className=' px-10 py-2 rounded bg-white drop-shadow-black drop-shadow'>
            <BsApple />
          </div>
        </div>
        <div className='flex justify-center' >
          <button className='px-5 py-0.5 bg-[#363636] rounded-lg hover: brightness-125 text-[#FAFAF9] text-lg ' type='submit'>
            Sign up
          </button>
        </div>
        <div className='flex flex-col items-center'>
          <p>Already have an account?</p>
          <p>Log in<a className='text-blue-600' href="/login"> here</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;