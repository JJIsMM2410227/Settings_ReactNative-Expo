import React from 'react'
import { useSelector } from 'react-redux'

import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { globalStyles, gridColor } from '../common/GlobalStyles'

import { Ionicons } from '@expo/vector-icons'

export const Main = ({ navigation }) => {
	const darkTheme = useSelector((state) => state.settings.darkTheme)

	const settingsHandler = () => {
		navigation.navigate('Settings')
	}

	return (
		<View style={[globalStyles.section, { backgroundColor: darkTheme ? gridColor.darkMode : gridColor.lightMode }]}>
			<View style={[globalStyles.container, styles.mainWrapper]}>
				<TouchableOpacity activeOpacity={0.5} style={styles.mainButton} onPress={() => settingsHandler()}>
					<Ionicons name="md-settings-outline" size={58} color={darkTheme ? gridColor.whiteColor : gridColor.blackColor} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	mainWrapper: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	mainButton: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
