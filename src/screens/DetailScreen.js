import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Platform,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { getUser } from '../store/actions/userAction';

const DetailScreen = ({ user: { user, loading }, navigation, getUser }) => {
	const id = navigation.getParam('userId');
	const title = navigation.getParam('title');
	const body = navigation.getParam('body');
	useEffect(() => {
		getUser(id);
	}, []);

	return (
		<View>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Feather name="arrow-left" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>{title.slice(0, 15)}...</Text>
			</View>
			<View style={styles.body}>
				<Text style={styles.postTitle}>{title}</Text>
				<Text style={styles.post}>{body}</Text>
			</View>
			{user === null ? (
				<ActivityIndicator
					style={{ marginTop: 30 }}
					size="large"
					color="#8753B5"
				/>
			) : (
				<View style={styles.postInfo}>
					<View style={styles.imgContainer}>
						<Image
							source={{ uri: user.thumbnailUrl }}
							style={styles.authorImage}
						/>
					</View>
					<View style={styles.authorInfo}>
						<Text style={styles.authorName}>{user.name}</Text>
						<Text style={styles.authorEmail}>✉️ {user.email}</Text>
						<Text style={styles.authorWebsite}>🌐 {user.website}</Text>
					</View>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#8753B5',
		paddingTop: Platform.OS === 'android' ? 35 : 55,
		paddingBottom: 15,
		paddingHorizontal: 10,
		flexDirection: 'row',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},

	headerTitle: {
		fontFamily: 'bree-bold',
		fontSize: 20,
		marginLeft: 15,
	},
	body: {
		padding: 10,
	},
	postTitle: {
		fontFamily: 'bree-bold',
		fontSize: 20,
		color: '#002D60',
	},
	post: {
		fontFamily: 'worksans-regular',
		fontSize: 14,
		lineHeight: 20,
		marginTop: 10,
	},
	authorImage: {
		width: '100%',
		height: '100%',
	},
	imgContainer: {
		backgroundColor: 'red',
		borderRadius: 100,
		width: 80,
		height: 80,
		overflow: 'hidden',
		borderWidth: 4,
		borderColor: '#8753B5',
		marginTop: 20,
		alignSelf: 'center',
	},
	authorInfo: {},
	authorName: {
		fontFamily: 'bree-bold',
		fontSize: 18,
		textAlign: 'center',
		marginBottom: 8,
		color: '#002D60',
	},
	authorEmail: {
		fontFamily: 'worksans-regular',
		fontSize: 16,
		textAlign: 'center',
	},
	authorWebsite: {
		fontFamily: 'worksans-regular',
		fontSize: 16,
		textAlign: 'center',
	},
});

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { getUser })(DetailScreen);
