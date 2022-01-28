import React, { useState, useEffect } from 'react';
import newsData from '../top-headlines.json'

const Articles = () => {
    const [articles, setarticles] = useState()

    useEffect(() => {
        
        for(let i=0; i<newsData.articles.length; i++){
            const modifiedDataInArray = newsData.articles[i].title.split(/[-|,]/)
            newsData.articles[i].title = modifiedDataInArray[0]
        }
        
        setarticles(newsData.articles.splice(1,12))

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
        <section className='articles'>
        {articles &&
            articles.map(article => (
            <article className='cards' key={article.url}>
                <figure>
                    <img src={article.urlToImage} alt="" />
                </figure>
                <div>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url}>Read More</a>
                </div>
            </article>
        ))
        }
        </section>
    );
}

export default Articles;