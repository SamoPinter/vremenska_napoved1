import React, {useContext} from 'react';

import Context from "../Context"

const WeatherData = () => {

const  {weather} = useContext(Context)
const {description} = weather

    return (
        
        <div className="weather-data">
  <p className="weather__tagline">Weather data for <span className="weather-data__city">Slovenske Konjice</span></p>
  <div className="weather-data__box">
    <span className="weather-data__property">
      <p className="weather-data__title">Description</p>
      <p className="weather-data__value">{description}</p>
    </span>
  </div>
</div>
    )
}

export default WeatherData;