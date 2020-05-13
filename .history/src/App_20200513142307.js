import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import {Map,TitleLayer,Marker, Popup} from 'react-leaflet';


class App extends Component {
  render () {
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