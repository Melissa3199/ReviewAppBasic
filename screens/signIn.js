import React, { useRef,useState } from 'react';
import { StyleSheet, Text, Animated, View, ImageBackground, TouchableOpacity, TextInput, Image, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import globalStyle, { images, globalStyles } from "../styles/global";
import { CustomButton } from '../shared/custom-button';
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik';
import * as yup from 'yup';
import {Input} from 'galio-framework';
import * as firebase from "firebase";

export default function SignIn({navigation}) {
    const [onFocus1, setOnFocus1]= useState('false'); 
    const [onFocus2, setOnFocus2]= useState('false'); 
    const [onFocus3, setOnFocus3]= useState('false'); 

    const customStyle1 = onFocus1 ? styles.Focus : styles.input;
    const customStyle2 = onFocus2 ? styles.Focus : styles.input;
    const customStyle3 = onFocus3 ? styles.Focus : styles.input;



    const subscribeSchema = yup.object({
    
        email: yup.string()
            .required()
            .email(),
        password: yup.string()
            .required()
            .min(8),
    });
    
    async function signInUser (email,password){
        try{
           await firebase.auth().signInWithEmailAndPassword(email,password);
        }
        catch(error){
            console.log(error.toString());
        }

    }


    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
        <ScrollView  style={styles.container} >
            <Animatable.Text  animation="bounceInRight" iterationCount={1} direction="alternate" style={styles.titleStyle}>Sign-In</Animatable.Text>
            <Image source={require('../assets/red2.jpg')} style={styles.image}/>
            <Animatable.View  style={[styles.container,{backgroundColor: null}]} animation="bounceInLeft" iterationCount={1} direction="alternate">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={subscribeSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        console.log(values);
                    }}
                >
                    {props => (
                        <View style={styles.form}>
                            <Text style={styles.textStyle}>Email</Text>
                            <Input
                                right
                                icon="mail"
                                family="feather"
                                iconSize={14}
                                iconColor='#07085B'
                                placeholder='ex: myemail@account.com'
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                                onBlur={props.handleBlur('email')}
                                onFocus = {()=>{setOnFocus1(false);setOnFocus2(true);setOnFocus3(false)}}
                                style={customStyle2}                                
                            />
                            <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>

                            <Text style={styles.textStyle}>Password</Text>
                            <Input
                                password viewPass
                                iconColor='#07085B'
                                placeholder='min: 8 caracters'
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                                onBlur={props.handleBlur('password')}
                                onFocus = {()=>{setOnFocus1(false);setOnFocus2(false);setOnFocus3(true)}}
                                style={customStyle3}                                
                            />
                            <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>
                            <CustomButton title='Go ' style={{width: 100,backgroundColor:'#07085B',marginLeft:'30%', marginBottom:40 }} nameIcon='arrow-right' sizeIcon={20} onPress={()=>{signInUser(props.values.username,props.values.email,props.values.password); navigation.navigate('Drawer')}}></CustomButton>

                        </View>

                    )}

                </Formik>
            </Animatable.View>
            
        </ScrollView>
        </TouchableWithoutFeedback>
    
                        
            
    )
}

const styles = StyleSheet.create({
    textStyle:{
        textAlign: 'justify',
        fontFamily: 'Montserrat-Bold',
        fontSize: 13,
        color:'#6c97c2',

    },
    form:{
        flexDirection: 'column',
        marginLeft:'12%',
        marginBottom:50
        
    },
    input: {
        backgroundColor: '#e6f2ff',
        borderColor:'#e6f2ff',
        borderWidth:5,
        width:300,
    },
    Focus: {
        backgroundColor:'white',
        borderColor:'#e6f2ff',
        borderWidth:5,
        width: 300,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height:340,
        marginBottom: -30
    },
    errorText: {
        color: 'crimson',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 10,
        marginTop: 6,
        //textAlign: 'center',
      },
    container: {
        paddingTop: 40,
        flex: 1,
        flexDirection: "column",
        backgroundColor:'white'
    },
    titleStyle: {
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: '#07085B',
    },

});
