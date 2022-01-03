import React from 'react';
import Search from './Search';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
          <div className="container-fluid d-flex justify-content-between">
            <a className="navbar-brand" href="#">PCCOMPONENTES</a>
            <Search />
          </div>
        </nav>
        <nav aria-label="breadcrumb" className="px-3 w-100">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </header>
    );
  }
}

export default Header;