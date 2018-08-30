import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = { 
      // slidesList : this.props.slidesList,
    }
    // this.displayItems = this.displayItems.bind(this);
  }



  render() {
    
    // var ItemList = this.props.slidesList.map(this.displayItems); 

    return (
      <div className="tile">
          <img className="tile_img" src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

export default Item;
