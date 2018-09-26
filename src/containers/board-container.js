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
      const row1 = []
      const row2 = []
      const row3 = []
      const board = this.state.board
      const cellMaker = (cells, row) => {
        for (let i of cells) {
          row.push(<CellContainer />)
        } 
      }

      cellMaker(board.slice(0,3), row1)  
      cellMaker(board.slice(3,6), row2)  
      cellMaker(board.slice(6,9), row3)  


        return (
          <div>
            {row1}
            <br />
            {row2}
            {row3}
          </div>
        );
      } 
}

export default BoardContainer;