class Board {
    constructor(boardHeight, boardWidth, grid = null) {
        this.boardHeight = boardHeight;
        this.boardWidth = boardWidth;
        this.grid = grid
    }

    makeBoard() {
        const cells = this.boardHeight * this.boardWidth
        this.grid = [...Array(cells).keys()]
    }

    showBoard() {
        return this.grid
    }
}

module.exports = Board;