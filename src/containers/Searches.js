import React, { Component } from 'react';
import './Searches.css';
import SearchForm from './SearchForm';
import SearchCard from '../components/SearchCard';

class Searches extends Component  {
  render() {
    return (
      <div className="SearchesContainer">
        <h1>Searches</h1>
        {this.props.searches.map(search => <SearchCard key={search.id} search={search} />)}
        <SearchForm />
      </div>
    );
  }
}

export default Searches;
