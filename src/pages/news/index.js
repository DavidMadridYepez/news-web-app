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
    <div className='py-10 sm:p-2 lg:px-44 md:p-20'>
      <h1 className='text-5xl flex justify-center p-5 font-bold text-[#202020]'>Last News</h1>
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