import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import {Map,TitleLayer,Marker, Popup} from 'react-leaflet';

//type State ={
 // lat: number,
 // lng: Number,
 // zoom: Number,

//}

class App extends Component {

  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,

  }


  render () {
    const position = [this.state.lat, this.state.lng];

  return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>

    );
  }
}
export default App;
