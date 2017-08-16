import * as types from './actionTypes';
import * as asyncActions from './async';

function setGeeks(json) {
  return {
    type: types.SET_GEEKS,
    data: json
  }
}

function setNerds(json) {
  return {
    type: types.SET_NERDS,
    data: json
  }
}

export function getGeeks() {
  return function(dispatch) {
    dispatch(asyncActions.getJson(DOMAIN_URL + "/geeks", (data) => {
      dispatch(setGeeks(data));
      dispatch(asyncActions.finishLoading());
    }));
  }
}

export function getNerds() {
  return function(dispatch) {
    dispatch(asyncActions.getJson(DOMAIN_URL + "/nerds", (data) => {
      dispatch(setNerds(data));
      dispatch(asyncActions.finishLoading());
    }));
  }
}