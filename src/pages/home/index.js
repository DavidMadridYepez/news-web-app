import React from 'react';

function Home() {
  return (
    <div className='h-screen flex items-center space-y-20 justify-center flex-col px-3'>
      <h1 className='font-bold text-4xl md:text-7xl xl:text-9xl italic'>LEAGUE OF LEGENDS</h1>
      <div className='flex text-lg md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-3'>
        <button className='w-80 md:w-60 border-2 border-neutral-900 px-10 py-3 hover:bg-neutral-900 hover:text-white duration-200'>
          PLAY FOR FREE
        </button>
        <button className='w-80 md:w-60 border-2 border-black bg-neutral-900 text-white px-10 py-3 hover:bg-white hover:text-black duration-200'>
          DOWNLOAD GAME
        </button>
      </div>
    </div>
  );
}

export default Home;