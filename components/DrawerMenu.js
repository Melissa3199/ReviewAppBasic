import React, { Component,useState} from "react";
import {
  StyleSheet,Text, TouchableOpacity, View, FlatList, Image,TouchableWithoutFeedback,Dimensions
} from "react-native";
import theme from "../constants/Theme"
import Icon from "react-native-vector-icons/Fontisto";
import { Block } from "galio-framework";
const { width } = Dimensions.get("window");



const menuData = [
  { icon: "home", name: "HOME", screenName: "Home", key: 1 ,focused:false},
  { icon: 'fire', name: "MY BOOKS", screenName: "About", key: 2 ,focused:false },
];

class DrawerMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: "row",backgroundColor:"white",paddingBottom:20}}
       onPress={() => this.props.navigation.navigate('Profile')}
      >
      <Image source={require('../assets/profile-img.jpg')} style={styles.image }/>
      <Text style={styles.name}> Ro Maissa </Text>
      </TouchableOpacity >
      
         
        <FlatList style={{backgroundColor:theme.COLORS.PRIMARY,paddingTop:10}}
          data={menuData}
          renderItem={({ item }) => (
            <DrawerItem
              navigation={this.props.navigation}
              screenName={item.screenName}
              icon={item.icon}
              name={item.name}
              key={item.key}
              focused={item.focused}
            />
          )}
        />
      </View>
    );
  }
}

function DrawerItem({ navigation, icon, name, screenName,focused })  {
  const [stat,setStat]=useState({
    backgroundColor: theme.COLORS.PRIMARY,
    backgroundColor2: 'white',
    pressed: false,
  });

 
  const containerStyles = [
    styles.defaultStyle,
    focused ? [styles.activeStyle, styles.shadow] : null
  ];
  const changeColor  = () => {
    if(!stat.pressed){
       setStat({ pressed: true,backgroundColor: 'white', backgroundColor2: theme.COLORS.PRIMARY,});
    } else {
      setStat({ pressed: false, backgroundColor: theme.COLORS.PRIMARY, backgroundColor2: 'white'});
    }
  }
  return(
    <TouchableOpacity
     flex row style={containerStyles} backgroundColor={focused ? theme.COLORS.PRIMARY : "white"} 
      onPress={(key) => {
        navigation.navigate(`${screenName}`, { isStatusBarHidden: false }  )
        focused :true ; console.log(focused); this.focused=true ; 
              }
      }
      
    >
      
      <Block  flew row >
      <Icon name={icon} size={18}  style={{ margin: 15,opacity: 0.7 }} color={focused ? theme.COLORS.PRIMARY : "white"} />
      <Text style={styles.menuItemText} color={focused ? theme.COLORS.PRIMARY : "white"}  >{name} </Text> 
      </Block>
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
    marginLeft:27,
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: "300",
   color:"white",
    margin: 15, 
    marginLeft:0,
    fontFamily: "Montserrat-Regular",
    textTransform: "uppercase",
              
  },
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    color: "white"
  },
  activeStyle: {
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 30,
    color: "white"
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }

});

export default DrawerMenu;