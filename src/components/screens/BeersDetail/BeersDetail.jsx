import React from 'react';
import axios from 'axios';

import { getBeerByIdResourceURL } from '../../../config/Domains';
import './BeerDetail.scss';

import ItemDetail from '../../layout/Detail/ItemDetail';
import BeerDetailImage from './BeerDetailImage/BeerDetailImage';
import BeerDetailName from './BeerDetailName/BeerDetailName';
import BeerDetailDescription from './BeerDetailDescription/BeerDetailDescription';
import BeerDetailTagline from './BeerDetailTagline/BeerDetailTagline';

class BeersDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.getBeer = this.getBeer.bind(this);

  }

  getBeer() {
    const beerId = this.props.match.params.id;
    axios.get(getBeerByIdResourceURL({ id: beerId }))
      .then(res => {
        const beer = res.data[0];
        this.setState({ beer });
      });
  }


  render() {
    const beer = this.state.beer || {};

    const beerDetailContentClass = "BeerDetailContent";
    const beerDetailImageClass = "BeerDetailImage";
    const beerDetailNameClass = "";
    const beerDetailHeaderClass = "BeerDetailHeader";

    return (
      <ItemDetail getItem={this.getBeer} className={beerDetailContentClass}>
        <BeerDetailImage imageURL={beer.image_url} volume={beer.volume} className={beerDetailImageClass}/>
        <div className={beerDetailHeaderClass}>
          <BeerDetailName beerName={beer.name} className={beerDetailNameClass} />
          <BeerDetailDescription beerDescription={beer.description} />
          <BeerDetailTagline beerTagline={beer.tagline} />
        </div>
      </ItemDetail>
    );
  }
}

export default BeersDetail;