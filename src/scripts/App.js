import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ImageCollection from './components/imageCollection'
import panoramaCollection from './components/panoramaCollection'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><a href='/collection'>Collection</a></li>
          <li><a href="/panoramas">Panoramas</a></li>
        </ul>
        <Router history={browserHistory}>
          <Route path='/' component={ImageCollection}></Route>
          <Route path='/collection' component={ImageCollection}></Route> 
          <Route path='/panoramas' component={panoramaCollection}></Route>   
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-container')
);