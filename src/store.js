import { combineReducers, createStore } from 'redux';
import { initialPlayersState, playersReducer } from './reducers/players-reducer';

const rootReducers = combineReducers({
    playersReducer
})

const initialState = {
    initialPlayersState
}

export default createStore(rootReducers, initialState, window.devToolsExtension && window.devToolsExtension());