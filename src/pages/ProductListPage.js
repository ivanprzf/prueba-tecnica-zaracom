import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';
import Item from '../components/Item';

class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch(
      "https://front-test-api.herokuapp.com/api/product")
        .then((res) => res.json())
        .then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true
      });
    });
  }

  handleKeyDown() {
    console.log('tecla');

  }

  render() {
    const { DataisLoaded, ItemisLoaded, items, item, view } = this.state;
    if (!DataisLoaded) {
      return <div><span className="h1"> Cargando productos.... </span> </div>;
    } else {
      return (
        <div className="App">
          <Header />
          <div className="grid-productos row" id="grid-productos">
            {
              items.map(function(item) {
                return <Item itemInfo={item} key={item.id} />
              })
            }
          </div>
        </div>
      );
    }
  }
}

export default ProductListPage;