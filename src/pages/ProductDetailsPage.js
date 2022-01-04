import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import Image from '../components/Image';
import {Link, useParams} from "react-router-dom";

export default function ProductDetailsPage(props) {

  const estadoInicial = {
    producto: {},
    cargando: true,
  };
  const [producto, setProducto] = useState(estadoInicial);
  const { idproducto } = useParams();

  useEffect(() => {
    const getProducto = async () => {
      fetch(
        `https://front-test-api.herokuapp.com/api/product/${idproducto}`)
          .then((res) => res.json())
          .then((json) => {
            setProducto(json);
      });

      // Actualización del estado
    }

    // Ejecutamos la función
    getProducto();
  }, []);



  // Mostramos por pantalla los dato
  return producto.cargando ? (
    <div>Cargando...</div>
  ) : (
    <div className="App">
      <Header productName={producto.brand + ' ' + producto.model}/>
      <div className="detalles-producto container">
        <div className="row">
          <div className="col-md-6"><Image imgUrl={producto.imgUrl}/></div>
          <div className="col-md-6">
            <p className="h4 mb-3 fw-bold text-decoration-underline">Características del dispositivo</p>
            <h1>{producto.brand}<br/>
            <span className="h2">{producto.model}</span></h1>
            <p className="h2">{producto.price}€</p>
            <p>CPU: {producto.cpu}</p>
            <p>{producto.ram}</p>
            <p>{producto.os}</p>
            <p>{producto.displayResolution}</p>
            <p>Bateria: {producto.battery}</p>
            <p>Camara frontal: {producto.primaryCamera}</p>
            <p>Camara trasera: {producto.secondaryCmera}</p>
            <p>Dimensiones: {producto.dimentions}</p>
            <p>Peso: {producto.weight}g</p>
            <p className="h4 mb-3 fw-bold text-decoration-underline">Opciones</p>
            <label className="h6">Color del dispositivo</label>
            <select className="form-select" name="color" aria-label="Color">
              {producto.colors.map((value, i) => {
                return (<option key={value} value={i}>{value}</option>);
              })}
            </select>
            <label className="h6">Almacenamiento del dispositivo</label>
            <select className="form-select" name="color" aria-label="Color">
              {producto.internalMemory.map((value, i) => {
                return (<option key={value} value={i}>{value}</option>);
              })}
            </select>
            <button className="btn btn-primary btn-lg w-100 mt-4 ">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function añadirAlCarrito() {

}