import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import home from './components/home.js';
import search from './components/search.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={home} />
          <Route path='/search' component={search} />
        </div>
      </Router>
    );
  }
}

export default App;
