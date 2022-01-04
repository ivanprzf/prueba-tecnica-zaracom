import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div className="buscador">
        <form className="d-flex">
          <input className="form-control me-2" id="buscador" type="search" placeholder="Buscar..." aria-label="Buscar" />
        </form>
      </div>
    );
  }
}

export default Search;