import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Main } from '../views/Main'
import { Settings } from '../views/Settings'
import { Account } from '../views/Account'
import { Help } from '../views/Help'
import { Notification } from '../views/Notification'

const Stack = createNativeStackNavigator()

export const Navigaton = () => {
	const paramObject = {
		headerShown: false,
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Main" component={Main} options={paramObject} />
				<Stack.Screen name="Settings" component={Settings} options={paramObject} />
				<Stack.Screen name="Account" component={Account} options={paramObject} />
				<Stack.Screen name="Help" component={Help} options={paramObject} />
				<Stack.Screen name="Notification" component={Notification} options={paramObject} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
