import React from 'react';
import './PageContent.scss';

class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    const pageContentClassName = "PageContent";

    return (
      <div className={pageContentClassName}>
        {this.props.children}
      </div>
    );
  }
}

export default PageContent;