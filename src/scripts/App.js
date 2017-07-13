import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ImageCollection from './components/imageCollection'


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
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
    <Route path='/collection' component={ImageCollection}></Route>    
  </Router>,
  document.getElementById('react-container')
);