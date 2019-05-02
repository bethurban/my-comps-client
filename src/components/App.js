import React from 'react';
import './App.css';
import Homes from '../containers/Homes.js';
import Searches from '../containers/Searches.js';
import Navbar from './Navbar.js';

const App = () => (
  <div className="App">
    <Navbar />
    <Searches />
    <Homes />
  </div>
)


export default App;
