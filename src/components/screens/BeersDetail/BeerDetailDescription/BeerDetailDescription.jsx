import React from 'react';
import LabelValue from '../../../layout/Labels/LabelValue';

class BeerDetailDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <LabelValue value={this.props.beerDescription} label="Description: " />
    );
  }
}
 
export default BeerDetailDescription;