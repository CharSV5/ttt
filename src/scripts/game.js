 class Game {
    constructor(turn, marker) {
        this.turn = turn;
        this.marker = marker;
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
