import React from 'react';
import LabelValue from '../../../layout/Labels/LabelValue';

class BeerDetailName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <LabelValue label="Name: " value={ this.props.beerName } />
    );
  }
}
 
export default BeerDetailName;