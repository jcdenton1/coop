import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Header from "../components/Header";
import Main from "../components/Main";
import Spinner from "../components/Spinner";
import { finishLoading } from "../actions/async";

export class App extends React.Component {

  componentWillUpdate(nextProps, nextState){
    if (nextProps.async.isError) {
      this.props.history.push("/error");
      this.props.finishLoading();
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        { this.props.async.isLoading ? <Spinner /> : <Main /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    async: state.async
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    finishLoading: () => {
      dispatch(finishLoading());
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));