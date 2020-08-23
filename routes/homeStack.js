import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
import theme from "../constants/Theme"
import Profile from '../screens/profile'
import BookDetails from '../screens/bookDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> {
           return{
               headerTitle : ()=><Header navigation={navigation} title={'Home'}/>
            };
        }
    },
    BookDetails: {
        screen: BookDetails,
        navigationOptions: {
            title: 'Book Details',
        }
    },
  

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor : theme.COLORS.PRIMARY,
        headerStyle : {
            backgroundColor :theme.COLORS.PRIMARY,
        }

    }
}
);
export default HomeStack;