import { TOGGLE_THEME_MODE } from '../types'

const initialState = {
	darkTheme: false,
}

export const mainReducers = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_THEME_MODE:
			return {
				...state,
				darkTheme: action.usefulData,
			}
		default:
			return state
	}
}
