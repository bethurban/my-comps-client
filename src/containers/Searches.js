import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchCard from '../components/SearchCard';

class Searches extends Component {
  render() {
    // debugger
    return (
      <div className="SearchesContainer">
        <h1>Search for Comps</h1>
        <SearchForm />
        <SearchCard address={this.props.searches} />
      </div>

      // {this.props.searches.map(search => <SearchCard key={search.id} search={search} />)}
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    searches: state.searches,
    comps: state.comps
  })
}

export default connect(mapStateToProps)(Searches);
