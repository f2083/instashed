import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ImageCollection from './components/imageCollection'
import panoramaCollection from './components/panoramaCollection'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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