class Board {
    constructor(boardHeight, boardWidth, grid = null) {
        this.boardHeight = boardHeight;
        this.boardWidth = boardWidth;
        this.grid = grid
    }

    makeBoard() {
        const cells = this.boardHeight * this.boardWidth
        this.grid = new Array(cells)
    }

    showBoard() {
        return this.grid
    }
}

module.exports = Board;