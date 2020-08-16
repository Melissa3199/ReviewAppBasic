import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
import theme from "../constants/Theme"
import Profile from '../screens/profile'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> {
           return{
               headerTitle : ()=><Header navigation={navigation} title={'Home'}/>
            };
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    },
  

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor : theme.COLORS.DEFAULT,
        headerStyle : {
            backgroundColor :theme.COLORS.DEFAULT,
        }

    }
}
);
export default HomeStack;