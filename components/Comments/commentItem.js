import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Card from '../../shared/card';
import globalStyle, { images } from "../../styles/global";


export default function CommentItem({ item  }) {
    
    return (
        <Card>
            <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'space-between' }}>
              {/*  <Image style={styles.profilepic} source={item.avatar} />*/}
                
                <Text style={styles.commentTitle}>{item.username}</Text>

                <Image source={images.ratings[item.rating]}/>
            </View>
            <Text style={styles.commentText}>{item.comment}</Text>

        </Card>
    );
};
const styles = StyleSheet.create({

    item: {
        fontSize: 20,
        color: 'grey',
        padding: 16,
        borderColor: '#bbb',

    },
    commentText: {
        //  marginLeft: 20,
        color: 'grey',
    },
    profilepic: {

        /*width: thumbMeasure,
        height: thumbMeasure,*/
        borderRadius: 50,
        borderWidth: 0

    },

});