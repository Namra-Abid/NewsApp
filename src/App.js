
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar />
        
        {/* <News pageSize={this.pageSize}  category='science'/> */}
        <Routes>
            <Route exact path="/" element={<News key='science' pageSize={this.pageSize}  category='science'/>}></Route>
            <Route exact path="/business" element={<News key='business' pageSize={this.pageSize}  category='business'/>}></Route>
            <Route exact path="/entertainment" element={<News key='entertainment' pageSize={this.pageSize}  category='entertainment'/>}></Route>
            <Route exact path="/general" element={<News key='general' pageSize={this.pageSize}  category='general'/>}></Route>
            <Route exact path="/health" element={<News key='health' pageSize={this.pageSize}  category='health'/>}></Route>
            <Route exact path="/science" element={<News key='science' pageSize={this.pageSize}  category='science'/>}></Route>
            <Route exact path="/sports" element={<News key='sports' pageSize={this.pageSize}  category='sports'/>}></Route>
            <Route exact path="/technology" element={<News key='technology' pageSize={this.pageSize}  category='technology'/>}></Route>            
          </Routes>
          </BrowserRouter>

      </div>
    )
  }
}

