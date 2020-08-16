import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export const CustomButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress, nameIcon, sizeIcon } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
            <Icon name={nameIcon} size={sizeIcon} color="white"  />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        display: 'flex',
        flexDirection:'row',

        height: 50,
        borderRadius: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#f96332',
        shadowColor: '#f96332',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
    text: {
        fontSize: 16,
        marginBottom:3,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Regular',
    },
});