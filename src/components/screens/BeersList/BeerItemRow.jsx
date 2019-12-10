import React from 'react';
import { Link } from 'react-router-dom';
import ListRow from '../../layout/List/ListRow';

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

function BeerActionsButtons(match, beer){
  return (
    <>
      <Link to={`${match.url}/${beer.id}/detail`}>
        <button> Detail </button>
      </Link>
    </>
  );
}
 
export default BeerItemRow;