import { FETCH_WEATHER } from '../actions/index';

export default function(state = [],action){
	switch(action.type){
		case FETCH_WEATHER :
		if(state.length !== 0 && state.containsByProp( 'id', action.payload.data.city.id )){
            return state;
		}else{
			return [ action.payload.data, ...state];
		}

		default:
		return state;
	}
}

Array.prototype.containsByProp = function(propName, value){
      for (var i = this.length - 1; i > -1; i--) {
        var propObj = this[i].city;
          if(propObj[propName] === value) {
            return true;
        }
      }
    return false;
} 