import React, { useEffect, useContext } from 'react'

import { AuthContext } from '../Context/AuthContext'
import { NewsItem } from '../services/newsAPI'


export default function Sidebar() {
  const { state, dispatch } = useContext(AuthContext)
  
  useEffect(() => {
    const getNews = async() => {
      const newsData = await fetch("/api/hello")
      const newsRespose = await newsData.json()
      if(newsRespose.articles){
        dispatch({
          type: 'FETCH_NEWS',
          payload: newsRespose.articles
        })
      }
    }
    getNews();
    
    // eslint-disable-next-line
  }, [])


  if (!state.news) {
    return (
      <div className="sidebar box">
        <h3>Security News</h3>
        <p>Loading...</p>
      </div>)
  }

  return (
    <div className="sidebar box">
      <div className="">
        <h3>Security News</h3>
        {
          state.news && state.news.map((newsItem: NewsItem) => (
            <div key={newsItem.title} className="sidebar__item">
              <h5>{newsItem.title}</h5>
              <a target="blank" rel="noreferrer" href={newsItem.url}>
                <p>{newsItem.description.slice(0, 65) + '...'}</p>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}


// export const getServerSideProps = async () => {
//   const newsRespose = await fetch("http://localhost:3000/api/hello", {
//     method: 'GET'
//   });
  
//   // const response = await fetch(`https://newsapi.org/v2/everything?q=cyber%20security&sortBy=popularity&pageSize=10&apiKey=e0e8226841c34783806528760fae44c7`)

//   // const newsRespose = await response.json()

//   console.log(newsRespose)
//   return {
//     props: { newsRespose }
//   };
// };
