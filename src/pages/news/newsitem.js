import React from 'react';

const NewsItem = ({ headline, lead_paragraph, web_url, multimedia, byline }) => {
  return (
    <div className='flex flex-col mx-10 py-10 border-b-slate-300 border-white border-2'>
      <a target='blank' href={web_url} className='space-y-3'>
        <h3 className='text-2xl'>{headline.main}</h3>
        <p className='text-gray-500 text-base'>{lead_paragraph}</p>
        <p className='text-gray-500 text-md'>{byline.original}</p>
      </a>
    </div>
  );
}

export default NewsItem;