import axios from 'axios';

const API_KEY = '644e447ac9c6158abe88cb2b14d78200';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // 'request' is actually just a promise and we are
    // returning it; redux-promise will solve it by the
    // time the reducer is called (reducer_weather)
    // (redux-promise, as middleware, intercepts the promise
    // and it 'unpacks' it)
    // Section 5, Lecture 59
    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}