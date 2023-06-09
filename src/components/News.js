import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { toHaveDescription } from '@testing-library/jest-dom/matchers';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizefirst = (text) => {
        return text.at(0).toUpperCase() + text.slice(1)
    }

    constructor(props) {
        super(props)

        console.log("Hello I am constructor from News Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizefirst(this.props.category)} - NewsSavy`


    }
    async updatepage() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=606b52d04cdc4d6aa97edcb8a254df24&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(10);
        console.log("this.state", this.state);
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
       
        console.log(parsedData)
        console.log("this.props", this.props)
        console.log(this.props.pageSize)
        // console.log("Cdm")
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100);
        console.log(this.state.progress,"this.state.progresssetProgress")
        this.state.progress=100;
        console.log(this.state.progress,"this.state.progresssetProgress")
        
        console.log("this.state", this.state);
    }
    async componentDidMount() {
        this.updatepage()
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=606b52d04cdc4d6aa97edcb8a254df24&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // console.log("this.state", this.state);
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData)
        // console.log("this.props", this.props)
        // console.log(this.props.pageSize)
        // // console.log("Cdm")
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false,
        // })
        // console.log("this.state", this.state);
    }
    HandlePrevious = async () => {
        //     console.log("P", this.state.page)
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=606b52d04cdc4d6aa97edcb8a254df24&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading: true});
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //    // console.log(parsedData)
        //     // console.log("Cdm")
        //     this.setState({
        //         page: this.state.page - 1, //to set state,upar link me -1 se save nhe horhe state
        //         articles: parsedData.articles,
        //         loading: false,

        //     })
        this.setState({
            page: this.state.page - 1, //to set state,upar link me -1 se save nhe horhe state
        })
        this.updatepage();
    }
    HandleNext = async () => {

        // console.log("n", this.state.page)
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) )
        // { 
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=606b52d04cdc4d6aa97edcb8a254df24&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading: true});
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     //console.log(parsedData)
        //     // console.log("Cdm")
        //     this.setState({
        //         page: this.state.page + 1,//to set state ,upar link me +1 se save nhe horhe state
        //         articles: parsedData.articles,
        //         loading: false,

        //     })
        // }
        this.setState({
            page: this.state.page + 1, //to set state,upar link me -1 se save nhe horhe state
        })
        this.updatepage();

    }
    fetchMoreData = async () => {
        
        this.setState({  page: this.state.page + 1}) //to set state,upar link me -1 se save nhe horhe state     
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=606b52d04cdc4d6aa97edcb8a254df24&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        console.log("this.state", this.state);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        console.log("this.props", this.props)
        console.log(this.props.pageSize)
        // console.log("Cdm")
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
      };
    render() {

        //console.log(" render")
        return (
            <>

                <h1 className='text-center' style={{ margin: '40px 0px' }}> NewsSavy - Top Headlines on {this.capitalizefirst(this.props.category)}</h1>
                {/* {this.state.loading && <Spinner/>} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className='container my-3'>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={!element.title ? element.title.slice(0, 48) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                    </div>
                    
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePrevious}>&larr; Previous </button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNext}>Next &rarr;</button>
                </div> */}
            </>

        )
    }
}

export default News