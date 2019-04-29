import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchCard from '../components/SearchCard';

class Searches extends Component {
  render() {
    debugger
    return (
      <div className="SearchesContainer">
        <h1>Search for Comps</h1>
        <SearchForm />
        {var searchedProperty = this.props.searches.getElementsByTagName("principal")[0]}
        <SearchCard search={searchedProperty} />
        {var compProperties = this.props.searches.getElementsByTagName("comparables")[1]}
        {this.props.searches.map(search => <SearchCard key={search.id} search={search} />)}
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
