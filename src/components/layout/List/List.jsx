import React from 'react';
import ListHeader from './ListHeader';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <table className="table">
        <ListHeader headers={this.props.headers} />
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export default List;