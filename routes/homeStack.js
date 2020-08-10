import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import BookDetails from '../screens/bookDetails';
import Header from '../shared/header';
import React from 'react';
import globalStyle, { globalStyles } from '../styles/global'


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
        headerTintColor : '#ffffff',
        headerStyle : {
            backgroundColor : globalStyle.COLORS.PRIMARY,
        }

    }
}
);
export default HomeStack;