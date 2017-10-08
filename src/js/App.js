import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import Navigator from './components/Router'
import Links from './components/Links'


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Links/>
     		<Navigator history={browserHistory}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-container')
)