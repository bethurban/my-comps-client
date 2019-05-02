import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '20%',
  height: '20%'
};

export class MapCard extends Component {

  render() {
    // debugger
      return (
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={{
           lat: this.props.lat,
           lng: this.props.long
          }}
        />
      );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDfi_GXxKbyTfmWeg-ier6N6H0F0--zEbs'
})(MapCard);
