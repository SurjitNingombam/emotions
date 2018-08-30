import React, { Component } from 'react';
import Item from './Item.js';
import Slider from "react-slick";

class CarouselSingle extends Component {
  constructor(props){
    super(props);
    this.state = { 
      // slidesList : this.props.slidesList,
    }
    this.displayItems = this.displayItems.bind(this);
  }

  displayItems(item, i){
    return(
        // <img key={item.id} src={item.url} alt={item.id+"'s img"} />
        <Item key={item.id} src={item.url} alt={item.id+"'s img"}></Item>
      );
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      lazyLoad:true,
      slidesToShow: 6,
      slidesToScroll: 5
    };
    
    var ItemList = this.props.slidesList.map(this.displayItems); 

    return (
      <div className="container">
        <h1 className="slider_title">{this.props.name}</h1>
        <div className="sliderTab">
          <Slider {...settings}>
            {ItemList}
          </Slider>
        </div>
      </div>
    );
  }
}

export default CarouselSingle;
