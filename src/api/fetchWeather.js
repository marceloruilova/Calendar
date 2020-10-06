import axios from 'axios';

const URL='https://openweathermap.org/data/2.5/weather';
const API_key='46dc47b19cc1c481d35537521c0501e2';
const fetchWeather = async(query)=>{
    const {data}= await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_key,
        }
    });
    return data;
}