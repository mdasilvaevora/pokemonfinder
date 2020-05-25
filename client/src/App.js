import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Layout from "./components/layout/Layout";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Layout}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
