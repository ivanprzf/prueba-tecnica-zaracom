import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter as Router, useRoutes, useParams } from 'react-router-dom';


import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';


export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ProductListPage />} />
      <Route path="/:idproducto" element={<ProductDetailsPage />} />
    </Routes>
  );
}

export function updateCarritoCabecera() {
  let itemsCarritoHtml = document.body.querySelector('#items-carrito');
  var localCartItems = localStorage.getItem('carritoItems');
  if(localCartItems && localCartItems != '') {
    itemsCarritoHtml.innerHTML = localCartItems;
  } else {
    itemsCarritoHtml.innerHTML = '0';
  }
}