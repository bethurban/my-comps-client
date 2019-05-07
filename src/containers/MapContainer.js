import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
      width: '40%',
      height: '80%'
    }

    var points = this.props.mapInfo
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    return (
      <div className="map">
        <Map
          google={this.props.google}
          style={style}
          initialCenter={this.props.mapInfo[0]}
          bounds={bounds}
           >
           <Marker
             name={'Searched property'}
             position={this.props.mapInfo[0]}
             icon={{ url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}} />
           <Marker
             name={'Comp 1'}
             position={this.props.mapInfo[1]}
             icon={{ url: "http://maps.google.com/mapfiles/kml/paddle/1-lv.png"}} />
           <Marker
             name={'Comp 2'}
             position={this.props.mapInfo[2]}
             icon={{ url: "http://maps.google.com/mapfiles/kml/paddle/2-lv.png"}} />
           <Marker
             name={'Comp 3'}
             position={this.props.mapInfo[3]}
             icon={{ url: "http://maps.google.com/mapfiles/kml/paddle/3-lv.png"}} />
           <Marker
             name={'Comp 4'}
             position={this.props.mapInfo[4]}
             icon={{ url: "http://maps.google.com/mapfiles/kml/paddle/4-lv.png"}} />
           <Marker
             name={'Comp 5'}
             position={this.props.mapInfo[5]}
             icon={{ url: "http://maps.google.com/mapfiles/kml/paddle/5-lv.png"}} />
         </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyDfi_GXxKbyTfmWeg-ier6N6H0F0--zEbs' })(MapContainer);
