import React from "react";

export class Spinner extends React.Component {
  render() {
    return(
      <div className="jumbotron text-center">
        <div className='loading'></div>
      </div>
    );
  }
}

export default Spinner