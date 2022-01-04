import React from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';


class Item extends React.Component {
  constructor(props) {
    super(props);
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch(
      "https://front-test-api.herokuapp.com/api/product/" + this.props.itemInfo.id)
        .then((res) => res.json())
        .then((json) => {
      });
  }

  render() {
    return (
      <div className="itemProducto text-center col-md-4 col-lg-3 mb-5 h-100 position-relative" id={this.props.itemInfo.id}>
        <div className="p-3 shadow" onClick={this.handleClick}>
          <Image className="mb-3" imgUrl={this.props.itemInfo.imgUrl}/>
          <h2 className="h2 marca mb-0">{this.props.itemInfo.brand}</h2>
          <h3 className="h4 modelo">{this.props.itemInfo.model}</h3>
          <p className="h2 fw-bold precio">{this.props.itemInfo.price}€</p>
          <Link to={`/${this.props.itemInfo.id}`} className="stretched-link"></Link>
        </div>
      </div>
    );
  }
}

export default Item;