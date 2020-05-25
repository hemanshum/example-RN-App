import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { newSearch } from '../store/actions/postActions';

const AppHeaderComponent = ({ newSearch }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [showSearchBar, setShowSearchBar] = useState(false);
	return (
		<View style={[styles.container, { paddingBottom: showSearchBar ? 100 : null }]}>
			<Text style={styles.textStyle}>Example App</Text>
			<View>
				<TextInput
					style={styles.searchStyle}
					onFocus={() => {
						setSearchTerm('');
						setShowSearchBar(true);
					}}
					onBlur={() => setShowSearchBar(false)}
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={setSearchTerm}
					value={searchTerm}
					onEndEditing={() => { newSearch(searchTerm) }}
					placeholder="Type and press enter to search"
					placeholderTextColor="rgba(0, 45, 97, 0.5)"
				/>
			</View>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#8753B5',
		height: 200,
		padding: 10,
		paddingHorizontal: 20,
	},
	searchStyle: {
		marginTop: 15,
		height: 40,
		borderColor: 'rgba(0, 45, 97, 0.2)',
		borderWidth: 2,
		height: 54,
		borderRadius: 30,
		paddingHorizontal: 25,
		color: '#fff',
		fontSize: 18,
		backgroundColor: 'rgba(0, 45, 97, 0.2)',
	},
	textStyle: {
		fontFamily: 'bree-bold',
		fontSize: 30,
		textAlign: 'center',
		color: '#002D60',
		marginTop: 30,
	},
});

AppHeaderComponent.propTypes = {
	newSearch: PropTypes.func.isRequired
}

export default connect(null, { newSearch })(AppHeaderComponent);