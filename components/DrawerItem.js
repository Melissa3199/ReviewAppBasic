
import React, { Component,useState} from "react";
import {
  StyleSheet,Text, TouchableOpacity, View, FlatList, Image,
} from "react-native";
import theme from "../constants/Theme"
import Icon from "react-native-vector-icons/Fontisto";



export default function DrawerItem({ navigation, icon, name, screenName })  {
  return(
    <TouchableOpacity
      style={styles.menuItem} 
      onPress={() =>
        navigation.navigate(`${screenName}`, { isStatusBarHidden: false })
      }
    >
      <Icon name={icon} size={18} color="white" style={{ margin: 15,opacity: 0.7 }} />
      <Text style={styles.menuItemText}>{name}</Text>
    </TouchableOpacity>
  )
    
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:'transparent' ,
          paddingTop:20, 
        },
        image : 
        {
          height:80,
          width:80,
          borderRadius:60,
          backgroundColor:'red', 
          marginTop:30,
          marginLeft:25
          
          
        }, 
        icon : 
        {
          color:'white' ,
        },
        name : 
        {
          fontSize: 15,
          fontWeight: "300",
          padding:20,
          marginTop:40,
          fontFamily: "Montserrat-Bold",
          textTransform: "uppercase",
          color:theme.COLORS.PRIMARY,
        }, 
       
        menuItem: {
          flexDirection: "row",
          marginLeft:40,
        },
        menuItemText: {
          fontSize: 15,
          fontWeight: "300",
          color: 'white',
          margin: 15, 
          marginLeft:0,
          fontFamily: "Montserrat-Regular",
          textTransform: "uppercase",
                    
        },
       
      
      });