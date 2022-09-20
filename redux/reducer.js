import { GET_DATA, SET_TOTAL_LOADED } from "./action";

const initialState = {
  data: [],
  totalLoaded: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_LOADED:
      return {
        ...state,
        totalLoaded: action.payload,
      };
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default myReducer;
