import React from "react";
import { connect } from "react-redux";
import PersonTable from "../components/PersonTable";
import { getGeeks } from "../actions/person";

export class Geek extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.person.geeks === null && this.props.async.isLoading === false) {
      this.props.getGeeks();
    }
  }

  render() {
    return (
      <div className="jumbotron text-center">
        <h1>Geek City</h1>
        <p>The square root of life is pi!</p>
        { this.props.person.geeks ? <PersonTable peopleList={this.props.person.geeks} /> : null }
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
    getGeeks: () => {
      dispatch(getGeeks());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Geek);