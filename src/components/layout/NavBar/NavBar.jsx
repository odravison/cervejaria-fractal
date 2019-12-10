import React from 'react';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import HeaderMainButton from '../Header/HeaderMainButton/HeaderMainButton';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <HeaderMain>
        <HeaderMainButton
          to="/"
          label="Home"
          activeOnlyWhenExact={true}>
        </HeaderMainButton>
        <HeaderMainButton
          to="/beers"
          label="Beers">
        </HeaderMainButton>
      </HeaderMain>
    );
  }
}

export default NavBar;