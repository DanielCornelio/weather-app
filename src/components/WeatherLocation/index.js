import React, {Component} from 'react';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {SUN,} from '../../constants/weathers';

const location = "Buenos Aires, ar";
const api_key = "b985349c002635000cb4db85c8709ae4";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`
const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}
class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }
       
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {

            return resolve.json();
        }).then(data => {
            const newWeather =  transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data:newWeather
            });  
        });
    }
    render() {
        const {city, data} = this.state;
        return ( <div className = "weatherLocationCont" >
            <Location city = {city}/> 
            <WeatherData data = {data}/>   
            <button onClick = {this.handleUpdateClick}> Actualizar </button> 
            </div >
        );
    }
}
export default WeatherLocation;