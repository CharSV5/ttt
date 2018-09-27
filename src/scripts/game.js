 import Board from './board.js';
 
 class Game {
    constructor(turn, marker, board = null) {
        this.turn = turn;
        this.marker = marker;
        this.board = board
    }

    startGame(height, width) {
        this.board = new Board(height, width)
        this.board.makeBoard()
    }

    switchPlayer(turn) {
        this.turn = turn === 'Player X' ? 'Player O' : 'Player X'
    }

    showTurn() {
        return this.turn
    }

    place(turn, gridIndex) {
        this.marker = turn === 'Player X' ? 'X' : 'O'
        this.board.grid.splice(gridIndex, 1, this.marker)
    }
}

module.exports = Game
