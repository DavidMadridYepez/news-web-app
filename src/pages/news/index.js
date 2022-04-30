import React, { useState, useEffect } from 'react';
import NewsItem from './newsitem';

function NewsList() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=games&api-key=rHCfBZFvQHTBgr94HJLA5FG4ixNiHLUG')
      const articles = await response.json()
      setArticles(articles.response.docs)
    }
    getArticles()
  }, [])

  return (
    <div className='lg:px-44 md:px-20'>
      <h1 className='text-5xl p-10 pb-0 flex justify-center font-bold text-[#202020]'>Last News</h1>
      {articles.map((article, i) => {
        return (
          <div>
            <NewsItem key={i} {...article} />
          </div>
        );
      })}
    </div>
  );
}

export default NewsList;