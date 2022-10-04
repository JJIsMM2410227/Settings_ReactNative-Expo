import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Navigaton } from './src/common/Navigation'

import { Provider } from 'react-redux'

import store from './src/Store/index'

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<Navigaton />
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
