
export const initialPlayersState = {
    turn: 'player X'
}

export const playersReducer = (state = initialPlayersState, action) => {
    switch (action.type) {
        case SWITCH_PLAYER_O: {
            return [
                ...state,
                {
                    turn: action.changeToO
                }
            ]
        }
        case SWITCH_PLAYER_X: {
            return [
                ...state,

                {
                    turn: action.changeToX
                }
            ]
        }
        default:
        return state;
    }
}