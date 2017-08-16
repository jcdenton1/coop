import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import async from "./reducers/async";
import person from "./reducers/person";

export default createStore(
  combineReducers({
    async,
    person
  }),
  {},
  applyMiddleware(logger, thunk, promise())
);