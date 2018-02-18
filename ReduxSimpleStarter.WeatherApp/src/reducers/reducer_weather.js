import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log('Action received', action);
    switch(action.type) {
        case FETCH_WEATHER: {
            // concat() does not change the existing state, it adds to it
            // return  state.concat([action.payload.data]);
            // the line above, in ES6:
            // (make a new array, add 'data' and then add the 'state' to it)
            // (in other words: return a new object 
            // that will take the place of the existing one)
            return [ action.payload.data, ...state];
        }

    }
    return state;
}