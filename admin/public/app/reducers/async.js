import * as types from '../actions/actionTypes';

const asyncReducer = (state = {
  isLoading: false,
  isError: false,
  data: null}
  , action = null) => {
  switch(action.type) {
    case types.RECIEVE_ERROR:
      return Object.assign({}, state, { data: action.data, isError: true });
    case types.RECIEVE_DATA:
      return Object.assign({}, state, { data: action.data });
    case types.FINISHED_LOADING:
      return Object.assign({}, state, { isLoading: false, data: null, isError: false });
    case types.REQUEST_DATA:
      return Object.assign({}, state, { isLoading: true });
    default:
      return state;
  }
};

export default asyncReducer;