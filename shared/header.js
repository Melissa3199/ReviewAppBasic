import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';




export default function Header({ navigation, title }) {

    const pressMenu = () => {
        navigation.openDrawer();
    }

    return (
            <View style={styles.header}/*ImageBackground style={styles.header} source={require('../assets/game_bg.png')}*/>
                <MaterialIcons name='menu' size={28} color='white' onPress={pressMenu} style={styles.icon} />
                <View style={styles.headerTitle}>
                    <Image style={styles.headerImage} source={require('../assets/heart_logo.png')} />
                    <Text style={styles.textStyle}>{title}</Text>
                </View>
            </View /*ImageBackground*/>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        color: '#F9AA33',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 0,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerImage: {
        width: 26,
        height: 26,
        marginRight: 10,
    },


}
);
