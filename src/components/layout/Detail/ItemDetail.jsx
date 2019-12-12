import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getItem = this.props.getItem;

    this.postGetItem = this.postGetItem.bind(this);

  }

  postGetItem() {
    if (this.props.postGetItem) {
      this.props.postGetItem();
    }
  }

  componentDidMount() {
    this.getItem();
  }

  render() {
    return (
      <>
        { this.props.children }
      </>
    );
  }
}

export default ItemDetail;