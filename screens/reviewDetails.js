import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card'

export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam('rating');
    return (

        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.textStyle}>{navigation.getParam('title')}</Text>
                <Text style={globalStyles.textStyle}>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                   
                    <Image source={images.ratings[rating]} />
                </View>

            </Card>
        </View>


    );
};
const styles = StyleSheet.create({
    rating: {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        paddingTop : 16,
        marginTop : 16,
        borderTopWidth : 1,
        borderTopColor : '#eee',
    }
  },
);
