
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=15;
  state={
    progress:0
  }
  // setProgress=(progress)=>{
  //   // this.setState({progress:progress} )
  //   this.state.progress=progress
  // }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
    
        
        {/* <News setProgress={this.setProgress}   pageSize={this.pageSize}  category='science'/> */}
        <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}   key='science' pageSize={this.pageSize}  category='science'/>}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress}   key='business' pageSize={this.pageSize}  category='business'/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}   key='entertainment' pageSize={this.pageSize}  category='entertainment'/>}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress}   key='general' pageSize={this.pageSize}  category='general'/>}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress}   key='health' pageSize={this.pageSize}  category='health'/>}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress}   key='science' pageSize={this.pageSize}  category='science'/>}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress}   key='sports' pageSize={this.pageSize}  category='sports'/>}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress}   key='technology' pageSize={this.pageSize}  category='technology'/>}></Route>            
          </Routes>
          </BrowserRouter>

      </div>
    )
  }
}

