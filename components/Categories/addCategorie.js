import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { CustomButton } from '../../shared/custom-button';


export default function AddCategorie({ submitCategorieHandler }) {
    const [text,setText]=useState('');
    const changeHandler = (val)=>{
        setText(val);
    };
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder={'Nom Catégorie...'}
                onChangeText = {changeHandler}
                value={text}
            />
            <CustomButton
                title="Ajouter Catégorie"
                onPress={()=>submitCategorieHandler(text)}
                style={{ marginLeft: '25%', width: 200,  }}
                textStyle={{ fontSize: 15 }}
                nameIcon="star"
                sizeIcon={15}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    input:{
        //paddingTop:1000,
        marginTop:30,
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#bbb',

    },
});