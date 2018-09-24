import { combineReducers, createStore } from 'redux';


const rootReducers = combineReducers({
    playersReducer
})

const initialState = {
    initialPlayersState
}

export default createStore(rootReducers, initialState, window.devToolsExtension && window.devToolsExtension());