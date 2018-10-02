const Game = require('../scripts/game.js');
const Board = require('../scripts/board.js');


describe('Game class', () => {
    let game;
    beforeEach(() => {
        game = new Game('Player X', 'X');
    });

    test('switchPlayer switches the player turn', () => {
        game.switchPlayer(game.turn);
        expect(game.showTurn()).toBe('Player O');
    });

    test('switchPlayer switches the player turn', () => {
        game.switchPlayer('Player O');
        expect(game.showTurn()).toBe('Player X');
    });

    test('place places an X if player X turn', () => {
        game.startGame(3, 3);
        game.place(game.turn, 1);
        expect(game.marker).toBe('X')
    });

    test('place places an O if player O turn', () => {
        game.startGame(3, 3);
        game.place('Player O', 1);
        expect(game.marker).toBe('O')
    })


    test('place replaces a number in the grid array with an X', () => {
        game.startGame(3, 3);
        game.place(game.turn, 3);
        expect(game.board.grid).toEqual([0, 1, 2, 'X', 4, 5, 6, 7, 8])
    })

    test('place replaces a number in the grid array with an O', () => {
        game.startGame(3, 3);
        game.place(game.turn, 3);
        game.switchPlayer(game.turn)
        game.place(game.turn, 4)
        expect(game.board.grid).toEqual([0, 1, 2, 'X', 'O', 5, 6, 7, 8])
    })

    describe('startGame', () => {
        test('it creates two arrays, recordX and record Y', () => {
            game.startGame(3, 3);
            expect(game.recordX).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8])
            expect(game.recordY).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8])
        })
        test('start Game creates a board', () => {
            game.startGame(3, 3);
            expect(game.board).toBeInstanceOf(Board)
        })
    })
});
