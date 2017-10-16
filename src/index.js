import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import SecondLevel from './components/SecondLevel'
import Repos from './components/Repos'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar.js'
// import css from './src/app.css';
require("./app.css");

render((
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      {/* add the routes here */}
      <Route path="/repos" component={Repos}/>
      <Route path="/secondLevel" component={SecondLevel}/>
    </Router>
    <Navbar />
  </div>
), document.getElementById('app'))
