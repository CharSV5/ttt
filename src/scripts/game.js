import Board from './board.js';

class Game {
    constructor(turn, marker, board = null, recordX = null, recordY = null) {
        this.turn = turn;
        this.marker = marker;
        this.board = board;
        this.recordX = recordX;
        this.recordY = recordY;
    }

    startGame(height, width) {
        this.board = new Board(height, width)
        const arrayLength = height * width
        this.board.makeBoard()
        this.recordX = [...Array(arrayLength).keys()]
        this.recordY = [...Array(arrayLength).keys()]
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
