import React, { useState, useEffect } from 'react';

import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";

import Axios from 'axios';

import Context from "../Context"


const Main = () => {

    const [weather, setWeather] = useState()

    const api_call = async e => {

        const API_KEY = "18c8ccecb3a86e5833f2be425fd4e340"

        const url= `https://api.openweathermap.org/data/2.5/onecall?lat=46.33667&lon=15.42583&
        exclude={part}&appid=${API_KEY}&units=metric`

        const request = Axios.get(url)

        const response = await request

        setWeather(response.data.hourly)
    }

    console.log(weather)

    useEffect(() => {
        api_call()
    }, [])

    return (
        <div className="main">

            <Header/>
            <Content>
                <Context.Provider value={{ api_call, weather}}>
                <WeatherSearch />
                { weather&& <WeatherData weather={weather} />}
                </Context.Provider>
            </Content>
        </div>
    )
}

export default Main;
