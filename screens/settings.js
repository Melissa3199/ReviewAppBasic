import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from '../styles/global';

export default function Settings() {
    return(
        <View style={globalStyles.container}>
            <Text>Settings</Text>
        </View>
    );
};

