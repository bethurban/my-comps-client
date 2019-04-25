import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';

class Searches extends Component {
  render() {
    return (
      <div className="SearchesContainer">
        <h1>Search for Comps</h1>
        <SearchForm />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    searches: state.searches
  })
}

export default connect(mapStateToProps)(Searches);
