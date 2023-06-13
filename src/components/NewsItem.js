import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {
        let { title, description, imageUrl,newsUrl,author,date } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                

                    <img src={imageUrl?imageUrl:"https://static.toiimg.com/thumb/msid-100882990,width-1070,height-580,imgsize-54578,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description?description:"No description available"}</p>
                        <p className='card-text'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
                        <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div >

        )
    }
}

export default NewsItem