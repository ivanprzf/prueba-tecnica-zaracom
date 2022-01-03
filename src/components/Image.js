import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <img className="mb-3" src={this.props.imgUrl} alt="productImage" />
    );
  }
}

export default Image;