import React, { useState } from 'react';
const api = {
  key: "cebad3e6604a3d079faf82653bcf2b6d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  var position = [weather.coord.lat, weather.coord.lng];

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
      <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
      <div className="card light-green darken-1">
        <div className="card-body">
          <div className="location-box">
            <div className="location list-group-item">{weather.name}, {weather.sys.country}</div>
            <div className="date list-group-item">{dateBuilder(new Date())}</div>
            <div className="temp list-group-item">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather list-group-item">{weather.weather[0].main}</div>
          </div>
        </div>
       </div>

        ) : ('')}
      </main>
    </div>

    <Map className="map" center={position} zoom={this.state.zoom}>
    <TileLayer
    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={myIcon}> 
    </Marker>
    </Map>

  );
}

export default Weather;