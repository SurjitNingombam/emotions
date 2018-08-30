import React, { Component } from 'react';
import CarouselSingle from './CarouselSingle.js';
import EmotionsData from './../JSON/EmotionsData.json';

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = { 
      EmotionsData : EmotionsData,
    }
    this.displayCarousel = this.displayCarousel.bind(this);
  }

  displayCarousel(item, i){
    return(
      <CarouselSingle key={item.id} name={item.name} 
       slidesList={item.slidesList}>
      </CarouselSingle>
      );
  }

  render() {
    var CarouselList = this.state.EmotionsData.map(this.displayCarousel); 

    return (
      <div>
      {CarouselList}
      </div>
    );
  }
}

export default Carousel;
