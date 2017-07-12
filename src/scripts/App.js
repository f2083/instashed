import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageCollection from './components/imageCollection';

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
        <ImageCollection/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-container')
);