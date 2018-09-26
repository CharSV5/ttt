const Game = require('../scripts/game.js');

// beforeEach(() => {
//  const game = new Game('Player X');
// })

test('switchPlayer switches the player turn', () => {
    const game = new Game('Player X');
    game.switchPlayer('Player X');
    expect(game.showTurn()).toBe('Player O');
});

test('switchPlayer switches the player turn', () => {
    const game = new Game('Player O');
    game.switchPlayer('Player O');
    expect(game.showTurn()).toBe('Player X');
});
