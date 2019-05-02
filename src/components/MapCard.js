import React from 'react';

const MapCard = ({ lat, long }) => {

  // # var map;
  // # function initMap() {
  // #   map = new google.maps.Map(document.getElementById('map'), {
  // #     center: {lat: {lat}, lng: {long}},
  // #     zoom: 8
  // #     });
  // #   }

    return(
      <div id="map">
      Latitude: {lat}, longitude: {long}
      </div>
    )
}

export default MapCard;
