import React from 'react';
import './App.css'
import Homes from '../containers/Homes.js'
import Searches from '../containers/Searches.js'

const App = () => (
  <div className="App">
    <Searches />
    <Homes />
  </div>
)


export default App;
