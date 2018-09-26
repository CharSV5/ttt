const Board = require('../scripts/board.js');

test('Board is customisable when created', () => {
    const board = new Board(3, 3);
    board.makeBoard();
    expect(board.grid.length).toBe(9)
});