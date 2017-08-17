import { combineReducers } from 'redux';
import weather from './weather.js';

const RootReducer = combineReducers({
	weather
})

export default RootReducer;