import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import RouterWrapped from './routes/RouterWrapped';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Router>
        <NavBar></NavBar>
        <div className="container">
          <RouterWrapped></RouterWrapped>
        </div>
      </Router>
    );
  }
}

export default App;