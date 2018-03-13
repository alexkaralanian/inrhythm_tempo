import * as types from "../types";

const initialState = {
	candidates: [],
	candidate: {}
}

const candidatesReducer = (state = initialState, action) => {
	  switch (action.type) {
	 	
  	case types.SET_CANDIDATES:
      return {
        ...state,
        candidates: action.payload,
      };

		case types.SET_CANDIDATE:
			return {
			...state,
			candidate: action.payload,
		};

	  default:
      return state;
	}
}

export default candidatesReducer;