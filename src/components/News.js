import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super()

        console.log("Hello I am constructor from News Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=606b52d04cdc4d6aa97edcb8a254df24&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData)
        // console.log("Cdm")
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }
    HandlePrevious = async () => {
        console.log("P", this.state.page)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=606b52d04cdc4d6aa97edcb8a254df24&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData)
        // console.log("Cdm")
        this.setState({
            page: this.state.page - 1, //to set state,upar link me -1 se save nhe horhe state
            articles: parsedData.articles,

        })
    }
    HandleNext = async () => {

        console.log("n", this.state.page)
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) 
        { }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=606b52d04cdc4d6aa97edcb8a254df24&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            //console.log(parsedData)
            // console.log("Cdm")
            this.setState({
                page: this.state.page + 1,//to set state ,upar link me +1 se save nhe horhe state
                articles: parsedData.articles,

            })
        }

    }
    render() {

        //console.log(" render")
        return (
            <div className='container my-3'>
                <h1>NewsSavy - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={!element.title ? element.title.slice(0, 48) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>

                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePrevious}>&larr; Previous </button>
                    <button type="button" className="btn btn-dark" onClick={this.HandleNext}>Next &rarr;</button>
                </div>
            </div>

        )
    }
}

export default News