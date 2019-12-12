import React from 'react';
import { Link } from 'react-router-dom';
import ListRow from '../../layout/List/ListRow';
import './BeerItemActions.scss';

class BeerItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const beer = this.props.beer;
    const match = this.props.match;
    const beerActions = BeerActionsButtons(match, beer);
    return (
      <ListRow key={beer.id} item={beer} actions={beerActions} />
    );
  }
}

function BeerActionsButtons(match, beer) {

  const detailClassName = "DetailBeerButton";

  return (
    <>
      <Link to={`${match.url}/${beer.id}/detail`}>
        <button className={detailClassName}> Detail </button>
      </Link>
    </>
  );
}
 
export default BeerItemRow;