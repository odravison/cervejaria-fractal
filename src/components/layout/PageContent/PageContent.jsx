import React from 'react';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import HeaderMainButton from '../Header/HeaderMainButton/HeaderMainButton';
import List from '../List/List';
import ListRow from '../List/ListRow';

class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    
  }
  render() {
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
      <div>
        <HeaderMain>
          <HeaderMainButton label={"Home"}></HeaderMainButton>
          <HeaderMainButton label={"Beers"}></HeaderMainButton>
        </HeaderMain>
        <div className="container">
          <List headers={headers}>
            {beers.map((beer) => (
              <ListRow key={beer.id} item={beer}></ListRow>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default PageContent;