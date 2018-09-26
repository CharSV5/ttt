import React, { Component } from 'react';
import CellContainer from './cell-container';

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8,]
            }
}




    render() {
      const row = []
      for (let i of this.state.board) {
        row.push(<CellContainer />)
      }
        return (
          <div>
            {row}
          </div>
        );
      } 
}

export default BoardContainer;