import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import { updateCarritoCabecera } from '../App';

class Header extends React.Component {
  render() {
    var localCartItems = localStorage.getItem('carritoItems');
    var itemsCarritoHtml = '0';
    if(localCartItems && localCartItems != '') {
      itemsCarritoHtml = localCartItems;
    } else {
      itemsCarritoHtml = '0';
    }

    let productName = this.props.productName;
    if(productName) {
      return (
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container-fluid d-flex justify-content-between">
              <Link to="/" className="navbar-brand">PCSIMPONENTES</Link>
              <div className="text-white">Items carrito: <span id="items-carrito">{itemsCarritoHtml}</span></div>
            </div>
          </nav>
          <nav aria-label="breadcrumb" id="breadcrumb" className="px-3 w-100">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><Link to={`/`}>Inicio</Link></li>
              <li className="breadcrumb-item">{productName}</li>
            </ol>
          </nav>
        </header>
      );
    } else {
      return (
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container-fluid d-flex justify-content-end">
              <Link to="/" className="navbar-brand me-auto">PCSIMPONENTES</Link>
              <Search />
              <div className="text-white">Items carrito: <span id="items-carrito">{itemsCarritoHtml}</span></div>
            </div>
          </nav>
          <nav aria-label="breadcrumb" id="breadcrumb" className="px-3 w-100">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item">Inicio</li>
            </ol>
          </nav>
        </header>
      );
    }
  }
}

export default Header;

document.body.addEventListener('keyup', function(event) {
  var productos = document.body.querySelectorAll('.itemProducto');
  var buscador = document.body.querySelector('#buscador');
  let buscadorValue = buscador.value.toLowerCase().trim();
  if(buscador === document.activeElement) {
    //Recorro los productos y los muestro solo si su marca o modelo contiene el value del buscador
    productos.forEach(function(prod) {
      prod.classList.add('d-none');
      if(prod.querySelector('.marca').innerHTML.toLowerCase().includes(buscadorValue) || 
          prod.querySelector('.modelo').innerHTML.toLowerCase().includes(buscadorValue)) {
        prod.classList.remove('d-none');
      }
    });
  }
});