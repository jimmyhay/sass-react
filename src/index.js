import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import SecondLevel from './components/SecondLevel'
import Repos from './components/Repos'
import Sectionspage from './components/Sectionspage'
import ContentPage from './components/ContentPage'
import Navbar from './components/Navbar.js'
// import css from './src/app.css';
require("../css/app.css");

render((
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      {/* add the routes here */}
      <Route path="/repos" component={Repos}/>
      <Route path="/thirdLevel" component={ContentPage}/>
      <Route path="/secondLevel" component={Sectionspage}/>
    </Router>
    <Navbar />
  </div>
), document.getElementById('app'))
