import React, { Component } from 'react';
import './App.css'
import Searches from './Searches.js'

const searches = [
  {
    name: "Home",
    address: "19 Wellesley Road, Maplewood, NJ 07040"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searches searches={searches} />
      </div>
    );
  }
}

export default App;
