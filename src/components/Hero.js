
// require('dotenv').config();
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import newsData from '../top-headlines.json'

const Hero = () => {
    // const apiKey = process.env.API_KEY;
    // const apiKey = '498c91a98eaa4332b4f4577a76220201'
    const [hero, setHero] = useState()

    useEffect(() => {
        const modifiedDataInArray = newsData.articles[0].title.split(/[-|]/)
        newsData.articles[0].title = modifiedDataInArray[0]
        setHero(newsData.articles[0])
        console.log(newsData.articles)

        // const URL = `https://newsapi.org/v2/everything?q=Apple&from=2022-01-25&sortBy=popularity&apiKey=${apiKey}`
        // async function getNews() {
        //  await axios.get('../../top-headlines.json')
        //  console.log(result.data.articles)
        //  console.log("heheheh")
        //  setNews(result.data.articles)
        //     .then(res => {
        //         const news = res.data;
        //         setHero(news.articles[0])
        //         setNews(news.articles.splice(1,13))
        //         console.log(news.articles)
        //     })
        // }
      
        // getNews();

            
    }, []);

    return (
        <div>
            {hero && 
                <article className='hero'>
                    <figure>
                        <img src={hero.urlToImage} alt="" />
                    </figure>
                    <span>
                    <h2>{hero.title}</h2>
                    <a href={hero.url}>Read More</a>
                    </span>
                </article>
            }
        </div>
    );
}

export default Hero;