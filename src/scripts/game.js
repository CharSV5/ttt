 class Game {
    constructor(turn) {
        this.turn = turn;
    }

    switchPlayer(turn) {
        this.turn = turn === 'Player X' ? 'Player O' : 'Player X'
    }

    showTurn() {
        return this.turn
    }
}

module.exports = Game
