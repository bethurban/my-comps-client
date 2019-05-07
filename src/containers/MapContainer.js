import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '20%',
      height: '20%'
    }

    return (
      <div className="map">
        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.long
          }}
          zoom={15}
           >
           <Marker name={'Searched property'} />
         </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyDfi_GXxKbyTfmWeg-ier6N6H0F0--zEbs' })(MapContainer);
