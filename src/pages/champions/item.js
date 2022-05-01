import React from 'react';

const Item = ({ data }) => {
  return (
    <div className='flex flex-row flex-wrap justify-center px-5' >
      {data.map((champion) => {
        const { id, title, img } = champion
        return (
          <div key={id} className='m-3 cursor-pointer'>
            <div className='overflow-hidden'>
              <img className='hover:scale-110 duration-200' src={img} alt={title} />
            </div>
            <h3 className='font-bold tracking-wider bg-neutral-900 p-3 text-white text-xl'>{title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Item;