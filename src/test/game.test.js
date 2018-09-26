const Game = require('../scripts/game.js');
const Board = require('../scripts/board.js');
// beforeEach(() => {
//  const game = new Game('Player X');
// })

test('switchPlayer switches the player turn', () => {
    const game = new Game('Player X', 'X');
    game.switchPlayer('Player X');
    expect(game.showTurn()).toBe('Player O');
});

test('switchPlayer switches the player turn', () => {
    const game = new Game('Player O', 'O');
    game.switchPlayer('Player O');
    expect(game.showTurn()).toBe('Player X');
});

test('place places an X if player X turn', () => {
    const game = new Game('Player X', 'X');
    game.place('Player X');
    expect(game.marker).toBe('X')
});

test('place places an O if player O turn', () => {
    const game = new Game('Player O', 'O');
    game.place('Player O');
    expect(game.marker).toBe('O')
} )

test('start Game creates a board', () => {
    const game = new Game('Player O', 'O');
    game.startGame(3, 3);
    expect(game.board).toBeInstanceOf(Board)
})
