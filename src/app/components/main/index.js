import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../navbar/index'
import { Jumbotron } from '../jumbotron/index'

import { home } from '../home/index'
import { about } from '../about/index'
import { contact } from '../contact/index'

import { HashRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <div>
    <Navbar />
  </div>,
  document.getElementById('react-nav')
);

ReactDOM.render(
  <div>
    <Jumbotron />
    <Router>
      <div>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/contact" component={contact} />
      </div>
    </Router>
  </div>,
  document.getElementById('react-container')
);