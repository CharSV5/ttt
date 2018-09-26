import * as playersActions from '../actions/players-actions';

const player_O = 'player O'
const player_X = 'player X'
const turn_X = 'X'

describe('players actions', () => {
    describe('switch_Player_O', () => {
        it('should switch player turn to O', () => {
            const expectedAction = {
                type: playersActions.SWITCH_PLAYER_O,
                player_O
            }
            expect(playersActions.switch_Player_O()).toEqual(expectedAction)
        })
    })
    describe('switch_Player_X', () => {
        it('should switch player turn to X', () => {
            const expectedAction = {
                type: playersActions.SWITCH_PLAYER_X,
                player_X
            }
            expect(playersActions.switch_Player_X()).toEqual(expectedAction)
        })
    })
    describe('place_X', () => {
        it('should place an x if player X turn', () => {
            const expectedAction = {
                type: playersActions.PLACE_X,
                turn_X
            }
            expect(playersActions.place_X()).toEqual(expectedAction)
        })
    })
})