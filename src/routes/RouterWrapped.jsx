import React from 'react';
import { Route, Switch, Redirect, } from 'react-router-dom';
import { routes } from './RouterConfig';

class RouterWrapped extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Switch>
        <Route
          path={routes['home'].path}
          exact component={routes['home'].component} />
        <Route
          path={routes['beersList'].path}
          exact component={routes['beersList'].component} />
        <Route
          path={routes['beersList']['routes']['detail'].path}
          component={routes['beersList']['routes']['detail'].component} />
        <Redirect from="/*" to="/" />
      </Switch>
    );
  }
}

export default RouterWrapped;