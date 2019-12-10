import React from 'react';

class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default PageContent;