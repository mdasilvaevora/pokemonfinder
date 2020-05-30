import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Search from './components/search/Search';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <Route exact path="/" component={Search}/>
          </Router>
      </Provider>
    );
  }
}

export default App;
