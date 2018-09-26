 import Board from './board.js';
 
 class Game {
    constructor(turn, marker, board = null) {
        this.turn = turn;
        this.marker = marker;
        this.board = board
    }

    startGame(height, width) {
        this.board = new Board(height, width)
    }

    switchPlayer(turn) {
        this.turn = turn === 'Player X' ? 'Player O' : 'Player X'
    }

    showTurn() {
        return this.turn
    }

    place(turn) {
        this.marker = turn === 'Player X' ? 'X' : 'O'
    }
}

module.exports = Game
