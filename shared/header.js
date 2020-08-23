import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../constants/Theme'
import { Input } from "galio-framework"
import { BookContext } from "../routes/BookContext"


export default function Header({ navigation }) {
    const [state, setState] = useContext(BookContext);


    const pressMenu = () => {
        navigation.openDrawer();
    }
    const [booktitle, setBooktitle] = useState('');
    return (
        <TouchableWithoutFeedback onPress={()=>{  
             Keyboard.dismiss(); 
             }}
             style={{backgroundColor:theme.COLORS.PRIMARY}}
        >

            <View style={styles.container}/*ImageBackground style={styles.header} source={require('../assets/game_bg.png')}*/>
                <View style={styles.header} >

                    <MaterialIcons name='menu' size={28} color='white' onPress={pressMenu} style={styles.icon} />
                    <Input rounded
                        placeholder="What are you looking for ?"
                        right
                        icon="search1"
                        family="antdesign"
                        iconSize={16}
                        iconColor="grey"
                        onEndEditing={() => setState({ bookTitle: booktitle })}
                        onChangeText={text => setBooktitle(text)}
                        style={styles.search}
                    />

                </View >


            </View>
        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    header: {
   
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: theme.COLORS.PRIMARY,
        height:10,
    
    },
    container: {
        flex: 1,
        
        color: theme.COLORS.PRIMARY,
    },
    textStyle: {
        fontSize: 19,
        fontWeight: "300",
        color: 'white',
        letterSpacing: 1,
        fontFamily: "Montserrat-Regular",
    },
    icon: {
        position: 'absolute',
        left: 0,
    },
    headerTitle: {
        flexDirection: 'row',

    },
    headerImage: {
        width: 26,
        height: 26,
        marginRight: 10,
    },
    search: {

        borderWidth: 0.5,
        borderRadius: 30,
        fontSize: 20,
        marginTop: -7,
        width: 250,
        height: 45,
        backgroundColor: 'white',
        borderColor: 'grey',
        marginLeft: 38,
        marginTop: 2


    },



}
);
