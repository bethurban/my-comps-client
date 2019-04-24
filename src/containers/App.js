import React, { Component } from 'react';
import './App.css'
import Searches from './Searches.js'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  componentDidMount() {
    fetch(`${API_URL}/searches`)
      .then(resp => resp.json())
  }

  render() {

    console.log("This is the state:", this.state)

    return (
      <div className="App">
        <Searches />
      </div>
    );
  }
}

export default App;
