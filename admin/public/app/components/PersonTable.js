import React from "react";
const {Table, Column, Cell} = require('fixed-data-table-2');

class PersonTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="center">
        <Table
          rowsCount={this.state.peopleList.length}
          rowHeight={50}
          headerHeight={50}
          width={400}
          height={152}
          showScrollbarX={false}
          showScrollbarY={false} >
          <Column
            header={<Cell>Name</Cell>}
            cell={props => (
              <Cell {...props}>
                {this.state.peopleList[props.rowIndex].name}
              </Cell>
            )}
            width={200}
          />
          <Column
            header={<Cell>Hobby</Cell>}
            cell={props => (
              <Cell {...props}>
                {this.state.peopleList[props.rowIndex].hobby}
              </Cell>
            )}
            width={200}
          />
        </Table>
      </div>
    );
  }
}

export default PersonTable