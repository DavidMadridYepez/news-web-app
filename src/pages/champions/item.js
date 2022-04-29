import React from 'react';

const Item = ({ data }) => {
  return (
    <div className='flex flex-row flex-wrap justify-center px-5' >
      {data.map((champion) => {
        const { id, title, img } = champion
        return (
          <div key={id} className='p-3'>
            <img src={img} alt={title} />
            <h3 className='bg-gradient-to-r from-cyan-900 to-violet-900 p-3 text-white text-xl hover:bg-indigo-900'>{title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Item;