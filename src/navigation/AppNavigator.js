import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

const AppNavigator = createStackNavigator({
    Posts: {
        screen: ListScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    PostDetail: {
        screen: DetailScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
})

export default createAppContainer(AppNavigator);