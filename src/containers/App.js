import React, { Component } from 'react';
import './App.css'
import Searches from './Searches.js'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searches: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/searches')
      .then(resp => resp.json())
      .then(searches => this.setState({ searches }))
  }

  render() {

    console.log(this.state)

    return (
      <div className="App">
        <Searches searches={this.state.searches} />
      </div>
    );
  }
}

export default App;
