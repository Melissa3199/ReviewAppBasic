import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../screens/profile';
import Header from '../shared/header';
import React from 'react';
import Settings from '../screens/settings'

const screens = {
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={'Profile'} />
            }
        }
    },
    Settings : {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
        }
    }
}

const ProfileStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#F9AA33',
        }
    }
}
);
export default ProfileStack;