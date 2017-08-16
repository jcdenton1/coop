import React from "react";
import {connect} from "react-redux";
import PersonTable from "../components/PersonTable";
import { getNerds } from "../actions/person";

export class Nerd extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.person.nerds === null && this.props.async.isLoading === false) {
      this.props.getNerds();
    }
  }

  render() {
    return (
      <div className="jumbotron text-center">
        <h1>Nerds and Proud</h1>
        <p>Nothing beats a pocket protector!</p>
        { this.props.person.nerds ? <PersonTable peopleList={this.props.person.nerds} /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    async: state.async,
    person: state.person
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNerds: () => {
      dispatch(getNerds());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nerd);