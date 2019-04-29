import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchCard from '../components/SearchCard';

class Searches extends Component {
  render() {
    // debugger
    // {var searchedProperty = this.props.searches.getElementsByTagName("principal")[0]}
    // {var compProperties = this.props.searches.getElementsByTagName("comparables")[1]}
    return (
      <div className="SearchesContainer">
        <h1>Search for Comps</h1>
        <SearchForm />
        <SearchCard street={this.props.searches} />

      </div>

      // {this.props.searches.map(search => <SearchCard key={search.id} search={search} />)}
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    searches: state.searches
  })
}

export default connect(mapStateToProps)(Searches);
