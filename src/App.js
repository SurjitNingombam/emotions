import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Components/Header.js';
import Banner from './Components/Banner.js';
import Carousel from './Components/Carousel.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Carousel />
      </div>
    );
  }
}

export default App;
