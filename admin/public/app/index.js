import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from "./containers/App";
import store from "./store";

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  window.document.getElementById('app'));