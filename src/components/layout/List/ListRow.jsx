import React from 'react';

class ListRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const item = this.props.item;
    const actions = this.props.actions;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.tagline}</td>
        <td>{actions}</td>
      </tr>
    );
  }
}

export default ListRow;