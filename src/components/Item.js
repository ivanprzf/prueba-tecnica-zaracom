import React from 'react';
import Image from './Image';

class Item extends React.Component {
  render() {
    return (
      <div className="itemProducto text-center col-md-4 col-lg-3 mb-5 h-100 position-relative" id={this.props.itemInfo.id}>
        <div class="p-3 shadow">
          <Image className="mb-3" imgUrl={this.props.itemInfo.imgUrl}/>
          <a className="stretched-link text-decoration-none text-black" href={this.props.itemInfo.id}>
            <h2 className="h2 marca mb-0">{this.props.itemInfo.brand}</h2>
            <h3 className="h4 modelo">{this.props.itemInfo.model}</h3>
          </a>
          <p className="h2 fw-bold precio">{this.props.itemInfo.price}€</p>
        </div>
      </div>
    );
  }
}

export default Item;