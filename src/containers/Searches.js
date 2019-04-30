import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchCard from '../components/SearchCard';
import CompCard from '../components/CompCard';
import './Searches.css';

class Searches extends Component {
  render() {
    return (
      <div className="SearchesContainer">
        <h1>Search for Comps</h1>
        <SearchForm />
        <SearchCard property={this.props.searches.search} />
        {this.props.searches.comps.map(comp => <CompCard comp={comp} />)}
      </div>
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
