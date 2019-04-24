import React, { Component } from 'react';
import './App.css'
import Searches from './Searches.js'

const searches = [
  {
    name: "Home",
    address: "19 Wellesley Road, Maplewood, NJ 07040"
  },
  {
    name: "Dad's house",
    address: "7280 Forest Ridge Circle, Castle Pines, CO 80108"
  },
  {
    name: "Jim's house",
    address: "222 Wayside Drive, Warrington, PA 18976"
  },
  {
    name: "Mary's apartment",
    address: "1040 W. Adams St., Apt. 411, Chicago, IL 60607"
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
