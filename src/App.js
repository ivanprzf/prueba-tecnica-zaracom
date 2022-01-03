import './App.css';
import React from 'react';
import Header from './components/Header';
import Item from './components/Item';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
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

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) {
      return <div><h1> Cargando productos.... </h1> </div>;
    } else{
      return (
        <div className="App">
          <Header />


          <div className="grid-productos row">
            {
              items.map(function(item) {
                return <Item itemInfo={item} key={item.id}/>
              })
            }
          </div>
        </div>
      );
    }
  }
}

export default App;
