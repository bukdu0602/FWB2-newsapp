
// require('dotenv').config();
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Banner = () => {
    // const apiKey = process.env.API_KEY;
    const apiKey = '498c91a98eaa4332b4f4577a76220201'
    const [news, setNews] = useState([])
    const [hero, setHero] = useState()

    useEffect(() => {
        console.log("11222")
         async function getNews() {
            console.log("heheheffefeeh")

         const result = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2022-01-25&sortBy=popularity&apiKey=${apiKey}`)
         console.log(result.data.articles)
         console.log("heheheh")
         setNews(result.data.articles)
            // .then(res => {
            //     const news = res.data;
            //     setHero(news.articles[0])
            //     setNews(news.articles.splice(1,13))
            //     console.log(news.articles[0].title)
            // })
        }
      
        getNews();

            
    }, []);

    return (
        <div className='banner'>
        {news[0].title}
        {/* {news.map((item)=>{
            item.title
        })} */}
        {/* <h1>{hero.title}</h1> */}
        </div>
    );
}

export default Banner;