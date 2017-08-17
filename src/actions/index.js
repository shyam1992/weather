import axios from 'axios';

const API_KEY = '82998e995f442c1c5706686103321f0f';
const URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchweather(city){
	const query = `${URL}&q=${city},IN`;
	const payload = axios.get(query);

	return{
		type : FETCH_WEATHER,
		payload
	}
}
