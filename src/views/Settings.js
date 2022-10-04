import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Switch } from 'react-native'

import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'

import { globalStyles, gridColor } from '../common/GlobalStyles'
import { NavHeader } from '../components/NavHeader'

import { toggleThemeMode } from '../Store/Actions/settingsActions'

export const Settings = ({ navigation }) => {
	const dispatch = useDispatch()

	let darkTheme = useSelector((state) => state.settings.darkTheme)

	const toggleSwitch = useCallback(() => {
		dispatch(toggleThemeMode(!darkTheme))
	}, [dispatch, darkTheme])

	const toAccount = () => {
		navigation.navigate('Account')
	}

	const settingActions = {
		toHelp: () => {
			navigation.navigate('Help')
		},
		toNotifications: () => {
			navigation.navigate('Notification')
		},
	}

	return (
		<View style={[globalStyles.section, { backgroundColor: darkTheme ? gridColor.darkMode : gridColor.lightMode }]}>
			<View style={[globalStyles.container, styles.mainWrapper]}>
				<NavHeader navigation={navigation} />

				<Text style={[globalStyles.mainTitle, { color: darkTheme ? gridColor.whiteColor : gridColor.blackColor }]}>Настройки</Text>

				<ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
					<View style={styles.settingItem}>
						<Text style={[styles.settingItemTitle, { color: darkTheme ? gridColor.whiteColor : gridColor.blackColor }]}>Профиль</Text>

						<TouchableOpacity activeOpacity={0.5} style={styles.settingItemField} onPress={() => toAccount()}>
							<View style={styles.settingItemField_Image}>
								<Ionicons name="person-circle" size={65} color="#f6f5f8" />
							</View>

							<View style={styles.settingItemArticle}>
								<Text style={[styles.settingItemArticle_Title, { color: darkTheme ? gridColor.whiteColor : gridColor.blackColor }]}>Исаев Максим</Text>
								<Text style={styles.settingItemArticle_Subtitle}>Персональные данные</Text>
							</View>

							<View style={styles.settingItem_Icon}>
								<Entypo name="chevron-small-right" size={24} color="#3e3e3e" />
							</View>
						</TouchableOpacity>
					</View>

					<View style={styles.settingItem}>
						<Text style={[styles.settingItemTitle, { color: darkTheme ? gridColor.whiteColor : gridColor.blackColor }]}>Общие настройки</Text>

						<TouchableOpacity disabled activeOpacity={0.5} style={[styles.settingItemField, styles.settingItemField_disabled, { marginBottom: 18 }]}>
							<View style={[styles.settingItemField_Image, styles.settingItemField_ImageSetting, { backgroundColor: '#fef0e7' }]}>
								<Ionicons name="ios-earth" size={22} color="#f96d28" />
							</View>

							<View style={styles.settingItemArticle}>
								<Text style={[styles.settingItemArticle_Title, { color: darkTheme ? gridColor.whiteColor : gridColor.blackColor }]}>Язык</Text>
								<Text style={styles.settingItemArticle_Subtitle}>Русский</Text>
							</View>

							<View style={styles.settingItem_Icon}>
								<Entypo name="chevron-small-right" size={24} color="#3e3e3e" />
							</View>
						</TouchableOpacity>

						<TouchableOpacity activeOpacity={0.5} style={[styles.settingItemField, { marginBottom: 18 }]} onPress={settingActions.toNotifications}>
							<View style={[styles.settingItemField_Image, styles.settingItemField_ImageSetting, { backgroundColor: '#e7f7ff' }]}>
								<MaterialIcons name="notifications" size={22} color="#1ea3ea" />
							</View>

							<View style={styles.settingItemArticle}>
								<Text style={[styles.settingItemArticle_Title, { color: darkTheme ? gridColor.whiteColor : gridColor.blackColor }]}>Уведомления</Text>
							</View>

							<View style={styles.settingItem_Icon}>
								<Entypo name="chevron-small-right" size={24} color="#3e3e3e" />
							</View>
						</TouchableOpacity>

						<View style={[styles.settingItemField, { marginBottom: 18 }]}>
							<View style={[styles.settingItemField_Image, styles.settingItemField_ImageSetting, { backgroundColor: '#ecebfe' }]}>
								<Ionicons name="moon-sharp" size={19} color="#5731fb" />
							</View>

							<View style={styles.settingItemArticle}>
								<Text style={[styles.settingItemArticle_Title, { color: darkTheme ? gridColor.whiteColor : gridColor.blackColor }]}>Темная тема</Text>
							</View>

							<View style={styles.settingItem_Switch}>
								<Switch trackColor={{ false: '#f6f5f8', true: '#1fb8fc' }} ios_backgroundColor="#f6f5f8" onValueChange={() => toggleSwitch()} value={darkTheme} />
							</View>
						</View>

						<TouchableOpacity activeOpacity={0.5} style={[styles.settingItemField, { marginBottom: 18 }]} onPress={settingActions.toHelp}>
							<View style={[styles.settingItemField_Image, styles.settingItemField_ImageSetting, { backgroundColor: '#ffe7ed' }]}>
								<Ionicons name="help-buoy" size={21} color="#f72958" />
							</View>

							<View style={styles.settingItemArticle}>
								<Text style={[styles.settingItemArticle_Title, { color: darkTheme ? gridColor.whiteColor : gridColor.blackColor }]}>Помощь</Text>
							</View>

							<View style={styles.settingItem_Icon}>
								<Entypo name="chevron-small-right" size={24} color="#3e3e3e" />
							</View>
						</TouchableOpacity>
					</View>

					{/* <TouchableOpacity onPress={() => toggleModeHandler()}>
						<Text>toggle mode</Text>
					</TouchableOpacity> */}
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	mainWrapper: {
		flexDirection: 'column',
	},
	settingItem: {
		flexDirection: 'column',
		marginBottom: 20,
	},
	settingItemTitle: {
		paddingVertical: 12,
		fontSize: 20,
		fontWeight: '500',
		color: '#3e3e3e',
		paddingBottom: 26,
	},

	settingItemField: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	settingItemField_disabled: {
		opacity: 0.3,
	},
	settingItemField_Image: {
		marginRight: 12,
	},
	settingItemField_ImageSetting: {
		width: 42,
		height: 42,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
	},
	settingItemArticle: {},
	settingItemArticle_Title: {
		fontSize: 17,
		fontWeight: '400',
		color: '#3e3e3e',
	},
	settingItemArticle_Subtitle: {
		fontSize: 12,
		fontWeight: '400',
		color: '#a7aab0',
		marginTop: 4,
	},
	settingItem_Icon: {
		width: 32,
		height: 32,
		borderRadius: 6,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
		backgroundColor: '#f6f5f8',
	},
	settingItem_Switch: {
		marginLeft: 'auto',
		transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
	},
})
