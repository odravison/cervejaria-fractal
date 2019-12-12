import React from 'react';
import './BeerDetailImage.scss'


class BeerDetailImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const beerImageClassName = "BeerImage";

    const { imageURL, volume } = this.props;
    
    return (
      <img className={beerImageClassName} src={imageURL} alt={volume ? `${volume.value} ${volume.unit}` : ''}></img>
    );
  }
}

export default BeerDetailImage;