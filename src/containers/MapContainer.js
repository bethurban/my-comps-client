import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '40%',
      height: '80%'
    }

    let points = this.props.mapInfo
    let bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    return (
      <div className="MapCard">
        <Map
          google={this.props.google}
          style={style}
          initialCenter={this.props.mapInfo[0]}
          bounds={bounds}
           >
           <Marker
             name={'Searched property'}
             position={this.props.mapInfo[0]} />
           <Marker
             name={'Comp 1'}
             position={this.props.mapInfo[1]}
             label={'1'} />
           <Marker
             name={'Comp 2'}
             position={this.props.mapInfo[2]}
             label={'2'} />
           <Marker
             name={'Comp 3'}
             position={this.props.mapInfo[3]}
             label={'3'} />
           <Marker
             name={'Comp 4'}
             position={this.props.mapInfo[4]}
             label={'4'} />
           <Marker
             name={'Comp 5'}
             position={this.props.mapInfo[5]}
             label={'5'} />
         </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_MAPS_ID })(MapContainer);
