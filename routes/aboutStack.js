import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';
import globalStyle, { globalStyles } from '../styles/global';


const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={'About'} />
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: globalStyle.COLORS.PRIMARY,
        }
    }
}
);
export default AboutStack;