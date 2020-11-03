import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Welcome from '../screens/welcome';
import SignIn from '../screens/signIn';
import Subscribe from '../screens/subscribe';
import React from 'react';
import globalStyle, { globalStyles } from '../styles/global'
import Drawer from './drawer';
import Home from '../screens/home';
import HomeStack from './homeStack';

const screens = {
    Welcome: {
        screen: Welcome,
    },
    SignIn: {
        screen: SignIn,
    },
    Subscribe: {
        screen: Subscribe,
    },
    Drawer: {
        screen: Drawer,
    },
}

const WelcomeStack = createStackNavigator(screens);
export default createAppContainer(WelcomeStack);