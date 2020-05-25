import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItemComponent = ({ title, postBody }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.postTitle}>{title}</Text>
			<Text style={styles.post}>
				{postBody}...
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 5,
		backgroundColor: '#fff',
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 6,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	postTitle: {
		fontFamily: 'bree-bold',
		fontSize: 16,
		color: '#8753B5',
	},
	author: {
		fontFamily: 'worksans-regular',
		fontSize: 11,
		color: '#002D60',
	},
	post: {
		fontFamily: 'worksans-regular',
		fontSize: 14,
		paddingTop: 10,
	},
});

export default ListItemComponent;
