import React, { Component } from 'react';

export class MapCard extends Component {
  // componentDidMount() {
  //   const map = new window.google.maps.Map(document.getElementById('map'), {
  //     center: { lat: this.props.lat, lng: this.props.long },
  //     zoom: 8
  //   });
  // }

  render() {
    return (
      <div style={{ width: 500, height: 20 }} id="map">
        {this.props.lat}, {this.props.long}
      </div>
    );
  }

}

export default MapCard;
