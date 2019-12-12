import React from 'react';
import './HeaderMain.scss';

class HeaderMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const className = "HeaderMain DarkBackground";
    return (
      <header className={className}>
        {this.props.children}
      </header>
    );
  }
}
 
export default HeaderMain;