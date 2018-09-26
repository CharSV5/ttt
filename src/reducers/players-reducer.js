import { SWITCH_PLAYER_O, SWITCH_PLAYER_X, PLACE_X } from '../actions/players-actions';

export const initialPlayersState = {
    turn: 'player X'
}

export const playersReducer = (state = initialPlayersState, action) => {
    switch (action.type) {
        case SWITCH_PLAYER_O: {
            return [
                ...state,
                {
                    turn: action.player_O
                }
            ]
        }
        case SWITCH_PLAYER_X: {
            return [
                ...state,

                {
                    turn: action.player_X
                }
            ]
        }
        case PLACE_X: {
            return [
                ...state,

                {
                    turn: action.place_X
                }
            ]
        }
        default:
        return state;
    }
}