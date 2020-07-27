import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


import HomeStack from './homeStack';
import AboutStack from './aboutStack';


const screens = {
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,

    },
}

const rootDrawerNavigator = createDrawerNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor : '#ffffff',
        headerStyle : {
            backgroundColor : '#F9AA33',
        }
    }
}
);
export default createAppContainer(rootDrawerNavigator);