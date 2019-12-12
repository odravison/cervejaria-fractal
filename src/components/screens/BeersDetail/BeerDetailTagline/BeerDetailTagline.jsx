import React from 'react';
import LabelValue from '../../../layout/Labels/LabelValue';

class BeerDetailTagline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <LabelValue label="Tagline:" value={this.props.beerTagline} />
    );
  }
}
 
export default BeerDetailTagline;