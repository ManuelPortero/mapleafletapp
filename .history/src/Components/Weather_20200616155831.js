import React, { Component } from 'react';

const apiKey = 'cebad3e6604a3d079faf82653bcf2b6d';


export default class Weather extends Component() {
  

    constructor() { 
        super()
        this.cityName = '',
        this.countryCode = '',
        this.URI =`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
    
      }
    
      getWeather(cityName,countryCode){
        return this.http.get(`${this.URI}${cityName},${countryCode}`);
    
      }
    
    }

  return (
    
  );
}

