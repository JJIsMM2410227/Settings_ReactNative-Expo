import { TOGGLE_THEME_MODE } from '../types'

export const toggleThemeMode = (value) => {
	return {
		type: TOGGLE_THEME_MODE,
		usefulData: value,
	}
}
