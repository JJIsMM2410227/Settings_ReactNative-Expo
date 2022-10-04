import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

// import { globalStyles, gridColor } from '../common/GlobalStyles'

import { NameField, EmailField, AgeField, UploadImageField } from '../components/formControls/controlCollection'

export const FormProfile = ({ colorTheme }) => {
	const defaultPersonData = {
		name: 'Исаев Максим',
		age: '2',
		email: 'maxim.isaev@email.ru',
	}

	return (
		<View style={styles.formProfile}>
			<ScrollView contentContainerStyle={{ paddingTop: 42 }}>
				<UploadImageField colorTheme={colorTheme} />
				<NameField colorTheme={colorTheme} name={defaultPersonData.name} />
				<AgeField colorTheme={colorTheme} age={defaultPersonData.age} />
				<EmailField colorTheme={colorTheme} email={defaultPersonData.email} />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	formProfile: {
		flexGrow: 1,
		flexDirection: 'column',
	},
})
