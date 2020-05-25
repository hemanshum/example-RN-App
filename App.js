import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import store from './src/store';

import AppNavigator from './src/navigation/AppNavigator';

const fetchFonts = () => {
	return Font.loadAsync({
		'bree-bold': require('./assets/fonts/BreeSerif-Regular.ttf'),
		'worksans-regular': require('./assets/fonts/WorkSans-Regular.ttf'),
	});
};

const App = () => {
	const [fontLoaded, setFontLoaded] = useState(false);
	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(err) => alert(`problem loading fonts`)}
			/>
		);
	}
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<AppNavigator />
			</View>
		</Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
