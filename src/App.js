import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// components
import Home from './component/pages/Home';
import Footer from './component/Footer';
import NotFound from './component/pages/NotFound';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="container">
          <Header />
          <div id="body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
