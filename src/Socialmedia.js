import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './News.css';




function Socialmedia({fetchUrl}) {


    const [NEWS, setNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://newsapi.org/v2/everything?q=socialmedia&from=today&apiKey=e39c3ad28c6d41ad9bd45f164ce3fa09`);
            console.log(request.data);
            setNews(request.data.articles);
            return request;
        } fetchData();
    }, [fetchUrl]);
    // console.log(NEWS)

    // Handel Click in image open new Tab
    const handleClick = (NEWSSite) => {
        console.log("Click it")
        window.open(NEWSSite.url)
    };

    return (
        <header className="news_contents">
        <div className="ns_view">
            {/* NEWS VIEW  */}
            {NEWS.map(NEWSSite => (
                // 
                <div id="newsID" className="news_Show">
                    <div key={NEWSSite.id}>
                        {/* Title */}
                        <h3 className="title_view">
                            {NEWSSite.title}
                        </h3>
                        {/* News Image */}
                        <img className="poster_view"
                            onClick={() =>
                                handleClick(NEWSSite)
                            }
                            src={`${NEWSSite.urlToImage}`} alt={NEWSSite.name}
                        />
                        {/* News description */}
                        <p className="description_view">
                            {NEWSSite.description}
                        </p>
                        {/* Author NAme */}
                        <p className="author_view">
                            {NEWSSite.author}
                        </p>
                        {/* publishedAt Time */}
                        <data className="publishedAt_view">
                            {NEWSSite.publishedAt}
                        </data>
                    </div>
                </div>
            ))}
        </div>
    </header>
    )
}
export default Socialmedia;