export const SWITCH_PLAYER_O = 'SWITCH_PLAYER_O';
export const SWITCH_PLAYER_X = 'SWITCH_PLAYER_X';
export const player_O = 'player O'
export const player_X = 'player X'

export const switch_Player_O = () => {
    return {
        type: SWITCH_PLAYER_O,
        player_O
    }
}

export const switch_Player_X = () => {
    return {
        type: SWITCH_PLAYER_X,
        player_X
    }
}