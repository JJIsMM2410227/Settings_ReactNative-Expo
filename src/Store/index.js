import { createStore, combineReducers } from 'redux'

// Reducers
import { mainReducers } from './Reducers/mainReducers'

const rootReducer = combineReducers({
	settings: mainReducers,
})

export default createStore(rootReducer)
