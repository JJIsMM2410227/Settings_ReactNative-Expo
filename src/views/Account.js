import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { globalStyles, gridColor } from '../common/GlobalStyles'

import { NavHeader } from '../components/NavHeader'
import { FormProfile } from '../components/FormProfile'

export const Account = ({ navigation }) => {
	const darkTheme = useSelector((state) => state.settings.darkTheme)

	return (
		<View style={[globalStyles.section, { backgroundColor: darkTheme ? gridColor.darkMode : gridColor.lightMode }]}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={[globalStyles.container, styles.mainWrapper]}>
					<NavHeader navigation={navigation} />
					<Text style={[globalStyles.mainTitle, { color: darkTheme ? gridColor.whiteColor : gridColor.blackColor }]}>Профиль</Text>

					<FormProfile colorTheme={darkTheme ? gridColor.whiteColor : gridColor.blackColor} />
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	mainWrapper: {
		flexDirection: 'column',
	},
})
