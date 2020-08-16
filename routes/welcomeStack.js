import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Welcome from '../screens/welcome';
import SignIn from '../screens/signIn';
import Subscribe from '../screens/subscribe';
import React from 'react';
import globalStyle, { globalStyles } from '../styles/global'


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
    
   
}

const WelcomeStack = createStackNavigator(screens, {defaultNavigationOptions: {
    
    header: null,

}
});
export default createAppContainer(WelcomeStack);