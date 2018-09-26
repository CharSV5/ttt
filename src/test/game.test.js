const Game = require('../scripts/game.js');
const Board = require('../scripts/board.js');


describe('Game class', () => {
    let game;
    beforeEach(() => {
        game = new Game('Player X', 'X');
    });

    test('switchPlayer switches the player turn', () => {
        game.switchPlayer('Player X');
        expect(game.showTurn()).toBe('Player O');
    });

    test('switchPlayer switches the player turn', () => {
        game.switchPlayer('Player O');
        expect(game.showTurn()).toBe('Player X');
    });

    test('place places an X if player X turn', () => {
        game.startGame(3, 3);
        game.place('Player X', 1);
        expect(game.marker).toBe('X')
    });

    test('place places an O if player O turn', () => {
        game.startGame(3, 3);
        game.place('Player O', 1);
        expect(game.marker).toBe('O')
    })

    test('start Game creates a board', () => {
        game.startGame(3, 3);
        expect(game.board).toBeInstanceOf(Board)
    })

    test('place replaces a number in the grid array', () => {
        game.startGame(3, 3);
        game.place('Player X', 3);
        expect(game.board.grid).toEqual([0, 1, 2, 'X', 4, 5, 6, 7, 8])
    })

});
