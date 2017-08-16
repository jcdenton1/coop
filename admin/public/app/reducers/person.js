import * as types from '../actions/actionTypes';

const asyncReducer = (state = {
  geeks: null,
  nerds: null }
  , action = null) => {
  switch(action.type) {
    case types.SET_GEEKS:
      return Object.assign({}, state, { geeks: action.data, nerds: null });
    case types.SET_NERDS:
      return Object.assign({}, state, { geeks: null, nerds: action.data });
    default:
      return state;
  }
};

export default asyncReducer;