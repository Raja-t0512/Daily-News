import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    let updateNews = async () => {
        props.setProgress(0);
        let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(URL);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    let fetchMoreData = async () => {
        setPage(page + 1);
        let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setLoading(true);
        let data = await fetch(URL);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }
    function capitalize(category) {
        return category[0].toUpperCase() + category.slice(1);
    }
    return (
        <>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container my-5 ">
                    <h1 className={`text-center ${props.mode === 'dark' ? 'text-light' : ''}`} style={{ marginTop: "60px", fontSize: "4rem" }}>Daily News - Top {capitalize(props.category)} News</h1>
                    {loading && <Spinner />}
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 50) : "Title not available"} desc={element.description ? element.description.slice(0, 70) : `Click on "Read more" to read the description`} imgUrl={element.urlToImage} Url={element.url} mode={props.mode} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News;