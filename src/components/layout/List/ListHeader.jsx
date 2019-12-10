import React from 'react';

class ListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const headers = this.props.headers.map((headerName) => (
      <th key={headerName} scope="col">{headerName}</th>
    ));
    return (
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
    );
  }
}

export default ListHeader;