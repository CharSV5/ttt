const Game = require('../scripts/game.js');

// beforeEach(() => {
//  const game = new Game('Player X');
// })

test('switchPlayer switches the player turn', () => {
    const game = new Game('Player X');
    game.switchPlayer('Player X');
    expect(game.showTurn()).toBe('Player O');
})
