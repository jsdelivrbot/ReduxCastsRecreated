import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

// look at this object as the overall app state
// managed by Redux
// look at the bookmarks in Section 5, Lecture 61
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
