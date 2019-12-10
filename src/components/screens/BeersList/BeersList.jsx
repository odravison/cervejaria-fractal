import React from 'react';
import List from '../../layout/List/List';
import BeerItemRow from './BeerItemRow';

class BeerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const match = this.props.match;
    const headers = ['Name', 'Tagline', 'Actions'];
    const beers = [
      {
        "id": 1,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "first_brewed": "09/2007",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
      },
      {
        "id": 2,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "first_brewed": "09/2007",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
      },
      {
        "id": 3,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "first_brewed": "09/2007",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
      },
      {
        "id": 4,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "first_brewed": "09/2007",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
      },
    ];
    return (
      <div className="container">
        <List headers={headers}>
          {beers.map((beer) => (
            <BeerItemRow key={beer.id} beer={beer} match={match} />
          ))}
        </List>
      </div>
    );
  }
}

export default BeerList;