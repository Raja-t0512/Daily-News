import React from 'react'
import image from './Images/news.jfif'

const NewsItem = (props) => {
    return (
        <div>
            <div className="card">
                <img src={props.imgUrl ? props.imgUrl : image} className="card-img-top" alt="Nothing to preview" id="newsimage" />
                <div className="card-body">
                    <h5 className="card-title"><a href={props.Url} target="_blank" className="newstitle" rel="noreferrer">{props.title}...</a></h5>
                    <p className="card-text">{props.desc}...</p>
                    <p className="card-text"><small id="extra" className="text-muted">By {props.author ? props.author : 'Unknown'} on {new Date(props.date).toDateString()}</small></p>
                    <a href={props.Url} target="_blank" rel="noreferrer" className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'}`}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;