import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchCard from '../components/SearchCard';
import CompCard from '../components/CompCard';
import './Searches.css';

class Searches extends Component {

  componentDidUpdate(){
    var cards = document.getElementsByClassName('card');
    if (cards.length > 0) {
      for(let i = 0; i < cards.length; i++) {
        cards[i].onclick = function() {
          cards[i].classList.toggle('is-flipped');
        }
      }
    }
  }

  render() {
    // debugger
    var searchImageURL = this.props.searches.searchImage
    searchImageURL = searchImageURL.split("<url>")
    if (searchImageURL.length > 1) {
      searchImageURL = searchImageURL[1].replace("</url>", "")
    }

    var id = 0;

    return (
      <div className="SearchesContainer">
        <h1>Search for Comps</h1>
        <SearchForm />
        { this.props.searches.search ? <SearchCard key={1} property={this.props.searches.search} image={searchImageURL} /> : null }
        {this.props.searches.comps.map(comp => <CompCard key={id++} comp={comp} />)}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    searches: state.searches,
    comps: state.comps,
    searchImage: state.searchImage
  })
}

export default connect(mapStateToProps)(Searches);
