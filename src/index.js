import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
