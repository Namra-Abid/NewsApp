import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {
        let { title, description, imageUrl,newsUrl } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl?imageUrl:"https://static.toiimg.com/thumb/msid-100882990,width-1070,height-580,imgsize-54578,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title?title:"No title available"}</h5>
                        <p className="card-text">{description?description:"No description available"}</p>
                        <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div >

        )
    }
}

export default NewsItem