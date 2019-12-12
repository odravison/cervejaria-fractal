import React from 'react';
import './ListPaginationActions.scss'

class ListPaginationActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage() {
    const currentPage = this.props.nextPage();
    this.setState({ currentPage });
  }

  previousPage() {
    const currentPage = this.props.previousPage();
    this.setState({ currentPage });
  }

  render() {
    const className = "pagination";
    const currentPage = this.state.currentPage || 1;
    const lastPage = undefined;

    return (
      <div className={className}>
        <button disabled={currentPage === 1} onClick={this.previousPage}>Previous page</button>
        <hr />
        Current Page: {currentPage}
        <hr />
        <button disabled={lastPage === 1} onClick={this.nextPage}>Next page</button>
      </div>
    );
  }
}

export default ListPaginationActions;