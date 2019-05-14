import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchCard from '../components/SearchCard';
import MapContainer from '../containers/MapContainer';
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

    var mapInfo = []
    if (this.props.searches.search && this.props.searches.comps.length > 0) {
      mapInfo.push({lat: parseFloat(this.props.searches.search[0].lat), lng: parseFloat(this.props.searches.search[0].long)})
      for (let comp of this.props.searches.comps) {
        mapInfo.push({lat: parseFloat(comp.lat), lng: parseFloat(comp.long)})
      }
    }

    return (
      <div className="SearchesContainer">
        <h1>Search for Comps</h1>
        <SearchForm />
        { mapInfo.length > 0 ?
          <MapContainer key={1} mapInfo={mapInfo} />
          : null
        }
        { this.props.searches.search ?
          <SearchCard key={this.props.searches.search[0].zpid} property={this.props.searches.search} />
          : null }
        {this.props.searches.comps.map((comp, index) => <CompCard key={comp.zpid} number={index + 1} comp={comp} />)}
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
