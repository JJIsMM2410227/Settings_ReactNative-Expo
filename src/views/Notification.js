import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

import { globalStyles, gridColor } from '../common/GlobalStyles'

import { NavHeader } from '../components/NavHeader'

export const Notification = ({ navigation }) => {
	const darkTheme = useSelector((state) => state.settings.darkTheme)
	return (
		<View style={[globalStyles.section, { backgroundColor: darkTheme ? gridColor.darkMode : gridColor.lightMode }]}>
			<View style={[globalStyles.container, styles.mainWrapper]}>
				<NavHeader navigation={navigation} />
				<Text style={[globalStyles.mainTitle, { color: darkTheme ? gridColor.whiteColor : gridColor.blackColor }]}>Центр{'\n'}уведомлений</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	mainWrapper: {},
})
