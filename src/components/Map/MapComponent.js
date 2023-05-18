import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapComponent extends Component {
  render() {
    return (
      <Map google={this.props.google}
        zoom={4}
        center={{
          lat: 39.0902,
          lng: -50.7129
        }}
        style={{width: '50%', height: '50%', position: 'relative'}}
      >
 
 
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAB7MbKvVHLspmx_69G-eTAUtCHwJqJlgY')
})(MapComponent)