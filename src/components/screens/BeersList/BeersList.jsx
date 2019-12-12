import React from 'react';
import List from '../../layout/List/List';
import BeerItemRow from './BeerItemRow';
import axios from 'axios';
import { getPagebleBeersResourceURL } from '../../../config/Domains';

class BeerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.fecthBeers = this.fecthBeers.bind(this);    
  }

  fecthBeers({page, per_page}) {
    axios.get(getPagebleBeersResourceURL({page, per_page}))
      .then(res => {
        const beers = res.data;
        this.setState({ beers });
      })
  }

  render() {

    const match = this.props.match;
    const headers = ['Name', 'Tagline', 'Actions'];
    const beers = this.state.beers;
    return (
      <List headers={headers} fetchListFunction={this.fecthBeers}>
        {beers && beers.map((beer) => (
          <BeerItemRow key={beer.id} beer={beer} match={match} />
        ))}
      </List>
    );
  }
}

export default BeerList;