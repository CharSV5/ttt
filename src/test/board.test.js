const Board = require('../scripts/board.js');

describe('Board class', () => {
    let board;
    beforeEach(() => {
        board = new Board(3, 3);
    })

    test('Board is customisable when created', () => {
        board.makeBoard();
        expect(board.grid).toHaveLength(9)
    });

    test('Board contains numbers', () => {
        board.makeBoard()
        expect(board.grid).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8])
    } )
})
