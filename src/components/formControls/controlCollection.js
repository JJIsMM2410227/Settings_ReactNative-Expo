import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Platform } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

// import { globalStyles, gridColor } from '../../common/GlobalStyles'

export const NameField = ({ name, colorTheme }) => {
	const [currentValue, setCurrentValue] = useState(name)
	return (
		<View style={styles.formProfile_Item}>
			<Text style={[styles.formProfile_ItemLabel, { color: colorTheme }]}>Имя</Text>
			<TextInput style={[styles.formProfile_Field, { color: colorTheme }]} onChangeText={setCurrentValue} value={currentValue} placeholder="Ваше имя" placeholderTextColor={colorTheme} />
		</View>
	)
}

export const AgeField = ({ age, colorTheme }) => {
	const [currentValue, setCurrentValue] = useState(age)
	return (
		<View style={styles.formProfile_Item}>
			<Text style={[styles.formProfile_ItemLabel, { color: colorTheme }]}>Возраст</Text>
			<TextInput style={[styles.formProfile_Field, { color: colorTheme }]} onChangeText={setCurrentValue} value={currentValue} placeholder="Ваш возраст" keyboardType="numeric" placeholderTextColor={colorTheme} />
		</View>
	)
}

export const EmailField = ({ email, colorTheme }) => {
	const [currentValue, setCurrentValue] = useState(email)
	return (
		<View style={styles.formProfile_Item}>
			<Text style={[styles.formProfile_ItemLabel, { color: colorTheme }]}>E-mail {email.length}</Text>
			<TextInput style={[styles.formProfile_Field, { color: colorTheme }]} onChangeText={setCurrentValue} value={currentValue} placeholder="Например: maxim.isaev@email.ru" keyboardType="email-address" placeholderTextColor={currentValue.length === 0 ? '#a7aab0' : colorTheme} />
		</View>
	)
}

export const UploadImageField = ({ colorTheme }) => {
	const [image, setImage] = useState(null)

	useEffect(() => {
		;(async () => {
			if (Platform.OS !== 'web') {
				const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
				if (status !== 'granted') {
					alert('Необходимы разрешения камеры!')
				}
			}
		})()
	}, [])

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 0.5,
		})

		console.log(result)

		if (!result.cancelled) {
			setImage(result.uri)
		}
	}
	return (
		<View style={styles.formProfile_Item}>
			<Text style={[styles.formProfile_ItemLabel, { color: colorTheme }]}>Фото</Text>
			<View>
				<TouchableOpacity activeOpacity={0.5} onPress={pickImage}>
					<View style={styles.formProfile_PhotoWrapper}>{image ? <Image source={{ uri: image }} style={{ width: 82, height: 82 }} /> : <Ionicons name="ios-camera-outline" size={42} color="#3e3e3e" />}</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	formProfile_Item: {
		flexDirection: 'row',
		alignItems: 'stretch',
		marginBottom: 48,
	},
	formProfile_PhotoWrapper: {
		width: 82,
		height: 82,
		overflow: 'hidden',
		borderRadius: 50,
		marginBottom: 12,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f6f5f8',
	},
	formProfile_ItemLabel: {
		flex: 0.4,
		fontSize: 12,
		color: '#3e3e3e',
		paddingRight: 12,
	},
	formProfile_Field: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: '#f6f5f8',
		paddingBottom: 8,
		paddingHorizontal: 12,
		fontSize: 12,
		color: '#3e3e3e',
	},
})
