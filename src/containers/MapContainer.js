import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
// debugger
    return (
      <div className="map">
        <Map
          google={this.props.google}
          style={style}
          initialCenter={this.props.mapInfo[0]}
          zoom={15}
           >
           <Marker
             name={'Searched property'}
             position={this.props.mapInfo[0]} />
           <Marker
             name={'Comp 1'}
             position={this.props.mapInfo[1]} />
           <Marker
             name={'Comp 2'}
             position={this.props.mapInfo[2]} />
           <Marker
             name={'Comp 3'}
             position={this.props.mapInfo[3]} />
           <Marker
             name={'Comp 4'}
             position={this.props.mapInfo[4]} />
           <Marker
             name={'Comp 5'}
             position={this.props.mapInfo[5]} />
         </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyDfi_GXxKbyTfmWeg-ier6N6H0F0--zEbs' })(MapContainer);
