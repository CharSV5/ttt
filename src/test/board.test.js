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
})
