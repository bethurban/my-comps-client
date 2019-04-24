import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Searches.css';
import SearchForm from './SearchForm';
import SearchCard from '../components/SearchCard';
import { getSearches } from '../actions/searches';

class Searches extends Component  {

  componentDidMount() {
    this.props.getSearches()
  }

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

const mapStateToProps = (state) => {
  return ({
    searches: state.searches
  })
}


export default connect(mapStateToProps, { getSearches })(Searches);
