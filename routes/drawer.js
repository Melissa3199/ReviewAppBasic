import React, { Component } from "react";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import theme from "../constants/Theme"
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import ProfileStack from './profileStack'
import img from '../assets/THUG.jpg'
import DrawerMenu from '../components/DrawerMenu'

const screens = {
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,

    },
    Profile :
    {
        screen : ProfileStack,
    }
}
const CustomerDrawerComponent = (props) =>(
    <SafeAreaView style={styles.container}>
    <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
    <Image source={require('../assets/Reid.jpg')} style={{height:100, width:100, borderRadius:60,backgroundColor:'red'} }/>
    </View>
    <ScrollView>
        <DrawerItems {...props} />
    </ScrollView> 
 </SafeAreaView>
)
const rootDrawerNavigator = createDrawerNavigator(screens, {
    // drawerBackgroundColor: theme.COLORS.PRIMARY,
     contentOptions: {
        activeTintcolor: theme.COLORS.WHITE,
        inactiveTintColor: theme.COLORS.WHITE,
        activeBackgroundColor: "transparent",
        itemStyle: {
            
            backgroundColor: "transparent",
            paddingVertical: 16,
            paddingHorizonal: 12,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            overflow: "hidden"
          },
      },
      contentComponent: DrawerMenu
}, 


);
export default createAppContainer(rootDrawerNavigator);

const styles = StyleSheet.create({
    container:{
       flex: 1, 
       backgroundColor: "#F96332",
    },
    text :{
        fontFamily: "montserrat-regular",
        textTransform: "uppercase",
        fontWeight: "300"
    },
 
    

});
