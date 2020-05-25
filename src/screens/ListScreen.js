import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Platform,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native';

import { getPosts } from '../store/actions/postActions';

import ListItem from '../components/ListItemComponent';
import AppHeader from '../components/AppHeaderComponent';

const ListScreen = ({
	post: { posts, loading, error },
	getPosts,
	navigation,
}) => {
	useEffect(() => {
		getPosts();
	}, []);
	return (
		<>
			<AppHeader />
			<View style={styles.container}>
				<Text style={styles.heading}>Posts</Text>
				{loading || error ? (
					<View>
						<ActivityIndicator
							style={{ marginTop: 30 }}
							size="large"
							color="#8753B5"
						/>
						<Text
							style={{
								textAlign: 'center',
								marginTop: 10,
								fontSize: 16,
								color: 'red',
							}}
						>
							{error}
						</Text>
					</View>
				) : (
					<FlatList
						data={posts}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									onPress={() =>
										navigation.navigate('PostDetail', {
											userId: item.userId,
											title: item.title,
											body: item.body,
										})
									}
								>
									<ListItem
										title={item.title.slice(0, 30)}
										postBody={item.body.slice(0, 50)}
									/>
								</TouchableOpacity>
							);
						}}
						initialNumToRender={10}
					/>
				)}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 3,
		backgroundColor: '#e0efff',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingHorizontal: 13,
		paddingVertical: 10,
		marginTop: Platform.OS === 'android' ? '-5%' : '-15%',
	},
	heading: {
		fontFamily: 'bree-bold',
		fontSize: 24,
		marginBottom: 10,
		color: '#002D60',
	},
});

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPosts })(ListScreen);
