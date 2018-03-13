import * as types from "../types";

const initialState = {
	isFetching: false
}

const candidatesReducer = (state = initialState, action) => {
	  switch (action.type) {

	  	case types.IS_FETCHING:
	      return {
	        ...state,
	        isFetching: action.payload,
	      };

	    default:
      		return state;
	  }
}

export default candidatesReducer;