import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchCard from '../components/SearchCard';
import CompCard from '../components/CompCard';
import './Searches.css';

class Searches extends Component {

  componentDidUpdate(){
    console.log("adding event listeners to cards")
    var cards = document.getElementsByClassName('card');
    for(let i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', function() {
        cards[i].classList.toggle('is-flipped');
      })
    }
  }

  render() {
    // debugger
    var searchImageURL = this.props.searches.searchImage
    searchImageURL = searchImageURL.split("<url>")
    if (searchImageURL.length > 1) {
      searchImageURL = searchImageURL[1].replace("</url>", "")
    }
    console.log("searchImageURL: ", searchImageURL)
    return (
      <div className="SearchesContainer">
        <h1>Search for Comps</h1>
        <SearchForm />
        { this.props.searches.search ? <SearchCard property={this.props.searches.search} image={searchImageURL} /> : null }
        {this.props.searches.comps.map(comp => <CompCard comp={comp} />)}
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
