import axios from 'axios';
import * as types from './actionTypes';

function requestData() {
  return {
    type: types.REQUEST_DATA
  }
}

function receiveData(json) {
  return {
    type: types.RECIEVE_DATA,
    data: json
  }
}

function receiveError(json) {
  return {
    type: types.RECIEVE_ERROR,
    data: json
  }
}

export function finishLoading() {
  return {
    type: types.FINISHED_LOADING
  }
}

export function getJson(url, callback) {
  return function(dispatch) {
    dispatch(requestData());
    return axios({
      url: url,
      timeout: 5000,
      method: 'get',
      responseType: 'json'
    })
      .then(function(response) {
        dispatch(receiveData(response.data));
        callback(response.data);
      })
      .catch(function(response){
        dispatch(receiveError(response.data));
      })
  }
}