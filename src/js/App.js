import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import boomerangCollection from './components/boomerangCollection'
import panoramaCollection from './components/panoramaCollection'
import Game from './components/Game'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><a href='/boomerangs'>Boomerangs</a></li>
          <li><a href='/panoramas'>Panoramas</a></li>
          <li><a href='/game'>Game</a></li>
        </ul>
        <Router history={browserHistory}>
          <Route path='/' component={boomerangCollection}></Route>
          <Route path='/boomerangs' component={boomerangCollection}></Route> 
          <Route path='/panoramas' component={panoramaCollection}></Route>
          <Route path='/game' component={Game}></Route>      
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-container')
);