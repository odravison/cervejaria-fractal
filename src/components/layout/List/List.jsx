import React from 'react';
import ListHeader from './ListHeader';
import ListPaginationActions from './ListPaginationActions/ListPaginationActions';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.fetchListFunction = this.props.fetchListFunction;
    this.state = {
      pageOptions: {
        page: 1,
        per_page: 10
      }
    }

    this._addValuetoPage = this._addValuetoPage.bind(this);
    this.onNextPage = this.onNextPage.bind(this);
    this.onPreviousPage = this.onPreviousPage.bind(this);

  }

  _addValuetoPage(value) {
    const pageOption = this.state.pageOptions;
    pageOption.page = pageOption.page + value;
    this.setState({ pageOption });
  }

  onNextPage() {
    this._addValuetoPage(1);
    this.fetchListFunction(this.state.pageOptions);
    return this.state.pageOptions.page;
  }

  onPreviousPage() {
    this._addValuetoPage(-1);
    this.fetchListFunction(this.state.pageOptions);
    return this.state.pageOptions.page;
  }

  componentDidMount() {
    this.fetchListFunction(this.state.pageOptions);
  }

  render() {
    return (
      <>
        <table className="table">
          <ListHeader headers={this.props.headers} />
          <tbody>
            {this.props.children}
          </tbody>
        </table>
        <ListPaginationActions 
          nextPage={this.onNextPage}
          previousPage={this.onPreviousPage} />
      </>
    );
  }
}

export default List;