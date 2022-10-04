import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { globalStyles, gridColor } from '../common/GlobalStyles'

import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export const NavHeader = ({ navigation }) => {
	let darkTheme = useSelector((state) => state.settings.darkTheme)
	return (
		<View style={styles.navHeader}>
			<TouchableOpacity
				activeOpacity={0.5}
				style={styles.toBackButton}
				onPress={() => {
					navigation.goBack()
				}}
			>
				<Ionicons style={styles.toBackButtonIcon} name="ios-chevron-back-outline" size={24} color={darkTheme ? gridColor.whiteColor : gridColor.blackColor} />
			</TouchableOpacity>

			{/* <TouchableOpacity activeOpacity={0.5} style={styles.acceptButton}>
				<MaterialIcons name="done" size={20} color="#fff" />
			</TouchableOpacity> */}
		</View>
	)
}

const styles = StyleSheet.create({
	navHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
	},

	toBackButton: {
		width: 48,
		height: 48,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: -18,
	},
	acceptButton: {
		width: 38,
		height: 38,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		backgroundColor: '#1fb8fc',
	},
})
