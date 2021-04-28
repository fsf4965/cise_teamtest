import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/homepage';
import Search from './components/Search';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Homepage} />
          <Route path='/Search' component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
