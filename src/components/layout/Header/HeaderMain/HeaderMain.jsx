import React from 'react';
import './HeaderMain.scss';

class HeaderMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const className = "custom-navbar sticky-top navbar-dark bg-dark mx-auto";
    return (
      <header className={className}>
        {this.props.children}
      </header>
    );
  }
}
 
export default HeaderMain;