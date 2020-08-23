import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, Slider } from 'react-native';
import { CustomButton } from '../../shared/custom-button';



export default function AddComment({ submitCommentHandler }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    };

    return (
        <View>

       
            <TextInput
                style={styles.input}
                placeholder={'Votre Commentaire...'}
                onChangeText={changeHandler}
                value={text}
            />
            <CustomButton
                title="Ajouter Commentaire"
                onPress={() => {
                    submitCommentHandler(text); 
                }}
                style={{ marginLeft: '20%', width: 250 }}
                textStyle={{ fontSize: 15 }}
                nameIcon="comment"
                sizeIcon={15}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        //paddingTop:1000,
        marginTop: 30,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',

    },
});