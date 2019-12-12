import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import RouterWrapped from './routes/RouterWrapped';
import PageContent from './components/layout/PageContent/PageContent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="AppContainer">
        <Router>
          <NavBar />
          <PageContent>
            <RouterWrapped />
          </PageContent>
        </Router>
      </div>
    );
  }
}

export default App;